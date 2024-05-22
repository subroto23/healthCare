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
exports.prescriptionController = void 0;
const CatchAsync_1 = __importDefault(require("../../utls/CatchAsync"));
const SendResponse_1 = __importDefault(require("../../utls/SendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const prescription_services_1 = require("./prescription.services");
const pickFields_1 = __importDefault(require("../../shared/pickFields"));
const globalConstant_1 = require("../../constants/globalConstant");
//Create Prescription
const createPrescription = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const data = req.body;
    const result = yield prescription_services_1.prescriptionServices.createPrescriptionIntoDB(user, data);
    //Send Response
    return (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Prescription Created successfully",
        data: result,
    });
}));
//get single Prescriotion
const getMyPrescription = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const options = (0, pickFields_1.default)(req === null || req === void 0 ? void 0 : req.query, globalConstant_1.pageAndSortConstants);
    const result = yield prescription_services_1.prescriptionServices.getmyPrescription(user, options);
    //Send Response
    return (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Prescription retrived successfully",
        meta: result === null || result === void 0 ? void 0 : result.meta,
        data: result === null || result === void 0 ? void 0 : result.data,
    });
}));
//get All Prescription
const getAllPrescriptions = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const options = (0, pickFields_1.default)(req === null || req === void 0 ? void 0 : req.query, globalConstant_1.pageAndSortConstants);
    const result = yield prescription_services_1.prescriptionServices.getAllPresCriptions(user, options);
    //Send Response
    return (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Prescription retrived successfully",
        meta: result === null || result === void 0 ? void 0 : result.meta,
        data: result === null || result === void 0 ? void 0 : result.data,
    });
}));
//get Single Prescription
const getSinglePrescriptions = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield prescription_services_1.prescriptionServices.getSinglePresCriptions(id);
    //Send Response
    return (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Prescription retrived successfully",
        data: result,
    });
}));
exports.prescriptionController = {
    createPrescription,
    getMyPrescription,
    getAllPrescriptions,
    getSinglePrescriptions,
};
