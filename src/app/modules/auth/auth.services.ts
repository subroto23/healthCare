import bcrypt from "bcrypt";
import { prisma } from "../../constants/globalConstant";
import { ILogin } from "./auth.interface";
import config from "../../config";
import { authTokenServices } from "../../helper/authToken";
import ApiError from "../../errors/apiError";

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
    throw new ApiError(403, "Your login credentials expired");
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

export const authServices = {
  loging,
  refreshToken,
};
