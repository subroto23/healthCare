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
exports.authTokenServices = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const apiError_1 = __importDefault(require("../errors/apiError"));
const generateToken = (data, secret, expiresIn) => __awaiter(void 0, void 0, void 0, function* () {
    const token = yield jsonwebtoken_1.default.sign(data, secret, {
        expiresIn,
    });
    return token;
});
//Verify Token
const verifyToken = (token, secret) => __awaiter(void 0, void 0, void 0, function* () {
    let verifyUserData;
    try {
        verifyUserData = (yield jsonwebtoken_1.default.verify(token, secret));
    }
    catch (error) {
        throw new apiError_1.default(403, "Token verification failed!");
    }
    return verifyUserData;
});
exports.authTokenServices = {
    generateToken,
    verifyToken,
};
