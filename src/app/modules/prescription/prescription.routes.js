"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prescriptionRoutes = void 0;
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const authGuard_1 = __importDefault(require("../../middleware/authGuard"));
const prescription_controller_1 = require("./prescription.controller");
const routes = express_1.default.Router();
routes.post("/create-prescription", (0, authGuard_1.default)(client_1.UserRole.DOCTOR), prescription_controller_1.prescriptionController.createPrescription);
routes.get("/my-prescription", (0, authGuard_1.default)(client_1.UserRole.PATIENT), prescription_controller_1.prescriptionController.getMyPrescription);
routes.get("/", (0, authGuard_1.default)(client_1.UserRole.SUPER_ADMIN, client_1.UserRole.ADMIN), prescription_controller_1.prescriptionController.getAllPrescriptions);
routes.get("/:id", (0, authGuard_1.default)(client_1.UserRole.SUPER_ADMIN, client_1.UserRole.ADMIN, client_1.UserRole.PATIENT), prescription_controller_1.prescriptionController.getSinglePrescriptions);
exports.prescriptionRoutes = routes;
