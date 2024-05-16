import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  node_env: process.env.ENVIROMENT_DEVELOPMENT,
  frontendUrl: process.env.FRONTEND_URL,
  port: process.env.PORT || 5000,
  accessTokenSecrete: process.env.ACCESS_TOKEN_SECRET,
  refreshTokenSecrete: process.env.REFRESH_TOKEN_SECRETE,
  accessTokenExpire: process.env.ACCESS_TOKEN_EXPIRE,
  refreshTokenExpire: process.env.REFRESH_TOKEN_EXPIRE,
  resetTokenSecret: process.env.RESET_TOKEN_SECRETE,
  resetTokenExpire: process.env.RESET_TOKEN_EXPIRE,
  smtpEmail: process.env.SMTP_EMAIL,
  smtpPassword: process.env.SMTP_PASSWORD,
};
