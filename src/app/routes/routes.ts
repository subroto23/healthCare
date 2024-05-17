import express from "express";
import { adminRouter } from "../modules/admin/admin.routes";
import { authRoutes } from "../modules/auth/auth.route";
import { doctorRouter } from "../modules/doctors/doctor.route";
const router = express.Router();

const routesAndPath = [
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
];

//Looping All Routes
routesAndPath.forEach((route) => router.use(route.path, route.route));

export default router;
