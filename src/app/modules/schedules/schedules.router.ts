import express from "express";
import authGuard from "../../middleware/authGuard";
import { UserRole } from "@prisma/client";
import { scheduleController } from "./schedules.controller";
import validateRequest from "../../middleware/ValidatorRequest";
import { schudeleValidation } from "./schedule.validation";
const routes = express.Router();

//Create Schedule
routes.post(
  "/create-schedule",
  authGuard(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  validateRequest(schudeleValidation.createScheduleValidationSchema),
  scheduleController.createSchedule
);

export const scheduleRoutes = routes;
