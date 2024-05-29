"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.specialityRouter = void 0;
const express_1 = __importDefault(require("express"));
const fileUploader_1 = require("../../shared/fileUploader");
const specialities_controller_1 = require("./specialities.controller");
const authGuard_1 = __importDefault(require("../../middleware/authGuard"));
const client_1 = require("@prisma/client");
const ValidatorRequest_1 = __importDefault(require("../../middleware/ValidatorRequest"));
const specialities_validation_1 = require("./specialities.validation");
const routes = express_1.default.Router();
routes.get("/", 
// authGuard(
//   UserRole.ADMIN,
//   UserRole.SUPER_ADMIN,
//   UserRole.PATIENT,
//   UserRole.DOCTOR
// ),
specialities_controller_1.specialitiesController.getAllSpecialites);
//Create
routes.post("/create-speciality", (0, authGuard_1.default)(client_1.UserRole.ADMIN, client_1.UserRole.SUPER_ADMIN), fileUploader_1.fileUploader.upload.single("file"), fileUploader_1.fileUploader.fileAndDataParser, (0, ValidatorRequest_1.default)(specialities_validation_1.specialitiesValidationSchema.createSpecilitiesValidationSchema), specialities_controller_1.specialitiesController.createSpecilities);
//Delete
routes.delete("/:id", (0, authGuard_1.default)(client_1.UserRole.ADMIN, client_1.UserRole.SUPER_ADMIN), specialities_controller_1.specialitiesController.deleteSpecialites);
exports.specialityRouter = routes;
