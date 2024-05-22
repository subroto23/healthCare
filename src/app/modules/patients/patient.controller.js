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
exports.patientController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const CatchAsync_1 = __importDefault(require("../../utls/CatchAsync"));
const patient_services_1 = require("./patient.services");
const SendResponse_1 = __importDefault(require("../../utls/SendResponse"));
const pickFields_1 = __importDefault(require("../../shared/pickFields"));
const patient_constants_1 = require("./patient.constants");
const globalConstant_1 = require("../../constants/globalConstant");
const createPatient = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const file = req.file;
    const data = req.body;
    const result = yield patient_services_1.patientServices.createPatientIntoDB(file, data);
    //Send Response
    return (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Patient Created successfully",
        data: result,
    });
}));
//Getting All Users
const getAllPatient = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = (0, pickFields_1.default)(req === null || req === void 0 ? void 0 : req.query, patient_constants_1.patientFilteredAbleField);
    const options = (0, pickFields_1.default)(req === null || req === void 0 ? void 0 : req.query, globalConstant_1.pageAndSortConstants);
    const result = yield patient_services_1.patientServices.getAllPatientFromDB(filter, options);
    //Send Response
    return (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Patient reterived successfully",
        meta: result === null || result === void 0 ? void 0 : result.meta,
        data: result === null || result === void 0 ? void 0 : result.data,
    });
}));
//Get Single User
const getSinglePatient = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req === null || req === void 0 ? void 0 : req.params;
    const result = yield patient_services_1.patientServices.getSinglePatientFromDB(id);
    //Send Response
    return (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Patient reterived successfully",
        data: result,
    });
}));
//Update User
const updatePatient = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = req.body;
    const result = yield patient_services_1.patientServices.updatePatientFromDB(id, data);
    //Send Response
    return (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Patient Updated successfully",
        data: result,
    });
}));
//Delete User
const deletePatient = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield patient_services_1.patientServices.deletePatientFromDB(id);
    //Send Response
    return (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Patient Deleted successfully",
        data: result,
    });
}));
exports.patientController = {
    createPatient,
    getAllPatient,
    getSinglePatient,
    deletePatient,
    updatePatient,
};
