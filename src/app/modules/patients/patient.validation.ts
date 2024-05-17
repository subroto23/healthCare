import z, { string } from "zod";

const createPatientValidationSchema = z.object({
  body: z.object({
    password: z.string(),
    patient: z.object({
      email: z.string({ required_error: "Email is required" }),
      name: z.string({ required_error: "Name is required" }),
      contactNumber: z.string({ required_error: "Contact Number is required" }),
      address: z.string({ required_error: "Address is required" }),
    }),
  }),
});
const updatePatientValidationSchema = z.object({
  body: z.object({
    patient: z.object({
      contactNumber: z
        .string({ required_error: "Contact Number is required" })
        .optional(),
      address: z.string({ required_error: "Address is required" }).optional(),
    }),
  }),
});

export const patientValidationSchema = {
  createPatientValidationSchema,
  updatePatientValidationSchema,
};
