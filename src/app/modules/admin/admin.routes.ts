import express from "express";
import { userController } from "./admin.controller";
import validateRequest from "../../middleware/ValidatorRequest";
import { validationSchema } from "./admin.validation";
const routes = express.Router();

routes.post("/create-admin", userController.createUser);
routes.get("/", userController.getAllUsers);
routes.get("/:id", userController.getSingleUser);
routes.delete("/:id", userController.deleteUser);
routes.patch(
  "/:id",
  validateRequest(validationSchema.updateValidationSchema),
  userController.updateUser
);

export const adminRouter = routes;
