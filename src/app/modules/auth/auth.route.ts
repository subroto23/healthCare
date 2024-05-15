import express from "express";
import { authController } from "./auth.controller";
import validateRequest from "../../middleware/ValidatorRequest";
import { authValidationSchema } from "./auth.verification";
const router = express.Router();

router.post(
  "/login",
  validateRequest(authValidationSchema.loginValidationSchema),
  authController.login
);

export const authRoutes = router;
