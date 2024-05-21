import { PaymentStatus, UserRole } from "@prisma/client";
import { JwtPayload } from "jsonwebtoken";
import { prisma } from "../../constants/globalConstant";

const getFetchMetaDataFromDB = async (user: JwtPayload) => {
  let result;
  switch (user.role) {
    case UserRole.ADMIN:
      result = getAdminMetaData(user);
      break;
    case UserRole.DOCTOR:
      result = getDoctorMetaData(user);
      break;
    case UserRole.PATIENT:
      result = getPatientMetaData(user);
      break;
    case UserRole.SUPER_ADMIN:
      result = getSuperAdminMetaData(user);
      break;

    default:
      break;
  }
  return result;
};

//Admin
const getAdminMetaData = async (user: JwtPayload) => {
  const doctorCount = await prisma.doctor.count();
  const patientCount = await prisma.doctor.count();
  const appointmentCount = await prisma.appointment.count();
  const paymentCount = await prisma.payment.count({
    where: {
      status: PaymentStatus.PAID,
    },
  });
  const totalRevenue = await prisma.payment.aggregate({
    _sum: {
      amount: true,
    },
    where: {
      status: PaymentStatus.PAID,
    },
  });
  const barChartDatas = await getBarChartData();
  const piChartDatas = await getPieChartData();
  return {
    doctorCount,
    patientCount,
    appointmentCount,
    paymentCount,
    totalRevenue,
    barChartDatas,
    piChartDatas,
  };
};

//Doctor
const getDoctorMetaData = async (user: JwtPayload) => {
  const userInfo = await prisma.doctor.findUniqueOrThrow({
    where: {
      email: user.email,
    },
  });

  const appointmentCount = await prisma.appointment.count({
    where: {
      doctorId: userInfo.id,
    },
  });
  const patientCount = await prisma.appointment.groupBy({
    by: ["patientId"],
    _count: {
      id: true,
    },
  });
  const reviewsCount = await prisma.review.count({
    where: {
      doctorId: userInfo.id,
    },
  });
  const totalRevenue = await prisma.payment.aggregate({
    _sum: {
      amount: true,
    },
    where: {
      appointment: {
        doctorId: userInfo.id,
      },
      status: PaymentStatus.PAID,
    },
  });

  const appoinmentStatus = await prisma.appointment.groupBy({
    by: ["status"],
    _count: {
      id: true,
    },
    where: {
      doctorId: userInfo.id,
    },
  });

  const appoinmentStatusDestibutaion = appoinmentStatus.map((el) => ({
    status: el.status,
    count: el._count.id,
  }));

  return {
    appointmentCount,
    patientCount: patientCount.length,
    reviewsCount,
    totalRevenue,
    appoinmentStatusDestibutaion,
  };
};
//Patient
const getPatientMetaData = async (user: JwtPayload) => {
  const userInfo = await prisma.patient.findUniqueOrThrow({
    where: {
      email: user.email,
    },
  });
  const appointmentCount = await prisma.appointment.count({
    where: {
      patientId: userInfo.id,
    },
  });
  const prescriptionCount = await prisma.appointment.count({
    where: {
      patientId: userInfo.id,
    },
  });
  const reviewsCount = await prisma.review.count({
    where: {
      patientId: userInfo.id,
    },
  });

  const appoinmentStatus = await prisma.appointment.groupBy({
    by: ["status"],
    _count: {
      id: true,
    },
    where: {
      patientId: userInfo.id,
    },
  });

  const appoinmentStatusDestibutaion = appoinmentStatus.map((el) => ({
    status: el.status,
    count: el._count.id,
  }));

  return {
    appointmentCount,
    prescriptionCount,
    reviewsCount,
    appoinmentStatusDestibutaion,
  };
};
//Super admin
const getSuperAdminMetaData = async (user: JwtPayload) => {
  const doctorCount = await prisma.doctor.count();
  const patientCount = await prisma.doctor.count();
  const adminCount = await prisma.admin.count();
  const appointmentCount = await prisma.appointment.count();
  const paymentCount = await prisma.payment.count({
    where: {
      status: PaymentStatus.PAID,
    },
  });
  const totalRevenue = await prisma.payment.aggregate({
    _sum: {
      amount: true,
    },
    where: {
      status: PaymentStatus.PAID,
    },
  });

  const barChartDatas = await getBarChartData();
  const piChartDatas = await getPieChartData();

  return {
    doctorCount,
    patientCount,
    adminCount,
    appointmentCount,
    paymentCount,
    totalRevenue,
    barChartDatas,
    piChartDatas,
  };
};

const getBarChartData = async () => {
  const barChartDatas = await prisma.$queryRaw`
  SELECT DATE_TRUNC('month',"createdAt") AS month,
  CAST(COUNT(*) AS INTEGER) AS count
  FROM "appoinments"
  GROUP BY month
  ORDER BY month ASC
`;
  return barChartDatas;
};

const getPieChartData = async () => {
  const appoinmentStatus = await prisma.appointment.groupBy({
    by: ["status"],
    _count: {
      id: true,
    },
  });
  const appoinmentStatusDestibutaion = appoinmentStatus.map((el) => ({
    status: el.status,
    count: el._count.id,
  }));
  return appoinmentStatusDestibutaion;
};

export const metaDataService = { getFetchMetaDataFromDB };
