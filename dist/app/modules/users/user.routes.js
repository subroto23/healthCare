"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const fileUploader_1 = require("../../shared/fileUploader");
const authGuard_1 = __importDefault(require("../../middleware/authGuard"));
const client_1 = require("@prisma/client");
const ValidatorRequest_1 = __importDefault(require("../../middleware/ValidatorRequest"));
const admin_validation_1 = require("../admin/admin.validation");
const doctors_validation_1 = require("../doctors/doctors.validation");
const doctors_controller_1 = require("../doctors/doctors.controller");
const patient_validation_1 = require("../patients/patient.validation");
const patient_controller_1 = require("../patients/patient.controller");
const admin_controller_1 = require("../admin/admin.controller");
const user_controller_1 = require("./user.controller");
const routes = express_1.default.Router();
routes.post("/create-admin", fileUploader_1.fileUploader.upload.single("file"), fileUploader_1.fileUploader.fileAndDataParser, (0, authGuard_1.default)(client_1.UserRole.ADMIN, client_1.UserRole.SUPER_ADMIN), (0, ValidatorRequest_1.default)(admin_validation_1.adminValidationSchema.createValidationSchema), admin_controller_1.adminController.createAdmin);
routes.post("/create-doctor", fileUploader_1.fileUploader.upload.single("file"), fileUploader_1.fileUploader.fileAndDataParser, (0, authGuard_1.default)(client_1.UserRole.ADMIN, client_1.UserRole.SUPER_ADMIN), (0, ValidatorRequest_1.default)(doctors_validation_1.doctorsValidationSchema.createDoctorsSchema), doctors_controller_1.doctorController.createDoctor);
routes.post("/create-patient", fileUploader_1.fileUploader.upload.single("file"), fileUploader_1.fileUploader.fileAndDataParser, (0, ValidatorRequest_1.default)(patient_validation_1.patientValidationSchema.createPatientValidationSchema), patient_controller_1.patientController.createPatient);
routes.get("/my-profile", (0, authGuard_1.default)(client_1.UserRole.ADMIN, client_1.UserRole.DOCTOR, client_1.UserRole.PATIENT, client_1.UserRole.SUPER_ADMIN), user_controller_1.userController.getMyProfile);
routes.patch("/update-profile", fileUploader_1.fileUploader.upload.single("file"), fileUploader_1.fileUploader.fileAndDataParser, (0, authGuard_1.default)(client_1.UserRole.ADMIN, client_1.UserRole.DOCTOR, client_1.UserRole.PATIENT, client_1.UserRole.SUPER_ADMIN), user_controller_1.userController.updateMyProfile);
routes.patch("/status/:id", (0, authGuard_1.default)(client_1.UserRole.ADMIN, client_1.UserRole.SUPER_ADMIN), user_controller_1.userController.userRoleChange);
exports.userRoutes = routes;
