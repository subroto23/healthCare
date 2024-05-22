import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  node_env: process.env.ENVIROMENT_DEVELOPMENT,
  frontendUrl: process.env.FRONTEND_URL,
  port: process.env.PORT || process.env.PORT,
  accessTokenSecrete: process.env.ACCESS_TOKEN_SECRET,
  refreshTokenSecrete: process.env.REFRESH_TOKEN_SECRETE,
  accessTokenExpire: process.env.ACCESS_TOKEN_EXPIRE,
  refreshTokenExpire: process.env.REFRESH_TOKEN_EXPIRE,
  resetTokenSecret: process.env.RESET_TOKEN_SECRETE,
  resetTokenExpire: process.env.RESET_TOKEN_EXPIRE,
  smtpEmail: process.env.SMTP_EMAIL,
  smtpPassword: process.env.SMTP_PASSWORD,
  fileUpload: {
    cloudName: process.env.CLOUD_NAME,
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET,
  },
  payment: {
    storeId: process.env.STORE_ID,
    storePassword: process.env.STORE_PASSWORD,
    sessionApi: process.env.SESSION_API,
    successUrl: process.env.SUCCESS_URL,
    failUrl: process.env.FAIL_URL,
    cancelUrl: process.env.CANCEL_UR,
    sslValidationApi: process.env.SSL_VALIDATION_API,
  },
};
