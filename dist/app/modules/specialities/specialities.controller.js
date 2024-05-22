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
exports.specialitiesController = void 0;
const CatchAsync_1 = __importDefault(require("../../utls/CatchAsync"));
const SendResponse_1 = __importDefault(require("../../utls/SendResponse"));
const specialities_services_1 = require("./specialities.services");
const http_status_1 = __importDefault(require("http-status"));
//Create Specialities
const createSpecilities = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const file = req.file;
    const data = req.body;
    const result = yield specialities_services_1.specialitiesServices.createspecialitiesIntoDB(file, data);
    //Send Response
    return (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Specialities Created successfully",
        data: result,
    });
}));
//Get all Specialities
const getAllSpecialites = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield specialities_services_1.specialitiesServices.getAllSpecialitiesFromDB();
    //Send Response
    return (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Specialities reterived successfully",
        data: result,
    });
}));
//Delete Specialities
const deleteSpecialites = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield specialities_services_1.specialitiesServices.deleteSpecialities(id);
    //Send Response
    return (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Speciality deleted successfully",
        data: result,
    });
}));
exports.specialitiesController = {
    createSpecilities,
    getAllSpecialites,
    deleteSpecialites,
};
