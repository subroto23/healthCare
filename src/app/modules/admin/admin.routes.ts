import express from "express";
import { userController } from "./admin.controller";
import validateRequest from "../../middleware/ValidatorRequest";
import { validationSchema } from "./admin.validation";
import { UserRole } from "@prisma/client";
import authGuard from "../../middleware/authGuard";
const routes = express.Router();

routes.post(
  "/create-admin",
  authGuard(UserRole.ADMIN, UserRole.SUPER_ADMIN),
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
  validateRequest(validationSchema.updateValidationSchema),
  userController.updateUser
);

export const adminRouter = routes;
