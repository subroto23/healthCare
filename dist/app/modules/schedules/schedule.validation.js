"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schudeleValidation = void 0;
const zod_1 = __importDefault(require("zod"));
const createScheduleValidationSchema = zod_1.default.object({
    body: zod_1.default.object({
        startDate: zod_1.default.string({
            required_error: "Start Date is required",
        }),
        endDate: zod_1.default.string({
            required_error: "End Date is required",
        }),
        startTime: zod_1.default.string({
            required_error: "Start time is required",
        }),
        endTime: zod_1.default.string({
            required_error: "End time is required",
        }),
    }),
});
exports.schudeleValidation = {
    createScheduleValidationSchema,
};
