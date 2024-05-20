import { Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { prisma } from "../../constants/globalConstant";
import { sslInitializations } from "../../utls/ssl.config";
import { PaymentStatus } from "@prisma/client";
import config from "../../config";

//payment Initializations
const initialPayment = async (user: JwtPayload, appoinmentId: string) => {
  const paymentData = await prisma.payment.findUniqueOrThrow({
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
  const result = await sslInitializations.sslConfigiration(
    paymentInitializedData
  );
  return {
    paymentUrl: result,
  };
};

//Validation Payment Request
const validatePayment = async (payload: any) => {
  let response;
  if (config.node_env) {
    response = payload;
  } else {
    if (!payload || !payload.status || !(payload.status === "VALID")) {
      return {
        message: "Invalid Payment",
      };
    }

    response = await sslInitializations.validatePayements(payload);
    if (!response || !response.status || response.status !== "VALID") {
      return {
        message: "Invalid Payment",
      };
    }
  }
  //
  const result = await prisma.$transaction(async (tx) => {
    const paymentUpdated = await tx.payment.update({
      where: {
        transactionId: response.tran_id,
      },
      data: {
        status: PaymentStatus.PAID,
        paymentGatewayData: response,
      },
    });
    //update Appointment Table
    await tx.appointment.update({
      where: {
        id: paymentUpdated.appointtmentId,
      },
      data: {
        paymentStatus: PaymentStatus.PAID,
      },
    });
    return {
      message: "Congratulations! Your payment success",
    };
  });
  return result;
};

export const paymentServices = {
  initialPayment,
  validatePayment,
};
