"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRouter = void 0;
const express_1 = __importDefault(require("express"));
const admin_controller_1 = require("./admin.controller");
const ValidatorRequest_1 = __importDefault(require("../../middleware/ValidatorRequest"));
const admin_validation_1 = require("./admin.validation");
const client_1 = require("@prisma/client");
const authGuard_1 = __importDefault(require("../../middleware/authGuard"));
const routes = express_1.default.Router();
routes.get("/", (0, authGuard_1.default)(client_1.UserRole.ADMIN, client_1.UserRole.SUPER_ADMIN), admin_controller_1.adminController.getAllAdmin);
routes.get("/:id", (0, authGuard_1.default)(client_1.UserRole.ADMIN, client_1.UserRole.SUPER_ADMIN), admin_controller_1.adminController.getSingleAdmin);
routes.delete("/:id", (0, authGuard_1.default)(client_1.UserRole.ADMIN, client_1.UserRole.SUPER_ADMIN), admin_controller_1.adminController.deleteAdmin);
routes.patch("/:id", (0, authGuard_1.default)(client_1.UserRole.ADMIN, client_1.UserRole.SUPER_ADMIN), (0, ValidatorRequest_1.default)(admin_validation_1.adminValidationSchema.updateValidationSchema), admin_controller_1.adminController.updateAdmin);
exports.adminRouter = routes;
