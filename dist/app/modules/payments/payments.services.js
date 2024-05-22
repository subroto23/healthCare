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
exports.paymentServices = void 0;
const globalConstant_1 = require("../../constants/globalConstant");
const ssl_config_1 = require("../../utls/ssl.config");
const client_1 = require("@prisma/client");
const config_1 = __importDefault(require("../../config"));
//payment Initializations
const initialPayment = (user, appoinmentId) => __awaiter(void 0, void 0, void 0, function* () {
    const paymentData = yield globalConstant_1.prisma.payment.findUniqueOrThrow({
        where: {
            appointtmentId: appoinmentId,
        },
        include: {
            appointment: {
                include: {
                    patient: true,
                },
            },
        },
    });
    const paymentInitializedData = {
        amount: paymentData.amount,
        tx: paymentData.transactionId,
        cusName: paymentData.appointment.patient.name,
        cusEmail: paymentData.appointment.patient.email,
        cusAdd1: paymentData.appointment.patient.address,
        cusPhone: paymentData.appointment.patient.contactNumber,
    };
    const result = yield ssl_config_1.sslInitializations.sslConfigiration(paymentInitializedData);
    return {
        paymentUrl: result,
    };
});
//Validation Payment Request
const validatePayment = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    let response;
    if (config_1.default.node_env) {
        response = payload;
    }
    else {
        if (!payload || !payload.status || !(payload.status === "VALID")) {
            return {
                message: "Invalid Payment",
            };
        }
        response = yield ssl_config_1.sslInitializations.validatePayements(payload);
        if (!response || !response.status || response.status !== "VALID") {
            return {
                message: "Invalid Payment",
            };
        }
    }
    //
    const result = yield globalConstant_1.prisma.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        const paymentUpdated = yield tx.payment.update({
            where: {
                transactionId: response.tran_id,
            },
            data: {
                status: client_1.PaymentStatus.PAID,
                paymentGatewayData: response,
            },
        });
        //update Appointment Table
        yield tx.appointment.update({
            where: {
                id: paymentUpdated.appointtmentId,
            },
            data: {
                paymentStatus: client_1.PaymentStatus.PAID,
            },
        });
        return {
            message: "Congratulations! Your payment success",
        };
    }));
    return result;
});
exports.paymentServices = {
    initialPayment,
    validatePayment,
};
