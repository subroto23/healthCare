import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import ApiError from "../errors/apiError";

type IAccessTokenData = {
  email: string;
  role: string;
};

const generateToken = async (
  data: IAccessTokenData,
  secret: Secret,
  expiresIn: string
) => {
  const token = await jwt.sign(data, secret, {
    expiresIn,
  });
  return token;
};

//Verify Token
const verifyToken = async (token: string, secret: Secret) => {
  let verifyUserData;
  try {
    verifyUserData = (await jwt.verify(token, secret)) as JwtPayload;
  } catch (error) {
    throw new ApiError(403, "Token verification failed!");
  }
  return verifyUserData;
};
export const authTokenServices = {
  generateToken,
  verifyToken,
};
