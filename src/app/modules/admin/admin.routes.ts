import express from "express";
import { userController } from "./admin.controller";
const routes = express.Router();

routes.post("/create-user", userController.createUser);
routes.get("/", userController.getAllUsers);
routes.get("/:id", userController.getSingleUser);
routes.delete("/delete-user/:id", userController.deleteUser);
routes.patch("/update-user/:id", userController.updateUser);

export const adminRouter = routes;
