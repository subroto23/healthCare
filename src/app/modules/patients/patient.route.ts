import express from "express";
import authGuard from "../../middleware/authGuard";
import { patientController } from "./patient.controller";
import { UserRole } from "@prisma/client";
const routes = express.Router();

routes.get(
  "/",
  authGuard(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  patientController.getAllPatient
);
routes.get(
  "/:id",
  authGuard(
    UserRole.ADMIN,
    UserRole.SUPER_ADMIN,
    UserRole.PATIENT,
    UserRole.DOCTOR
  ),
  patientController.getSinglePatient
);
routes.delete(
  "/:id",
  authGuard(UserRole.PATIENT, UserRole.SUPER_ADMIN, UserRole.ADMIN),
  patientController.deletePatient
);
routes.patch(
  "/:id",
  authGuard(UserRole.PATIENT),
  patientController.updatePatient
);

export const patientRouter = routes;
