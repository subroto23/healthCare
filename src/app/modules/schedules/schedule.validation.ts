import z from "zod";

const createScheduleValidationSchema = z.object({
  body: z.object({
    startDate: z.string({
      required_error: "Start Date is required",
    }),
    endDate: z.string({
      required_error: "End Date is required",
    }),
    startTime: z.string({
      required_error: "Start time is required",
    }),
    endTime: z.string({
      required_error: "End time is required",
    }),
  }),
});

export const schudeleValidation = {
  createScheduleValidationSchema,
};
