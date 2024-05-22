"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metaDataRoutes = void 0;
const express_1 = __importDefault(require("express"));
const authGuard_1 = __importDefault(require("../../middleware/authGuard"));
const client_1 = require("@prisma/client");
const metaData_controller_1 = require("./metaData.controller");
const routes = express_1.default.Router();
routes.get("/", (0, authGuard_1.default)(client_1.UserRole.SUPER_ADMIN, client_1.UserRole.ADMIN, client_1.UserRole.PATIENT, client_1.UserRole.DOCTOR), metaData_controller_1.metaDataController.metaDataFatchedFromDB);
exports.metaDataRoutes = routes;
