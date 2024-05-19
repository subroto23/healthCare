import z from "zod";

const createSpecilitiesValidationSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
    }),
  }),
});

export const specialitiesValidationSchema = {
  createSpecilitiesValidationSchema,
};
