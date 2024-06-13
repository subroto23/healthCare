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
exports.paymentController = void 0;
const CatchAsync_1 = __importDefault(require("../../utls/CatchAsync"));
const payments_services_1 = require("./payments.services");
const SendResponse_1 = __importDefault(require("../../utls/SendResponse"));
const http_status_1 = __importDefault(require("http-status"));
//Create Schedule
const initialPayment = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const { appoinmentId } = req.params;
    const result = yield payments_services_1.paymentServices.initialPayment(user, appoinmentId);
    //Send Response
    return (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Payment Ongoing successfully",
        data: result,
    });
}));
//Validate Payment
const validatePayment = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield payments_services_1.paymentServices.validatePayment(req.query);
    //Send Response
    return (0, SendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Payment schedule successfully.",
        data: result,
    });
}));
exports.paymentController = {
    initialPayment,
    validatePayment,
};
