"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewRoutes = void 0;
const express_1 = __importDefault(require("express"));
const authGuard_1 = __importDefault(require("../../middleware/authGuard"));
const client_1 = require("@prisma/client");
const reviews_controller_1 = require("./reviews.controller");
const routes = express_1.default.Router();
routes.post("/create-review", (0, authGuard_1.default)(client_1.UserRole.PATIENT), reviews_controller_1.reviewController.createReviews);
routes.get("/my-review", (0, authGuard_1.default)(client_1.UserRole.PATIENT), reviews_controller_1.reviewController.getMyReviews);
routes.get("/", (0, authGuard_1.default)(client_1.UserRole.SUPER_ADMIN, client_1.UserRole.ADMIN), reviews_controller_1.reviewController.getAllReview);
exports.reviewRoutes = routes;
