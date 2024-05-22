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
exports.adminController = void 0;
const admin_services_1 = require("./admin.services");
const CatchAsync_1 = __importDefault(require("../../utls/CatchAsync"));
const SendResponse_1 = __importDefault(require("../../utls/SendResponse"));
const pickFields_1 = __importDefault(require("../../shared/pickFields"));
const admin_constant_1 = require("./admin.constant");
const globalConstant_1 = require("../../constants/globalConstant");
const http_status_1 = __importDefault(require("http-status"));
const createAdmin = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const file = req.file;
    const data = req.body;
    const result = yield admin_services_1.adminServices.createAdminIntoDB(file, data);
    //Send Response
    return (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Admin Created successfully",
        data: result,
    });
}));
//Getting All Users
const getAllAdmin = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = (0, pickFields_1.default)(req === null || req === void 0 ? void 0 : req.query, admin_constant_1.adminFilterdFields);
    const options = (0, pickFields_1.default)(req === null || req === void 0 ? void 0 : req.query, globalConstant_1.pageAndSortConstants);
    const result = yield admin_services_1.adminServices.getAllAdminFromDB(filter, options);
    //Send Response
    //Send Response
    return (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Admins reterived successfully",
        meta: result === null || result === void 0 ? void 0 : result.meta,
        data: result === null || result === void 0 ? void 0 : result.data,
    });
}));
//Get Single User
const getSingleAdmin = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req === null || req === void 0 ? void 0 : req.params;
    const result = yield admin_services_1.adminServices.getSingleAdminFromDB(id);
    //Send Response
    return (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Admin reterived successfully",
        data: result,
    });
}));
//Update User
const updateAdmin = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = req.body;
    const result = yield admin_services_1.adminServices.updateAdminFromDB(id, data);
    //Send Response
    return (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Admin Updated successfully",
        data: result,
    });
}));
//Delete User
const deleteAdmin = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield admin_services_1.adminServices.deleteAdminFromDB(id);
    //Send Response
    return (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Admin Deleted successfully",
        data: result,
    });
}));
exports.adminController = {
    createAdmin,
    getAllAdmin,
    getSingleAdmin,
    deleteAdmin,
    updateAdmin,
};
