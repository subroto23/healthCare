import express from "express";
import { adminRouter } from "../modules/admin/admin.routes";
import { authRoutes } from "../modules/auth/auth.route";
const router = express.Router();

const routesAndPath = [
  {
    path: "/admins",
    route: adminRouter,
  },
  {
    path: "/auth",
    route: authRoutes,
  },
];

//Looping All Routes
routesAndPath.forEach((route) => router.use(route.path, route.route));

export default router;
