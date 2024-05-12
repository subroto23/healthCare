import express from "express";
import { userController } from "./admin.controller";
const routes = express.Router();

routes.post("/create-user", userController.createAdmin);

export const adminRouter = routes;
