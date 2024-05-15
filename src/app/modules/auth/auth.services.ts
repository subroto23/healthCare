import bcrypt from "bcrypt";
import { prisma } from "../../constants/globalConstant";
import { ILogin } from "./auth.interface";
import generateAccessToken from "../../helper/generateAccessToken";

const loging = async (payload: ILogin) => {
  const { email, password } = payload;

  //Checking Email Exist or not
  const isExistLogger = await prisma.user.findUniqueOrThrow({
    where: {
      email,
      status: "ACTIVE",
    },
  });

  //Checking Password
  const isPassworMatch = bcrypt.compareSync(password, isExistLogger?.password);
  if (!isPassworMatch) {
    throw new Error("Password not match.Please try again later");
  }

  //Create access token
  const tokenValue = {
    email: isExistLogger.email,
    role: isExistLogger.role,
  };
  const accessToken = await generateAccessToken(tokenValue);
  if (!accessToken) {
    throw new Error("Your login credentials expired");
  }

  return { accessToken };
};

export const authServices = {
  loging,
};
