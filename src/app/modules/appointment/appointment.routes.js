"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const authGuard_1 = __importDefault(require("../../middleware/authGuard"));
const client_1 = require("@prisma/client");
const appointment_controller_1 = require("./appointment.controller");
const routes = express_1.default.Router();
routes.post("/create-appointment", (0, authGuard_1.default)(client_1.UserRole.PATIENT), appointment_controller_1.appoinmentController.createAppointment);
routes.get("/", (0, authGuard_1.default)(client_1.UserRole.SUPER_ADMIN, client_1.UserRole.ADMIN), appointment_controller_1.appoinmentController.getMyAppoinment);
routes.get("/my-appointment", (0, authGuard_1.default)(client_1.UserRole.PATIENT, client_1.UserRole.DOCTOR), appointment_controller_1.appoinmentController.getMyAppoinment);
routes.patch("/status/:id", (0, authGuard_1.default)(client_1.UserRole.ADMIN, client_1.UserRole.SUPER_ADMIN, client_1.UserRole.DOCTOR), appointment_controller_1.appoinmentController.updateAppointment);
exports.appointmentRoutes = routes;
