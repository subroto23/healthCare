import jwt from "jsonwebtoken";

type IAccessTokenData = {
  email: string;
  role: string;
};

const generateToken = async (
  data: IAccessTokenData,
  secret: string,
  expiresIn: string
) => {
  const token = await jwt.sign(data, secret, {
    expiresIn,
  });
  return token;
};
export default generateToken;
