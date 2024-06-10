import { JwtPayload } from "jsonwebtoken";
import { IPrescriptonPayload } from "./prescription.interface";
import { prisma } from "../../constants/globalConstant";
import { AppointmentStatus, PaymentStatus } from "@prisma/client";
import ApiError from "../../errors/apiError";
import httpStatus from "http-status";
import calculatePagination from "../../helper/pageCalculation";
import { IOptions } from "../../interface/globalInterfaces";

const createPrescriptionIntoDB = async (
  user: JwtPayload,
  payload: IPrescriptonPayload
) => {
  const appointMentInfo = await prisma.appointment.findUniqueOrThrow({
    where: {
      id: payload.appointmentId,
      paymentStatus: PaymentStatus.PAID,
    },
    include: {
      doctor: true,
    },
  });
  //Checking Doctor Patient
  if (!(user.email === appointMentInfo.doctor.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, "This Patient is not your");
  }

  const result = await prisma.prescription.create({
    data: {
      appointmentId: appointMentInfo.id,
      doctorId: appointMentInfo.doctorId,
      patientId: appointMentInfo.patientId,
      instructions: payload.instructions,
      followUpDate: payload.followUpDate || null || undefined,
    },
    include: {
      patient: true,
    },
  });
  return result;
};

const getmyPrescription = async (user: JwtPayload, options: IOptions) => {
  const { skip, page, limit, sort, sortOrder } = calculatePagination(options);

  const userInfo = await prisma.patient.findUniqueOrThrow({
    where: {
      email: user.email,
    },
  });

  const result = await prisma.prescription.findMany({
    where: {
      patientId: userInfo.id,
    },
    skip,
    take: limit,
    orderBy: {
      [sort]: sortOrder,
    },
  });

  const total = await prisma.prescription.count({
    where: {
      patientId: userInfo.id,
    },
  });

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

//Get all Prescriptions
const getAllPresCriptions = async (user: JwtPayload, options: IOptions) => {
  const { skip, page, limit, sort, sortOrder } = calculatePagination(options);

  //Checking Admin Info
  await prisma.admin.findUniqueOrThrow({
    where: {
      email: user.email,
    },
  });

  const result = await prisma.prescription.findMany({
    skip,
    take: limit,
    orderBy: {
      [sort]: sortOrder,
    },
  });

  const total = await prisma.prescription.count();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

//Get all Prescriptions
const getSinglePresCriptions = async (id: string) => {
  const result = await prisma.prescription.findUniqueOrThrow({
    where: {
      id,
    },
    include: {
      doctor: true,
    },
  });

  return result;
};

export const prescriptionServices = {
  createPrescriptionIntoDB,
  getmyPrescription,
  getAllPresCriptions,
  getSinglePresCriptions,
};
