import express from "express";
import authGuard from "../../middleware/authGuard";
import { UserRole } from "@prisma/client";
import validateRequest from "../../middleware/ValidatorRequest";
import { doctorsValidationSchema } from "./doctors.validation";
import { doctorController } from "./doctors.controller";
const routes = express.Router();

routes.get(
  "/",
  authGuard(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  doctorController.getAllDoctor
);
routes.get(
  "/:id",
  authGuard(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  doctorController.getSingleDoctor
);
routes.delete(
  "/:id",
  authGuard(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  doctorController.deleteDoctor
);
routes.patch(
  "/:id",
  authGuard(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  validateRequest(doctorsValidationSchema.updateDoctorsSchema),
  doctorController.updateDoctor
);

export const doctorRouter = routes;
