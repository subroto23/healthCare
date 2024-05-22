"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.patientValidationSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const createPatientValidationSchema = zod_1.default.object({
    body: zod_1.default.object({
        password: zod_1.default.string(),
        patient: zod_1.default.object({
            email: zod_1.default.string({ required_error: "Email is required" }),
            name: zod_1.default.string({ required_error: "Name is required" }),
            contactNumber: zod_1.default.string({ required_error: "Contact Number is required" }),
            address: zod_1.default.string({ required_error: "Address is required" }),
        }),
    }),
});
const updatePatientValidationSchema = zod_1.default.object({
    body: zod_1.default.object({
        patient: zod_1.default.object({
            contactNumber: zod_1.default
                .string({ required_error: "Contact Number is required" })
                .optional(),
            address: zod_1.default.string({ required_error: "Address is required" }).optional(),
        }),
    }),
});
exports.patientValidationSchema = {
    createPatientValidationSchema,
    updatePatientValidationSchema,
};
