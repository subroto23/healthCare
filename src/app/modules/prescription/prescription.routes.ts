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

export const prescriptionRoutes = routes;
