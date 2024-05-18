import express from "express";
import { adminRouter } from "../modules/admin/admin.routes";
import { authRoutes } from "../modules/auth/auth.route";
import { doctorRouter } from "../modules/doctors/doctor.route";
import { patientRouter } from "../modules/patients/patient.route";
import { userRoutes } from "../modules/users/user.routes";
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
];

//Looping All Routes
routesAndPath.forEach((route) => router.use(route.path, route.route));

export default router;
