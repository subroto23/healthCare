"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.doctorScheduleRoutes = void 0;
const express_1 = __importDefault(require("express"));
const authGuard_1 = __importDefault(require("../../middleware/authGuard"));
const client_1 = require("@prisma/client");
const doctorSchedule_controller_1 = require("./doctorSchedule.controller");
const routes = express_1.default.Router();
//Create
routes.post("/create-schedule", (0, authGuard_1.default)(client_1.UserRole.DOCTOR, client_1.UserRole.ADMIN, client_1.UserRole.PATIENT), doctorSchedule_controller_1.doctorScheduleController.createDoctorSchedule);
//Get ALl Schedule
routes.get("/", (0, authGuard_1.default)(client_1.UserRole.DOCTOR), doctorSchedule_controller_1.doctorScheduleController.getAllDoctorSchedule);
//Get ALl Schedule for patient
routes.get("/:id", (0, authGuard_1.default)(client_1.UserRole.PATIENT, client_1.UserRole.ADMIN), doctorSchedule_controller_1.doctorScheduleController.getAllDoctorScheduleForPatient);
//Delete Doctor Schedule
routes.delete("/:id", (0, authGuard_1.default)(client_1.UserRole.DOCTOR), doctorSchedule_controller_1.doctorScheduleController.deleteDoctorSchedule);
exports.doctorScheduleRoutes = routes;
