import { JwtPayload } from "jsonwebtoken";
import { prisma } from "../../constants/globalConstant";
import { IAppointment } from "./appointment.interface";
import { v4 as uuidv4 } from "uuid";
import ApiError from "../../errors/apiError";
import httpStatus from "http-status";
import calculatePagination from "../../helper/pageCalculation";
import { Prisma, UserRole } from "@prisma/client";

const createAppoinmentInotDB = async (
  user: JwtPayload,
  payload: IAppointment
) => {
  const userInfo = await prisma.patient.findUniqueOrThrow({
    where: {
      email: user.email,
      isDeleted: false,
    },
  });

  //Doctor Id Exists Checking
  const doctorInfo = await prisma.doctor.findUniqueOrThrow({
    where: {
      id: payload.doctorId,
      isDeleted: false,
    },
  });

  //Doctor and Schedule Availabele checking

  const isDoctorAndScheduleAvailabele =
    await prisma.doctorSchedules.findFirstOrThrow({
      where: {
        doctorId: payload.doctorId,
        scheduleId: payload.scheduleId,
        isBooked: false,
      },
    });

  if (!isDoctorAndScheduleAvailabele) {
    throw new ApiError(httpStatus.NOT_FOUND, "This schedule is not availabe");
  }

  const videoCallingId = uuidv4();
  const appointmentSData = {
    patientId: userInfo.id,
    scheduleId: payload.scheduleId,
    doctorId: payload.doctorId,
    videoCallingId,
  };

  //Insert Appoinments and update doctor appointments
  const result = await prisma.$transaction(async (tx) => {
    const appoinmentData = await tx.appointment.create({
      data: appointmentSData,
    });

    await tx.doctorSchedules.update({
      where: {
        doctorId_scheduleId: {
          doctorId: payload.doctorId,
          scheduleId: payload.scheduleId,
        },
      },
      data: {
        isBooked: true,
        appointmentId: appoinmentData.id,
      },
    });
    const transactionId = `health-care-${new Date()}-${userInfo.id}`;
    await tx.payment.create({
      data: {
        appointtmentId: appoinmentData.id,
        amount: doctorInfo.appointmentFee,
        transactionId,
      },
    });

    return appoinmentData;
  });

  return result;
};

//get My appointments
const getMyAppoinment = async (user: JwtPayload, filter: any, options: any) => {
  const { paymentStatus, status, ...filterData } = filter;
  const { skip, page, limit, sort, sortOrder } = calculatePagination(options);
  const andCondition: Prisma.AppointmentWhereInput[] = [];

  //Filter Conditons Query
  if (Object.keys(filterData).length > 0) {
    andCondition.push({
      AND: Object.keys(filterData).map((keys) => ({
        [keys]: {
          equals: (filterData as any)[keys],
        },
      })),
    });
  }

  // Conditionaly Data fatched
  if (user.role === UserRole.DOCTOR) {
    andCondition.push({
      doctor: {
        email: user.email,
      },
    });
  } else if (user.role === UserRole.PATIENT) {
    andCondition.push({
      patient: {
        email: user.email,
      },
    });
  }

  const whereCondition: Prisma.AppointmentWhereInput =
    andCondition.length > 0 ? { AND: andCondition } : {};

  const result = await prisma.appointment.findMany({
    where: whereCondition,
    skip,
    take: limit,
    orderBy: {
      [sort]: sortOrder,
    },
    include:
      user.role === UserRole.DOCTOR
        ? {
            schedule: true,
            patient: {
              include: {
                medicalReport: true,
                patientHealthData: true,
              },
            },
          }
        : {
            schedule: true,
            doctor: true,
          },
  });
  const total = await prisma.appointment.count({
    where: whereCondition,
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

//get All appointments
const getAllAppoinment = async (
  user: JwtPayload,
  filter: any,
  options: any
) => {
  const { paymentStatus, status, ...filterData } = filter;
  const { skip, page, limit, sort, sortOrder } = calculatePagination(options);
  const andCondition: Prisma.AppointmentWhereInput[] = [];

  //Filter Conditons Query
  if (Object.keys(filterData).length > 0) {
    andCondition.push({
      AND: Object.keys(filterData).map((keys) => ({
        [keys]: {
          equals: (filterData as any)[keys],
        },
      })),
    });
  }

  // Conditionaly Data fatched
  if (user.role === UserRole.DOCTOR) {
    andCondition.push({
      doctor: {
        email: user.email,
      },
    });
  } else if (user.role === UserRole.PATIENT) {
    andCondition.push({
      patient: {
        email: user.email,
      },
    });
  }

  const whereCondition: Prisma.AppointmentWhereInput =
    andCondition.length > 0 ? { AND: andCondition } : {};

  const result = await prisma.appointment.findMany({
    where: whereCondition,
    skip,
    take: limit,
    orderBy: {
      [sort]: sortOrder,
    },
    include: {
      schedule: true,
      doctor: true,
      patient: {
        include: {
          medicalReport: true,
          patientHealthData: true,
        },
      },
    },
  });
  const total = await prisma.appointment.count({
    where: whereCondition,
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

//Single Appontments Get
const getSingleAppointmentFromDB = async () => {};

//Update Appontments
const updateAppointmentFromDB = async () => {};

//Delete Appointment
const deleteAppointmentFromDB = async () => {};

export const appoinmentServices = {
  createAppoinmentInotDB,
  getMyAppoinment,
  getSingleAppointmentFromDB,
  updateAppointmentFromDB,
  deleteAppointmentFromDB,
  getAllAppoinment,
};
