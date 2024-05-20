import { AppointmentStatus, PaymentStatus, Review } from "@prisma/client";
import { JwtPayload } from "jsonwebtoken";
import { prisma } from "../../constants/globalConstant";
import httpStatus from "http-status";
import ApiError from "../../errors/apiError";
import { IOptions } from "../../interface/globalInterfaces";
import calculatePagination from "../../helper/pageCalculation";

const createReviewsIntoDB = async (
  user: JwtPayload,
  payload: Partial<Review>
) => {
  const appointMentInfo = await prisma.appointment.findUniqueOrThrow({
    where: {
      id: payload.appointmentId,
      status: AppointmentStatus.COMPLETED,
      paymentStatus: PaymentStatus.PAID,
    },
    include: {
      doctor: true,
      patient: true,
    },
  });
  //Checking Doctor Patient
  if (!(user.email === appointMentInfo.patient.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, "This Doctor is not yours");
  }
  //Rating Create and Doctor Updated Average field
  const result = await prisma.$transaction(async (tx) => {
    const createdReviewInfo = await tx.review.create({
      data: {
        appointmentId: appointMentInfo.id,
        doctorId: appointMentInfo.doctorId,
        patientId: appointMentInfo.patientId,
        rating: payload.rating,
        comment: payload.comment,
      },
      include: {
        patient: true,
      },
    });
    const averageRatingData = await tx.review.aggregate({
      _avg: {
        rating: true,
      },
    });
    await tx.doctor.update({
      where: {
        id: appointMentInfo.doctorId,
      },
      data: {
        averageRating: averageRatingData._avg.rating as number,
      },
    });
    return createdReviewInfo;
  });

  return result;
};

const getmyReviews = async (user: JwtPayload, options: IOptions) => {
  const { skip, page, limit, sort, sortOrder } = calculatePagination(options);

  const userInfo = await prisma.patient.findUniqueOrThrow({
    where: {
      email: user.email,
    },
  });

  const result = await prisma.review.findMany({
    where: {
      patientId: userInfo.id,
    },
    skip,
    take: limit,
    orderBy: {
      [sort]: sortOrder,
    },
  });

  const total = await prisma.review.count({
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

const getAllReviews = async (user: JwtPayload, options: IOptions) => {
  const { skip, page, limit, sort, sortOrder } = calculatePagination(options);

  //Checking Admin Info
  await prisma.admin.findUniqueOrThrow({
    where: {
      email: user.email,
    },
  });

  const result = await prisma.review.findMany({
    skip,
    take: limit,
    orderBy: {
      [sort]: sortOrder,
    },
  });

  const total = await prisma.review.count();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

export const reviewServices = {
  createReviewsIntoDB,
  getmyReviews,
  getAllReviews,
};
