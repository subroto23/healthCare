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
exports.metaDataController = void 0;
const CatchAsync_1 = __importDefault(require("../../utls/CatchAsync"));
const SendResponse_1 = __importDefault(require("../../utls/SendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const metaData_services_1 = require("./metaData.services");
const metaDataFatchedFromDB = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const result = yield metaData_services_1.metaDataService.getFetchMetaDataFromDB(user);
    //Send Response
    return (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "MetaData retrived successfully",
        data: result,
    });
}));
exports.metaDataController = {
    metaDataFatchedFromDB,
};
