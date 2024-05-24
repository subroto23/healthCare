import express from "express";
import { fileUploader } from "../../shared/fileUploader";
import { specialitiesController } from "./specialities.controller";
import authGuard from "../../middleware/authGuard";
import { UserRole } from "@prisma/client";
import validateRequest from "../../middleware/ValidatorRequest";
import { specialitiesValidationSchema } from "./specialities.validation";
const routes = express.Router();

routes.get(
  "/",
  // authGuard(
  //   UserRole.ADMIN,
  //   UserRole.SUPER_ADMIN,
  //   UserRole.PATIENT,
  //   UserRole.DOCTOR
  // ),
  specialitiesController.getAllSpecialites
);
//Create
routes.post(
  "/create-speciality",
  authGuard(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  fileUploader.upload.single("file"),
  fileUploader.fileAndDataParser,
  validateRequest(
    specialitiesValidationSchema.createSpecilitiesValidationSchema
  ),
  specialitiesController.createSpecilities
);
//Delete
routes.delete(
  "/:id",
  authGuard(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  specialitiesController.deleteSpecialites
);

export const specialityRouter = routes;
