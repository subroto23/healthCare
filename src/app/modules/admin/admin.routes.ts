import express from "express";
import { adminController } from "./admin.controller";
import validateRequest from "../../middleware/ValidatorRequest";
import { adminValidationSchema } from "./admin.validation";
import { UserRole } from "@prisma/client";
import authGuard from "../../middleware/authGuard";
const routes = express.Router();
routes.get(
  "/",
  authGuard(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  adminController.getAllAdmin
);
routes.get(
  "/:id",
  authGuard(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  adminController.getSingleAdmin
);
routes.delete(
  "/:id",
  authGuard(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  adminController.deleteAdmin
);
routes.patch(
  "/:id",
  authGuard(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  validateRequest(adminValidationSchema.updateValidationSchema),
  adminController.updateAdmin
);

export const adminRouter = routes;
