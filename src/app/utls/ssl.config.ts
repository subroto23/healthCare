import axios from "axios";
import config from "../config";
import ApiError from "../errors/apiError";
import httpStatus from "http-status";
import { ISslInitialType } from "../modules/payments/payments.interface";

const sslConfigiration = async (payload: ISslInitialType) => {
  try {
    const data = {
      store_id: config.payment.storeId,
      store_passwd: config.payment.storePassword,
      total_amount: payload.amount,
      currency: "BDT",
      tran_id: payload.tx, // use unique tran_id for each api call
      success_url: config.payment.successUrl,
      fail_url: config.payment.failUrl,
      cancel_url: config.payment.cancelUrl,
      ipn_url: "http://localhost:3030/ipn",
      shipping_method: "Courier",
      product_name: "Appointments",
      product_category: "Services",
      product_profile: "general",
      cus_name: payload.cusName,
      cus_email: payload.cusEmail,
      cus_add1: payload.cusAdd1,
      cus_add2: "N/A",
      cus_city: "N/A",
      cus_state: "N/A",
      cus_postcode: "N/A",
      cus_country: "Bangladesh",
      cus_phone: payload.cusPhone,
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
      method: "POST",
      url: config.payment.sessionApi,
      data: data,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response.data.GateWayPageURL;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Payment Failed");
  }
};

//Validation
const validatePayements = async (payload: any) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${config.payment.sslValidationApi}?val_id=${payload.val_id}&store_id=${config.payment.storeId}&store_passwd=${config.payment.storePassword}&format=json`,
    });
    return response.data;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Payment Validation Failed");
  }
};

export const sslInitializations = {
  sslConfigiration,
  validatePayements,
};
