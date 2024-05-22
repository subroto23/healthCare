"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authServices = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const globalConstant_1 = require("../../constants/globalConstant");
const config_1 = __importDefault(require("../../config"));
const authToken_1 = require("../../helper/authToken");
const apiError_1 = __importDefault(require("../../errors/apiError"));
const http_status_1 = __importDefault(require("http-status"));
const sendEmail_1 = __importDefault(require("../../utls/sendEmail"));
const loging = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    //Checking Email Exist or not
    const userData = yield globalConstant_1.prisma.user.findUniqueOrThrow({
        where: {
            email,
            status: "ACTIVE",
        },
    });
    //Checking Password
    const isPassworMatch = bcrypt_1.default.compareSync(password, userData === null || userData === void 0 ? void 0 : userData.password);
    if (!isPassworMatch) {
        throw new apiError_1.default(404, "Password not match.Please try again later");
    }
    //Create access token
    const tokenValue = {
        email: userData.email,
        role: userData.role,
    };
    const accessToken = yield authToken_1.authTokenServices.generateToken(tokenValue, config_1.default.accessTokenSecrete, config_1.default.accessTokenExpire);
    if (!accessToken) {
        throw new apiError_1.default(403, "Your login credentials expired");
    }
    //Generate Refresh Token
    const refreshToken = yield authToken_1.authTokenServices.generateToken(tokenValue, config_1.default.refreshTokenSecrete, config_1.default.refreshTokenExpire);
    const result = {
        accessToken,
        needPasswordChange: userData.needPasswordChange,
        refreshToken,
    };
    return result;
});
//Generate Refresh Token When accessToken Expired
const refreshToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    //Verify token validaty
    const userData = yield authToken_1.authTokenServices.verifyToken(token, config_1.default.refreshTokenSecrete);
    //Refresh Token CHecking valid or not
    const isExistUser = yield globalConstant_1.prisma.user.findUniqueOrThrow({
        where: {
            email: userData === null || userData === void 0 ? void 0 : userData.email,
            status: "ACTIVE",
        },
    });
    //Create access token
    const tokenValue = {
        email: userData.email,
        role: userData.role,
    };
    const accessToken = yield authToken_1.authTokenServices.generateToken(tokenValue, config_1.default.accessTokenSecrete, config_1.default.accessTokenExpire);
    const result = {
        accessToken,
        needPasswordChange: isExistUser.needPasswordChange,
    };
    return result;
});
//Change Password
const changePassword = (user, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { oldPassword, newPassword } = payload;
    //Checking Email Exist or not
    const userData = yield globalConstant_1.prisma.user.findUniqueOrThrow({
        where: {
            email: user.email,
            status: "ACTIVE",
        },
    });
    if (!userData) {
        throw new apiError_1.default(http_status_1.default.UNAUTHORIZED, "You are unauthrized");
    }
    //Checking Password
    const isPassworMatch = bcrypt_1.default.compareSync(oldPassword, userData === null || userData === void 0 ? void 0 : userData.password);
    if (!isPassworMatch) {
        throw new apiError_1.default(404, "Password not match.");
    }
    //Hashing Password
    const hashPassword = yield bcrypt_1.default.hash(newPassword, 12);
    yield globalConstant_1.prisma.user.update({
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
});
//Forgotten Password
const forgottenPassword = (userEmail) => __awaiter(void 0, void 0, void 0, function* () {
    //Checking Email Exist or not
    const userData = yield globalConstant_1.prisma.user.findUniqueOrThrow({
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
    const resetToken = yield authToken_1.authTokenServices.generateToken(tokenValue, config_1.default.resetTokenSecret, config_1.default.resetTokenExpire);
    if (!resetToken) {
        throw new apiError_1.default(403, "Your login credentials expired");
    }
    //Reset Link Creation
    const resetLink = `${config_1.default.frontendUrl}/api/v1/auth/reset-password?user=${userData.id}&token=${resetToken}`;
    const html = `
     <div>
      <p>Reset Your Password</p>
        <p>
          <a href=${resetLink}>Reset Your Password</a>
       </p>
    </div>
  `;
    //send Email
    yield (0, sendEmail_1.default)(userData === null || userData === void 0 ? void 0 : userData.email, html);
    //
    return {
        message: "Please Check Your Email",
    };
});
//Reset Password
const resetPassword = (token, payload) => __awaiter(void 0, void 0, void 0, function* () {
    //Verify token validaty
    const userData = yield authToken_1.authTokenServices.verifyToken(token, config_1.default.resetTokenSecret);
    //Checking User Exist or not
    const isExistsUser = yield globalConstant_1.prisma.user.findUniqueOrThrow({
        where: {
            email: userData.email,
            id: payload.id,
            status: "ACTIVE",
        },
    });
    if (!isExistsUser) {
        throw new apiError_1.default(http_status_1.default.UNAUTHORIZED, "User not found");
    }
    //Hashing Password
    const hashPassword = yield bcrypt_1.default.hash(payload.password, 12);
    //update Password
    yield globalConstant_1.prisma.user.update({
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
});
exports.authServices = {
    loging,
    refreshToken,
    changePassword,
    forgottenPassword,
    resetPassword,
};
