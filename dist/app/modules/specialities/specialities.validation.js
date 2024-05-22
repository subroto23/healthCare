"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.specialitiesValidationSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const createSpecilitiesValidationSchema = zod_1.default.object({
    body: zod_1.default.object({
        title: zod_1.default.string({
            required_error: "Title is required",
        }),
    }),
});
exports.specialitiesValidationSchema = {
    createSpecilitiesValidationSchema,
};
