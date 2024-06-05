import express from "express";
import authGuard from "../../middleware/authGuard";
import { UserRole } from "@prisma/client";
import { doctorScheduleController } from "./doctorSchedule.controller";
const routes = express.Router();

//Create
routes.post(
  "/create-schedule",
  authGuard(UserRole.DOCTOR, UserRole.ADMIN, UserRole.PATIENT),
  doctorScheduleController.createDoctorSchedule
);

//Get ALl Schedule
routes.get(
  "/",
  authGuard(UserRole.DOCTOR),
  doctorScheduleController.getAllDoctorSchedule
);
//Get ALl Schedule for patient
routes.get(
  "/:id",
  authGuard(UserRole.PATIENT, UserRole.ADMIN),
  doctorScheduleController.getAllDoctorScheduleForPatient
);

//Delete Doctor Schedule
routes.delete(
  "/:id",
  authGuard(UserRole.DOCTOR),
  doctorScheduleController.deleteDoctorSchedule
);

export const doctorScheduleRoutes = routes;
