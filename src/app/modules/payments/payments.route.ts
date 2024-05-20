import express from "express";
import { paymentController } from "./payments.controller";
import authGuard from "../../middleware/authGuard";
import { UserRole } from "@prisma/client";
const routes = express.Router();

routes.get("/validation-payment", paymentController.validatePayment);

routes.post(
  "/init-payment/:appoinmentId",
  authGuard(UserRole.PATIENT),
  paymentController.initialPayment
);

export const paymentRoutes = routes;
