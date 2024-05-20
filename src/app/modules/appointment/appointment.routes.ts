import express from "express";
import authGuard from "../../middleware/authGuard";
import { UserRole } from "@prisma/client";
import { appoinmentController } from "./appointment.controller";
const routes = express.Router();

routes.post(
  "/create-appointment",
  authGuard(UserRole.PATIENT),
  appoinmentController.createAppointment
);

routes.get(
  "/",
  authGuard(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  appoinmentController.getMyAppoinment
);

routes.get(
  "/my-appointment",
  authGuard(UserRole.PATIENT, UserRole.DOCTOR),
  appoinmentController.getMyAppoinment
);

routes.patch(
  "/status/:id",
  authGuard(UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.DOCTOR),
  appoinmentController.updateAppointment
);

export const appointmentRoutes = routes;
