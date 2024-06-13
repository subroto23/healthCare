import axios from "axios";
import config from "../config";
import ApiError from "../errors/apiError";
import httpStatus from "http-status";
import { ISslInitialType } from "../modules/payments/payments.interface";

const sslConfigiration = async (payload: ISslInitialType) => {
  const { amount, tx, cusName, cusEmail, cusAdd1, cusPhone } = payload;
  try {
    const data = {
      store_id: config.payment.storeId,
      store_passwd: config.payment.storePassword,
      total_amount: amount,
      currency: "BDT",
      tran_id: tx, // use unique tran_id for each api call
      success_url: `https://subroto-health-care.vercel.app/success-payment?tran_id=${tx}&status=VALID`,
      fail_url: config.payment.failUrl,
      cancel_url: config.payment.cancelUrl,
      ipn_url:
        "https://health-care-taupe-eight.vercel.app/api/v1/payments/validation-payment",
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
    const response = await axios({
      method: "post",
      url: "https://sandbox.sslcommerz.com/gwprocess/v3/api.php",
      data,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response.data.GatewayPageURL;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Payment Failed");
  }
};

//Validation
const validatePayements = async (payload: any) => {
  try {
    const validationUrl = `${config.payment.sslValidationApi}?val_id=${payload.val_id}&store_id=${config.payment.storeId}&store_passwd=${config.payment.storePassword}&format=json`;
    const response = await axios({
      method: "GET",
      url: validationUrl,
    });
    return response.data;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Payment Validation Failed");
  }
};

export const sslInitializations = {
  validatePayements,
  sslConfigiration,
};
