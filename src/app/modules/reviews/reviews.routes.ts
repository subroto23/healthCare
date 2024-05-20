import express from "express";
import authGuard from "../../middleware/authGuard";
import { UserRole } from "@prisma/client";
import { reviewController } from "./reviews.controller";
const routes = express.Router();

routes.post(
  "/create-review",
  authGuard(UserRole.PATIENT),
  reviewController.createReviews
);
routes.get(
  "/my-review",
  authGuard(UserRole.PATIENT),
  reviewController.getMyReviews
);

routes.get(
  "/",
  authGuard(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  reviewController.getAllReview
);

export const reviewRoutes = routes;
