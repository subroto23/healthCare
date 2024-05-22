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
exports.scheduleController = void 0;
const CatchAsync_1 = __importDefault(require("../../utls/CatchAsync"));
const schedules_services_1 = require("./schedules.services");
const SendResponse_1 = __importDefault(require("../../utls/SendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const globalConstant_1 = require("../../constants/globalConstant");
const pickFields_1 = __importDefault(require("../../shared/pickFields"));
const schedules_constants_1 = require("./schedules.constants");
//Create Schedule
const createSchedule = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield schedules_services_1.scheduleServices.createSchedule(req.body);
    //Send Response
    return (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Create schedule successfully",
        data: result,
    });
}));
//get ALl Schedule
const getAllSchedule = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const filter = (0, pickFields_1.default)(req === null || req === void 0 ? void 0 : req.query, schedules_constants_1.scheduleFilteredAbleData);
    const options = (0, pickFields_1.default)(req === null || req === void 0 ? void 0 : req.query, globalConstant_1.pageAndSortConstants);
    const result = yield schedules_services_1.scheduleServices.getAllSchedule(user, filter, options);
    //Send Response
    return (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "All schedule reterived successfully",
        meta: result === null || result === void 0 ? void 0 : result.meta,
        data: result,
    });
}));
exports.scheduleController = {
    createSchedule,
    getAllSchedule,
};
