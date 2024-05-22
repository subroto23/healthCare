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
exports.appoinmentController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const CatchAsync_1 = __importDefault(require("../../utls/CatchAsync"));
const appointment_services_1 = require("./appointment.services");
const SendResponse_1 = __importDefault(require("../../utls/SendResponse"));
const pickFields_1 = __importDefault(require("../../shared/pickFields"));
const appointment_constant_1 = require("./appointment.constant");
const globalConstant_1 = require("../../constants/globalConstant");
const createAppointment = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const data = req.body;
    const result = yield appointment_services_1.appoinmentServices.createAppoinmentInotDB(user, data);
    //Send Response
    return (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Appointment Created successfully",
        data: result,
    });
}));
//Getting my apportment
const getMyAppoinment = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const filter = (0, pickFields_1.default)(req === null || req === void 0 ? void 0 : req.query, appointment_constant_1.appointmentFiltedableField);
    const options = (0, pickFields_1.default)(req === null || req === void 0 ? void 0 : req.query, globalConstant_1.pageAndSortConstants);
    const result = yield appointment_services_1.appoinmentServices.getMyAppoinment(user, filter, options);
    //Send Response
    return (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Appoinment reterived successfully",
        meta: result === null || result === void 0 ? void 0 : result.meta,
        data: result === null || result === void 0 ? void 0 : result.data,
    });
}));
//Getting ALL apportment
const getAllApportment = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const filter = (0, pickFields_1.default)(req === null || req === void 0 ? void 0 : req.query, appointment_constant_1.appointmentFiltedableField);
    const options = (0, pickFields_1.default)(req === null || req === void 0 ? void 0 : req.query, globalConstant_1.pageAndSortConstants);
    const result = yield appointment_services_1.appoinmentServices.getAllAppoinment(user, filter, options);
    //Send Response
    return (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Appoinment reterived successfully",
        meta: result === null || result === void 0 ? void 0 : result.meta,
        data: result === null || result === void 0 ? void 0 : result.data,
    });
}));
//Appointment Status Update
const updateAppointment = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const { id } = req.params;
    const result = yield appointment_services_1.appoinmentServices.updateAppointmentStatusFromDB(user, id, req.body);
    //Send Response
    return (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Appointment Status Updated successfully",
        data: result,
    });
}));
exports.appoinmentController = {
    createAppointment,
    getMyAppoinment,
    getAllApportment,
    updateAppointment,
};
