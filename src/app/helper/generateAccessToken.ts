import jwt from "jsonwebtoken";
import config from "../config";

type IAccessTokenData = {
  email: string;
  role: string;
};

const generateAccessToken = async (data: IAccessTokenData) => {
  const token = await jwt.sign(data, config.accessTokenSecrete as string, {
    expiresIn: config.accessTokenExpire,
  });
  return token;
};
export default generateAccessToken;
