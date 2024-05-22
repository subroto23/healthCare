"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.patientRouter = void 0;
const express_1 = __importDefault(require("express"));
const authGuard_1 = __importDefault(require("../../middleware/authGuard"));
const patient_controller_1 = require("./patient.controller");
const client_1 = require("@prisma/client");
const routes = express_1.default.Router();
routes.get("/", (0, authGuard_1.default)(client_1.UserRole.ADMIN, client_1.UserRole.SUPER_ADMIN), patient_controller_1.patientController.getAllPatient);
routes.get("/:id", (0, authGuard_1.default)(client_1.UserRole.ADMIN, client_1.UserRole.SUPER_ADMIN, client_1.UserRole.PATIENT, client_1.UserRole.DOCTOR), patient_controller_1.patientController.getSinglePatient);
routes.delete("/:id", (0, authGuard_1.default)(client_1.UserRole.PATIENT, client_1.UserRole.SUPER_ADMIN, client_1.UserRole.ADMIN), patient_controller_1.patientController.deletePatient);
routes.patch("/:id", (0, authGuard_1.default)(client_1.UserRole.PATIENT), patient_controller_1.patientController.updatePatient);
exports.patientRouter = routes;
