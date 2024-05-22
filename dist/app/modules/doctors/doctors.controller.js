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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.doctorController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const CatchAsync_1 = __importDefault(require("../../utls/CatchAsync"));
const doctors_services_1 = require("./doctors.services");
const SendResponse_1 = __importDefault(require("../../utls/SendResponse"));
const pickFields_1 = __importDefault(require("../../shared/pickFields"));
const doctors_constants_1 = require("./doctors.constants");
const globalConstant_1 = require("../../constants/globalConstant");
const createDoctor = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const file = req.file;
    const data = req.body;
    const result = yield doctors_services_1.doctorServices.createDoctorIntoDB(file, data);
    //Send Response
    return (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Doctor Created successfully",
        data: result,
    });
}));
//Getting All Users
const getAllDoctor = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = (0, pickFields_1.default)(req === null || req === void 0 ? void 0 : req.query, doctors_constants_1.doctorFiltedField);
    const options = (0, pickFields_1.default)(req === null || req === void 0 ? void 0 : req.query, globalConstant_1.pageAndSortConstants);
    const result = yield doctors_services_1.doctorServices.getAllDoctorFromDB(filter, options);
    //Send Response
    return (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Doctor reterived successfully",
        meta: result === null || result === void 0 ? void 0 : result.meta,
        data: result === null || result === void 0 ? void 0 : result.data,
    });
}));
//Get Single User
const getSingleDoctor = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req === null || req === void 0 ? void 0 : req.params;
    const result = yield doctors_services_1.doctorServices.getSingleDoctorFromDB(id);
    //Send Response
    return (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Doctor reterived successfully",
        data: result,
    });
}));
//Update User
const updateDoctor = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const _a = req.body, { specialities } = _a, data = __rest(_a, ["specialities"]);
    const result = yield doctors_services_1.doctorServices.updateDoctorFromDB(id, specialities, data);
    //Send Response
    return (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Doctor Updated successfully",
        data: result,
    });
}));
//Delete User
const deleteDoctor = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield doctors_services_1.doctorServices.deleteDoctorFromDB(id);
    //Send Response
    return (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Doctor Deleted successfully",
        data: result,
    });
}));
exports.doctorController = {
    createDoctor,
    getAllDoctor,
    getSingleDoctor,
    deleteDoctor,
    updateDoctor,
};
