"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.doctorsValidationSchema = void 0;
const client_1 = require("@prisma/client");
const zod_1 = __importDefault(require("zod"));
const createDoctorsSchema = zod_1.default.object({
    body: zod_1.default.object({
        password: zod_1.default.string().optional(),
        doctor: zod_1.default.object({
            name: zod_1.default.string({ required_error: "Name is required" }),
            email: zod_1.default.string({ required_error: "Invalid email format" }).email(),
            contactNumber: zod_1.default.string({ required_error: "Contact number is required" }),
            address: zod_1.default.string({ required_error: "Address is required" }),
            registrationsNumber: zod_1.default.string({
                required_error: "Registration number is required",
            }),
            experience: zod_1.default.string({
                required_error: "Experience details are required",
            }),
            gender: zod_1.default.enum([client_1.Gender.MALE, client_1.Gender.FEMALE]),
            appointmentFee: zod_1.default
                .number({ required_error: "Fee must be a positive number" })
                .int(),
            qualification: zod_1.default.string({ required_error: "Qualification is required" }),
            currentWorkingPlace: zod_1.default.string({
                required_error: "Current working place is required",
            }),
            designation: zod_1.default.string({ required_error: "Designation is required" }),
            averageRating: zod_1.default.number().optional(),
        }),
    }),
});
const updateDoctorsSchema = zod_1.default.object({
    body: zod_1.default.object({
        password: zod_1.default.string().optional(),
        doctor: zod_1.default.object({
            contactNumber: zod_1.default
                .string({ required_error: "Contact number is required" })
                .optional(),
            address: zod_1.default
                .string({ required_error: "Address is required" })
                .optional(),
            experience: zod_1.default
                .string({ required_error: "Experience details are required" })
                .optional(),
            appointmentFee: zod_1.default
                .number({ required_error: "Fee must be a positive number" })
                .int()
                .min(0)
                .optional(),
            qualification: zod_1.default
                .string({ required_error: "Qualification is required" })
                .optional(),
            currentWorkingPlace: zod_1.default
                .string({ required_error: "Current working place is required" })
                .optional(),
            designation: zod_1.default
                .string({ required_error: "Designation is required" })
                .optional(),
            averageRating: zod_1.default.number().optional().optional(),
        }),
    }),
});
exports.doctorsValidationSchema = {
    createDoctorsSchema,
    updateDoctorsSchema,
};
