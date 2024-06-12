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
exports.prescriptionServices = void 0;
const globalConstant_1 = require("../../constants/globalConstant");
const client_1 = require("@prisma/client");
const apiError_1 = __importDefault(require("../../errors/apiError"));
const http_status_1 = __importDefault(require("http-status"));
const pageCalculation_1 = __importDefault(require("../../helper/pageCalculation"));
const createPrescriptionIntoDB = (user, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const appointMentInfo = yield globalConstant_1.prisma.appointment.findUniqueOrThrow({
        where: {
            id: payload.appointmentId,
            paymentStatus: client_1.PaymentStatus.PAID,
        },
        include: {
            doctor: true,
        },
    });
    //Checking Doctor Patient
    if (!(user.email === appointMentInfo.doctor.email)) {
        throw new apiError_1.default(http_status_1.default.BAD_REQUEST, "This Patient is not your");
    }
    const result = yield globalConstant_1.prisma.prescription.create({
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
});
//Get my Prescriptons
const getmyPrescription = (user, options) => __awaiter(void 0, void 0, void 0, function* () {
    const { skip, page, limit, sort, sortOrder } = (0, pageCalculation_1.default)(options);
    const userInfo = yield globalConstant_1.prisma.patient.findUniqueOrThrow({
        where: {
            email: user.email,
        },
    });
    const result = yield globalConstant_1.prisma.prescription.findMany({
        where: {
            patientId: userInfo.id,
        },
        include: {
            doctor: true,
            patient: true,
        },
        skip,
        take: limit,
        orderBy: {
            [sort]: sortOrder,
        },
    });
    const total = yield globalConstant_1.prisma.prescription.count({
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
});
//Get all Prescriptions
const getAllPresCriptions = (user, options) => __awaiter(void 0, void 0, void 0, function* () {
    const { skip, page, limit, sort, sortOrder } = (0, pageCalculation_1.default)(options);
    //Checking Admin Info
    yield globalConstant_1.prisma.admin.findUniqueOrThrow({
        where: {
            email: user.email,
        },
    });
    const result = yield globalConstant_1.prisma.prescription.findMany({
        skip,
        take: limit,
        orderBy: {
            [sort]: sortOrder,
        },
    });
    const total = yield globalConstant_1.prisma.prescription.count();
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
});
//Get all Prescriptions
const getSinglePresCriptions = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield globalConstant_1.prisma.prescription.findUniqueOrThrow({
        where: {
            id,
        },
        include: {
            doctor: true,
            patient: true,
        },
    });
    return result;
});
exports.prescriptionServices = {
    createPrescriptionIntoDB,
    getmyPrescription,
    getAllPresCriptions,
    getSinglePresCriptions,
};
