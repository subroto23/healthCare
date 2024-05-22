"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const payments_controller_1 = require("./payments.controller");
const authGuard_1 = __importDefault(require("../../middleware/authGuard"));
const client_1 = require("@prisma/client");
const routes = express_1.default.Router();
routes.get("/validation-payment", payments_controller_1.paymentController.validatePayment);
routes.post("/init-payment/:appoinmentId", (0, authGuard_1.default)(client_1.UserRole.PATIENT), payments_controller_1.paymentController.initialPayment);
exports.paymentRoutes = routes;
