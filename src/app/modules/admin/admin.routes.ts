import express from "express";
import { userController } from "./admin.controller";
const routes = express.Router();

routes.post("/create-admin", userController.createUser);
routes.get("/", userController.getAllUsers);
routes.get("/:id", userController.getSingleUser);
routes.delete("/:id", userController.deleteUser);
routes.patch("/:id", userController.updateUser);

export const adminRouter = routes;
