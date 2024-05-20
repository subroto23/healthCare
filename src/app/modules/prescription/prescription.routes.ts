import express from "express";
import { UserRole } from "@prisma/client";
import authGuard from "../../middleware/authGuard";
import { prescriptionController } from "./prescription.controller";
const routes = express.Router();

routes.post(
  "/create-prescription",
  authGuard(UserRole.DOCTOR),
  prescriptionController.createPrescription
);
routes.get(
  "/my-prescription",
  authGuard(UserRole.PATIENT),
  prescriptionController.getMyPrescription
);

routes.get(
  "/",
  authGuard(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  prescriptionController.getAllPrescriptions
);

routes.get(
  "/:id",
  authGuard(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.PATIENT),
  prescriptionController.getSinglePrescriptions
);

export const prescriptionRoutes = routes;
