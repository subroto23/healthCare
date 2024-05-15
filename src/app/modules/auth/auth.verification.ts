import z from "zod";

const loginValidationSchema = z.object({
  body: z.object({
    email: z.string({
      invalid_type_error: "Your email is not valid",
      required_error: "Email is required",
    }),
    password: z.string({
      invalid_type_error: "Your Password is not valid",
      required_error: "Password is required",
    }),
  }),
});

export const authValidationSchema = {
  loginValidationSchema,
};
