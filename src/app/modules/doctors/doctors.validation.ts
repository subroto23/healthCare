import { Gender } from "@prisma/client";
import z from "zod";

const createDoctorsSchema = z.object({
  body: z.object({
    password: z.string().optional(),
    doctor: z.object({
      name: z.string({ required_error: "Name is required" }),
      email: z.string({ required_error: "Invalid email format" }).email(),
      contactNumber: z.string({ required_error: "Contact number is required" }),
      address: z.string({ required_error: "Address is required" }),
      registrationsNumber: z.string({
        required_error: "Registration number is required",
      }),
      experience: z.string({
        required_error: "Experience details are required",
      }),
      gender: z.enum([Gender.MALE, Gender.FEMALE]),
      appointmentFee: z
        .number({ required_error: "Fee must be a positive number" })
        .int(),
      qualification: z.string({ required_error: "Qualification is required" }),
      currentWorkingPlace: z.string({
        required_error: "Current working place is required",
      }),
      designation: z.string({ required_error: "Designation is required" }),
      averageRating: z.number().optional(),
    }),
  }),
});

const updateDoctorsSchema = z.object({
  body: z.object({
    password: z.string().optional(),
    doctor: z.object({
      contactNumber: z
        .string({ required_error: "Contact number is required" })

        .optional(),
      address: z
        .string({ required_error: "Address is required" })

        .optional(),
      experience: z
        .string({ required_error: "Experience details are required" })

        .optional(),
      appointmentFee: z
        .number({ required_error: "Fee must be a positive number" })
        .int()
        .min(0)
        .optional(),
      qualification: z
        .string({ required_error: "Qualification is required" })

        .optional(),
      currentWorkingPlace: z
        .string({ required_error: "Current working place is required" })

        .optional(),
      designation: z
        .string({ required_error: "Designation is required" })

        .optional(),
      averageRating: z.number().optional().optional(),
    }),
  }),
});

export const doctorsValidationSchema = {
  createDoctorsSchema,
  updateDoctorsSchema,
};
