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
routes.get(
  "/:id",
  authGuard(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  appoinmentController.getSingleAppointment
);
routes.delete(
  "/:id",
  authGuard(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  appoinmentController.deleteAppointment
);
routes.patch(
  "/:id",
  authGuard(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  appoinmentController.updateAppointment
);

export const appointmentRoutes = routes;
