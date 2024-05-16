import express from "express";
import { userController } from "./admin.controller";
import validateRequest from "../../middleware/ValidatorRequest";
import { adminValidationSchema } from "./admin.validation";
import { UserRole } from "@prisma/client";
import authGuard from "../../middleware/authGuard";
import { fileUploader } from "../../shared/fileUploader";
const routes = express.Router();

routes.post(
  "/create-admin",
  fileUploader.upload.single("file"),
  fileUploader.fileAndDataParser,
  authGuard(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  validateRequest(adminValidationSchema.createValidationSchema),
  userController.createUser
);
routes.get(
  "/",
  authGuard(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  userController.getAllUsers
);
routes.get(
  "/:id",
  authGuard(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  userController.getSingleUser
);
routes.delete(
  "/:id",
  authGuard(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  userController.deleteUser
);
routes.patch(
  "/:id",
  authGuard(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  validateRequest(adminValidationSchema.updateValidationSchema),
  userController.updateUser
);

export const adminRouter = routes;
