"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authValidationSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const loginValidationSchema = zod_1.default.object({
    body: zod_1.default.object({
        email: zod_1.default.string({
            invalid_type_error: "Your email is not valid",
            required_error: "Email is required",
        }),
        password: zod_1.default.string({
            invalid_type_error: "Your Password is not valid",
            required_error: "Password is required",
        }),
    }),
});
exports.authValidationSchema = {
    loginValidationSchema,
};
