"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.doctorScheduleController = void 0;
const CatchAsync_1 = __importDefault(require("../../utls/CatchAsync"));
const doctorSchedule_service_1 = require("./doctorSchedule.service");
const SendResponse_1 = __importDefault(require("../../utls/SendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const pickFields_1 = __importDefault(require("../../shared/pickFields"));
const globalConstant_1 = require("../../constants/globalConstant");
const doctorSchedule_constants_1 = require("./doctorSchedule.constants");
const createDoctorSchedule = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const result = yield doctorSchedule_service_1.doctorScheduleServices.createDoctorScheduleIntoDB(user, req.body);
    //Send Response
    return (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Doctor Schedule Created successfully",
        data: result,
    });
}));
//get ALl Schedule
const getAllDoctorSchedule = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const filter = (0, pickFields_1.default)(req === null || req === void 0 ? void 0 : req.query, doctorSchedule_constants_1.doctorScheduleFilteredAbleData);
    const options = (0, pickFields_1.default)(req === null || req === void 0 ? void 0 : req.query, globalConstant_1.pageAndSortConstants);
    const result = yield doctorSchedule_service_1.doctorScheduleServices.getAllDoctorScheduleFromDB(user, filter, options);
    //Send Response
    return (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "All Doctor schedule reterived successfully",
        meta: result === null || result === void 0 ? void 0 : result.meta,
        data: result,
    });
}));
//Delete Schedule
const deleteDoctorSchedule = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const { id } = req.params;
    const result = yield doctorSchedule_service_1.doctorScheduleServices.deleteScheduleFromDB(user, id);
    //Send Response
    return (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Delete Doctor Schudeled successfully",
        data: result,
    });
}));
exports.doctorScheduleController = {
    createDoctorSchedule,
    getAllDoctorSchedule,
    deleteDoctorSchedule,
};
