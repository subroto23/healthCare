import express from "express";
import authGuard from "../../middleware/authGuard";
import { UserRole } from "@prisma/client";
import { metaDataController } from "./metaData.controller";
const routes = express.Router();

routes.get(
  "/",
  authGuard(
    UserRole.SUPER_ADMIN,
    UserRole.ADMIN,
    UserRole.PATIENT,
    UserRole.DOCTOR
  ),
  metaDataController.metaDataFatchedFromDB
);

export const metaDataRoutes = routes;
