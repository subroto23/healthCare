"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.doctorRouter = void 0;
const express_1 = __importDefault(require("express"));
const authGuard_1 = __importDefault(require("../../middleware/authGuard"));
const client_1 = require("@prisma/client");
const doctors_controller_1 = require("./doctors.controller");
const routes = express_1.default.Router();
routes.get("/", doctors_controller_1.doctorController.getAllDoctor);
routes.get("/:id", (0, authGuard_1.default)(client_1.UserRole.ADMIN, client_1.UserRole.SUPER_ADMIN, client_1.UserRole.PATIENT, client_1.UserRole.DOCTOR), doctors_controller_1.doctorController.getSingleDoctor);
routes.delete("/:id", (0, authGuard_1.default)(client_1.UserRole.ADMIN, client_1.UserRole.SUPER_ADMIN), doctors_controller_1.doctorController.deleteDoctor);
routes.patch("/:id", (0, authGuard_1.default)(client_1.UserRole.ADMIN, client_1.UserRole.SUPER_ADMIN, client_1.UserRole.DOCTOR), doctors_controller_1.doctorController.updateDoctor);
exports.doctorRouter = routes;
