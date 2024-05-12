import express from "express";
import { adminRouter } from "../modules/admin/admin.routes";
const router = express.Router();

const routesAndPath = [
  {
    path: "/users",
    route: adminRouter,
  },
];

//Looping All Routes
routesAndPath.forEach((route) => router.use(route.path, route.route));

export default router;
