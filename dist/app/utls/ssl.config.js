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
exports.sslInitializations = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = __importDefault(require("../config"));
const apiError_1 = __importDefault(require("../errors/apiError"));
const http_status_1 = __importDefault(require("http-status"));
const sslConfigiration = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { amount, tx, cusName, cusEmail, cusAdd1, cusPhone } = payload;
    try {
        const data = {
            store_id: config_1.default.payment.storeId,
            store_passwd: config_1.default.payment.storePassword,
            total_amount: amount,
            currency: "BDT",
            tran_id: tx, // use unique tran_id for each api call
            success_url: `https://subroto-health-care.vercel.app/success-payment?tran_id=${tx}&status=VALID`,
            fail_url: config_1.default.payment.failUrl,
            cancel_url: config_1.default.payment.cancelUrl,
            ipn_url: "https://health-care-taupe-eight.vercel.app/api/v1/payments/validation-payment",
            shipping_method: "Courier",
            product_name: "Appointments",
            product_category: "Services",
            product_profile: "general",
            cus_name: cusName,
            cus_email: cusEmail,
            cus_add1: cusAdd1,
            cus_add2: "N/A",
            cus_city: "N/A",
            cus_state: "N/A",
            cus_postcode: "N/A",
            cus_country: "Bangladesh",
            cus_phone: cusPhone,
            cus_fax: "N/A",
            ship_name: "N/A",
            ship_add1: "N/A",
            ship_add2: "N/A",
            ship_city: "N/A",
            ship_state: "N/A",
            ship_postcode: 1000,
            ship_country: "N/A",
        };
        const response = yield (0, axios_1.default)({
            method: "post",
            url: "https://sandbox.sslcommerz.com/gwprocess/v3/api.php",
            data,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
        return response.data.GatewayPageURL;
    }
    catch (error) {
        throw new apiError_1.default(http_status_1.default.BAD_REQUEST, "Payment Failed");
    }
});
//Validation
const validatePayements = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validationUrl = `${config_1.default.payment.sslValidationApi}?val_id=${payload.val_id}&store_id=${config_1.default.payment.storeId}&store_passwd=${config_1.default.payment.storePassword}&format=json`;
        const response = yield (0, axios_1.default)({
            method: "GET",
            url: validationUrl,
        });
        return response.data;
    }
    catch (error) {
        throw new apiError_1.default(http_status_1.default.BAD_REQUEST, "Payment Validation Failed");
    }
});
exports.sslInitializations = {
    validatePayements,
    sslConfigiration,
};
