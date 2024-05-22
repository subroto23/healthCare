"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduleRoutes = void 0;
const express_1 = __importDefault(require("express"));
const authGuard_1 = __importDefault(require("../../middleware/authGuard"));
const client_1 = require("@prisma/client");
const schedules_controller_1 = require("./schedules.controller");
const ValidatorRequest_1 = __importDefault(require("../../middleware/ValidatorRequest"));
const schedule_validation_1 = require("./schedule.validation");
const routes = express_1.default.Router();
//Create Schedule
routes.post("/create-schedule", (0, authGuard_1.default)(client_1.UserRole.ADMIN, client_1.UserRole.SUPER_ADMIN), (0, ValidatorRequest_1.default)(schedule_validation_1.schudeleValidation.createScheduleValidationSchema), schedules_controller_1.scheduleController.createSchedule);
//Get ALl Schedule
routes.get("/", (0, authGuard_1.default)(client_1.UserRole.DOCTOR), schedules_controller_1.scheduleController.getAllSchedule);
exports.scheduleRoutes = routes;
