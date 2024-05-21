import express from "express";
import { fileUploader } from "../../shared/fileUploader";
import authGuard from "../../middleware/authGuard";
import { UserRole } from "@prisma/client";
import validateRequest from "../../middleware/ValidatorRequest";
import { adminValidationSchema } from "../admin/admin.validation";
import { doctorsValidationSchema } from "../doctors/doctors.validation";
import { doctorController } from "../doctors/doctors.controller";
import { patientValidationSchema } from "../patients/patient.validation";
import { patientController } from "../patients/patient.controller";
import { adminController } from "../admin/admin.controller";
import { userController } from "./user.controller";
const routes = express.Router();

routes.post(
  "/create-admin",
  fileUploader.upload.single("file"),
  fileUploader.fileAndDataParser,
  authGuard(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  validateRequest(adminValidationSchema.createValidationSchema),
  adminController.createAdmin
);
routes.post(
  "/create-doctor",
  fileUploader.upload.single("file"),
  fileUploader.fileAndDataParser,
  authGuard(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  validateRequest(doctorsValidationSchema.createDoctorsSchema),
  doctorController.createDoctor
);

routes.post(
  "/create-patient",
  fileUploader.upload.single("file"),
  fileUploader.fileAndDataParser,
  validateRequest(patientValidationSchema.createPatientValidationSchema),
  patientController.createPatient
);

routes.get(
  "/my-profile",
  authGuard(
    UserRole.ADMIN,
    UserRole.DOCTOR,
    UserRole.PATIENT,
    UserRole.SUPER_ADMIN
  ),
  userController.getMyProfile
);

routes.patch(
  "/update-profile",
  fileUploader.upload.single("file"),
  fileUploader.fileAndDataParser,
  authGuard(
    UserRole.ADMIN,
    UserRole.DOCTOR,
    UserRole.PATIENT,
    UserRole.SUPER_ADMIN
  ),
  userController.updateMyProfile
);

routes.patch(
  "/status/:id",
  authGuard(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  userController.userRoleChange
);

export const userRoutes = routes;
