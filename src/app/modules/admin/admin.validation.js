"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminValidationSchema = void 0;
const client_1 = require("@prisma/client");
const zod_1 = __importDefault(require("zod"));
const adminValidation = zod_1.default.object({
    name: zod_1.default.string({
        required_error: "Name is required",
    }),
    email: zod_1.default.string({
        required_error: "Email is required",
    }),
    contactNumber: zod_1.default.string({
        required_error: "Contact Number is required",
    }),
});
const createValidationSchema = zod_1.default.object({
    body: zod_1.default.object({
        password: zod_1.default.string().optional(),
        role: zod_1.default
            .enum([client_1.UserRole.ADMIN, client_1.UserRole.DOCTOR, client_1.UserRole.PATIENT])
            .optional(),
        admin: adminValidation,
    }),
});
const updateValidationSchema = zod_1.default.object({
    body: zod_1.default.object({
        name: zod_1.default.string().optional(),
        contactNumber: zod_1.default.string().optional(),
    }),
});
exports.adminValidationSchema = {
    createValidationSchema,
    updateValidationSchema,
};
