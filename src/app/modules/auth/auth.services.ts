import bcrypt from "bcrypt";
import { prisma } from "../../constants/globalConstant";
import { IChangePassword, ILogin } from "./auth.interface";
import config from "../../config";
import { authTokenServices } from "../../helper/authToken";
import ApiError from "../../errors/apiError";
import { JwtPayload, Secret } from "jsonwebtoken";
import httpStatus from "http-status";
import sendEmail from "../../utls/sendEmail";

const loging = async (payload: ILogin) => {
  const { email, password } = payload;

  //Checking Email Exist or not
  const userData = await prisma.user.findUniqueOrThrow({
    where: {
      email,
      status: "ACTIVE",
    },
  });

  //Checking Password
  const isPassworMatch: boolean = bcrypt.compareSync(
    password,
    userData?.password
  );
  if (!isPassworMatch) {
    throw new ApiError(404, "Password not match.Please try again later");
  }

  //Create access token
  const tokenValue = {
    email: userData.email,
    role: userData.role,
  };
  const accessToken = await authTokenServices.generateToken(
    tokenValue,
    config.accessTokenSecrete as string,
    config.accessTokenExpire as string
  );
  if (!accessToken) {
    throw new ApiError(500, "Your login credentials expired");
  }

  //Generate Refresh Token
  const refreshToken = await authTokenServices.generateToken(
    tokenValue,
    config.refreshTokenSecrete as string,
    config.refreshTokenExpire as string
  );
  const result = {
    accessToken,
    needPasswordChange: userData.needPasswordChange,
    refreshToken,
  };
  return result;
};

//Generate Refresh Token When accessToken Expired
const refreshToken = async (token: string) => {
  //Verify token validaty
  const userData = await authTokenServices.verifyToken(
    token,
    config.refreshTokenSecrete as string
  );

  //Refresh Token CHecking valid or not
  const isExistUser = await prisma.user.findUniqueOrThrow({
    where: {
      email: userData?.email,
      status: "ACTIVE",
    },
  });

  //Create access token
  const tokenValue = {
    email: userData.email,
    role: userData.role,
  };
  const accessToken = await authTokenServices.generateToken(
    tokenValue,
    config.accessTokenSecrete as string,
    config.accessTokenExpire as string
  );
  const result = {
    accessToken,
    needPasswordChange: isExistUser.needPasswordChange,
  };
  return result;
};

//Change Password
const changePassword = async (user: JwtPayload, payload: IChangePassword) => {
  const { oldPassword, newPassword } = payload;
  //Checking Email Exist or not
  const userData = await prisma.user.findUniqueOrThrow({
    where: {
      email: user.email,
      status: "ACTIVE",
    },
  });
  if (!userData) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "You are unauthrized");
  }
  //Checking Password
  const isPassworMatch: boolean = bcrypt.compareSync(
    oldPassword,
    userData?.password
  );
  if (!isPassworMatch) {
    throw new ApiError(404, "Password not match.");
  }

  //Hashing Password
  const hashPassword: string = await bcrypt.hash(newPassword, 12);
  await prisma.user.update({
    where: {
      email: user.email,
      status: "ACTIVE",
      needPasswordChange: true,
    },
    data: {
      password: hashPassword,
      needPasswordChange: false,
    },
  });
  return {
    message: "Password Change Successfully",
  };
};

//Forgotten Password
const forgottenPassword = async (userEmail: string) => {
  //Checking Email Exist or not
  const userData = await prisma.user.findUniqueOrThrow({
    where: {
      email: userEmail,
      status: "ACTIVE",
    },
  });
  //Create access token
  const tokenValue = {
    email: userData.email,
    role: userData.role,
  };
  const resetToken = await authTokenServices.generateToken(
    tokenValue,
    config.resetTokenSecret as Secret,
    config.resetTokenExpire as string
  );
  if (!resetToken) {
    throw new ApiError(403, "Your login credentials expired");
  }
  //Reset Link Creation
  const resetLink = `${config.frontendUrl}/reset-password?user=${userData.id}&token=${resetToken}`;
  const html = `
     <div>
     
      <p>Reset Your Password</p>
        <p>
          <a href=${resetLink}>Reset Your Password</a>
       </p>
    </div>
  `;
  //send Email
  await sendEmail(userData?.email, html);
  //
  return {
    message: "Please Check Your Email",
  };
};

//Reset Password
const resetPassword = async (
  token: string,
  payload: { password: string; id: string }
) => {
  //Verify token validaty
  const userData = await authTokenServices.verifyToken(
    token,
    config.resetTokenSecret as string
  );
  //Checking User Exist or not
  const isExistsUser = await prisma.user.findUniqueOrThrow({
    where: {
      email: userData.email,
      id: payload.id,
      status: "ACTIVE",
    },
  });
  if (!isExistsUser) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "User not found");
  }
  //Hashing Password
  const hashPassword: string = await bcrypt.hash(payload.password, 12);

  //update Password
  await prisma.user.update({
    where: {
      email: isExistsUser.email,
      id: isExistsUser.id,
    },
    data: {
      password: hashPassword,
    },
  });
  return {
    message: "Password Reset Successfully",
  };
};

export const authServices = {
  loging,
  refreshToken,
  changePassword,
  forgottenPassword,
  resetPassword,
};
