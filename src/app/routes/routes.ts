import express from "express";
import { adminRouter } from "../modules/admin/admin.routes";
import { authRoutes } from "../modules/auth/auth.route";
import { doctorRouter } from "../modules/doctors/doctor.route";
import { patientRouter } from "../modules/patients/patient.route";
import { userRoutes } from "../modules/users/user.routes";
import { specialityRouter } from "../modules/specialities/specialities.route";
import { scheduleRoutes } from "../modules/schedules/schedules.router";
import { doctorScheduleRoutes } from "../modules/doctorSchedule/doctorSchedule.route";
import { appointmentRoutes } from "../modules/appointment/appointment.routes";
import { paymentRoutes } from "../modules/payments/payments.route";
import { prescriptionRoutes } from "../modules/prescription/prescription.routes";
import { reviewRoutes } from "../modules/reviews/reviews.routes";
import { metaDataRoutes } from "../modules/metaData/metaData.router";
const router = express.Router();

const routesAndPath = [
  {
    path: "/users",
    route: userRoutes,
  },
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/admins",
    route: adminRouter,
  },
  {
    path: "/doctors",
    route: doctorRouter,
  },
  {
    path: "/patients",
    route: patientRouter,
  },
  {
    path: "/specialities",
    route: specialityRouter,
  },
  {
    path: "/schedules",
    route: scheduleRoutes,
  },
  {
    path: "/doctor-schedule",
    route: doctorScheduleRoutes,
  },
  {
    path: "/appointments",
    route: appointmentRoutes,
  },
  {
    path: "/payments",
    route: paymentRoutes,
  },
  {
    path: "/prescriptions",
    route: prescriptionRoutes,
  },
  {
    path: "/reviews",
    route: reviewRoutes,
  },
  {
    path: "/meta-data",
    route: metaDataRoutes,
  },
];

//Looping All Routes
routesAndPath.forEach((route) => router.use(route.path, route.route));

export default router;
