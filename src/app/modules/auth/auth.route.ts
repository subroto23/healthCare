import express from "express";
import { authController } from "./auth.controller";
import validateRequest from "../../middleware/ValidatorRequest";
import { authValidationSchema } from "./auth.verification";
import authGuard from "../../middleware/authGuard";
import { UserRole } from "@prisma/client";
const router = express.Router();

router.post(
  "/login",
  validateRequest(authValidationSchema.loginValidationSchema),
  authController.login
);

router.post("/refresh-token", authController.refreshToken);
router.post(
  "/change-password",
  authGuard(
    UserRole.SUPER_ADMIN,
    UserRole.ADMIN,
    UserRole.PATIENT,
    UserRole.DOCTOR
  ),
  authController.changePassword
);

export const authRoutes = router;
