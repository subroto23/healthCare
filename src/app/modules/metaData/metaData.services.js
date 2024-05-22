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
Object.defineProperty(exports, "__esModule", { value: true });
exports.metaDataService = void 0;
const client_1 = require("@prisma/client");
const globalConstant_1 = require("../../constants/globalConstant");
const getFetchMetaDataFromDB = (user) => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    switch (user.role) {
        case client_1.UserRole.ADMIN:
            result = getAdminMetaData(user);
            break;
        case client_1.UserRole.DOCTOR:
            result = getDoctorMetaData(user);
            break;
        case client_1.UserRole.PATIENT:
            result = getPatientMetaData(user);
            break;
        case client_1.UserRole.SUPER_ADMIN:
            result = getSuperAdminMetaData(user);
            break;
        default:
            break;
    }
    return result;
});
//Admin
const getAdminMetaData = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const doctorCount = yield globalConstant_1.prisma.doctor.count();
    const patientCount = yield globalConstant_1.prisma.doctor.count();
    const appointmentCount = yield globalConstant_1.prisma.appointment.count();
    const paymentCount = yield globalConstant_1.prisma.payment.count({
        where: {
            status: client_1.PaymentStatus.PAID,
        },
    });
    const totalRevenue = yield globalConstant_1.prisma.payment.aggregate({
        _sum: {
            amount: true,
        },
        where: {
            status: client_1.PaymentStatus.PAID,
        },
    });
    const barChartDatas = yield getBarChartData();
    const piChartDatas = yield getPieChartData();
    return {
        doctorCount,
        patientCount,
        appointmentCount,
        paymentCount,
        totalRevenue,
        barChartDatas,
        piChartDatas,
    };
});
//Doctor
const getDoctorMetaData = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const userInfo = yield globalConstant_1.prisma.doctor.findUniqueOrThrow({
        where: {
            email: user.email,
        },
    });
    const appointmentCount = yield globalConstant_1.prisma.appointment.count({
        where: {
            doctorId: userInfo.id,
        },
    });
    const patientCount = yield globalConstant_1.prisma.appointment.groupBy({
        by: ["patientId"],
        _count: {
            id: true,
        },
    });
    const reviewsCount = yield globalConstant_1.prisma.review.count({
        where: {
            doctorId: userInfo.id,
        },
    });
    const totalRevenue = yield globalConstant_1.prisma.payment.aggregate({
        _sum: {
            amount: true,
        },
        where: {
            appointment: {
                doctorId: userInfo.id,
            },
            status: client_1.PaymentStatus.PAID,
        },
    });
    const appoinmentStatus = yield globalConstant_1.prisma.appointment.groupBy({
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
});
//Patient
const getPatientMetaData = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const userInfo = yield globalConstant_1.prisma.patient.findUniqueOrThrow({
        where: {
            email: user.email,
        },
    });
    const appointmentCount = yield globalConstant_1.prisma.appointment.count({
        where: {
            patientId: userInfo.id,
        },
    });
    const prescriptionCount = yield globalConstant_1.prisma.appointment.count({
        where: {
            patientId: userInfo.id,
        },
    });
    const reviewsCount = yield globalConstant_1.prisma.review.count({
        where: {
            patientId: userInfo.id,
        },
    });
    const appoinmentStatus = yield globalConstant_1.prisma.appointment.groupBy({
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
});
//Super admin
const getSuperAdminMetaData = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const doctorCount = yield globalConstant_1.prisma.doctor.count();
    const patientCount = yield globalConstant_1.prisma.doctor.count();
    const adminCount = yield globalConstant_1.prisma.admin.count();
    const appointmentCount = yield globalConstant_1.prisma.appointment.count();
    const paymentCount = yield globalConstant_1.prisma.payment.count({
        where: {
            status: client_1.PaymentStatus.PAID,
        },
    });
    const totalRevenue = yield globalConstant_1.prisma.payment.aggregate({
        _sum: {
            amount: true,
        },
        where: {
            status: client_1.PaymentStatus.PAID,
        },
    });
    const barChartDatas = yield getBarChartData();
    const piChartDatas = yield getPieChartData();
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
});
const getBarChartData = () => __awaiter(void 0, void 0, void 0, function* () {
    const barChartDatas = yield globalConstant_1.prisma.$queryRaw `
  SELECT DATE_TRUNC('month',"createdAt") AS month,
  CAST(COUNT(*) AS INTEGER) AS count
  FROM "appoinments"
  GROUP BY month
  ORDER BY month ASC
`;
    return barChartDatas;
});
const getPieChartData = () => __awaiter(void 0, void 0, void 0, function* () {
    const appoinmentStatus = yield globalConstant_1.prisma.appointment.groupBy({
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
});
exports.metaDataService = { getFetchMetaDataFromDB };
