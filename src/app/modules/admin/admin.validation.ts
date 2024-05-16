import { UserRole } from "@prisma/client";
import z from "zod";

const adminValidation = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
  email: z.string({
    required_error: "Email is required",
  }),
  contactNumber: z.string({
    required_error: "Contact Number is required",
  }),
});

const createValidationSchema = z.object({
  body: z.object({
    password: z.string().optional(),
    role: z
      .enum([UserRole.ADMIN, UserRole.DOCTOR, UserRole.PATIENT])
      .optional(),
    admin: adminValidation,
  }),
});

const updateValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    contactNumber: z.string().optional(),
  }),
});

export const adminValidationSchema = {
  createValidationSchema,
  updateValidationSchema,
};
