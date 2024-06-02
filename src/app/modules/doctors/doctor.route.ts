import express from "express";
import authGuard from "../../middleware/authGuard";
import { UserRole } from "@prisma/client";
import { doctorController } from "./doctors.controller";
const routes = express.Router();

routes.get("/", doctorController.getAllDoctor);
routes.get(
  "/:id",
  authGuard(
    UserRole.ADMIN,
    UserRole.SUPER_ADMIN,
    UserRole.PATIENT,
    UserRole.DOCTOR
  ),
  doctorController.getSingleDoctor
);
routes.delete(
  "/:id",
  authGuard(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  doctorController.deleteDoctor
);
routes.patch(
  "/:id",
  authGuard(UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.DOCTOR),
  doctorController.updateDoctor
);

export const doctorRouter = routes;
