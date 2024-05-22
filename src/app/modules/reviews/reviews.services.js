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
exports.reviewServices = void 0;
const client_1 = require("@prisma/client");
const globalConstant_1 = require("../../constants/globalConstant");
const http_status_1 = __importDefault(require("http-status"));
const apiError_1 = __importDefault(require("../../errors/apiError"));
const pageCalculation_1 = __importDefault(require("../../helper/pageCalculation"));
const createReviewsIntoDB = (user, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const appointMentInfo = yield globalConstant_1.prisma.appointment.findUniqueOrThrow({
        where: {
            id: payload.appointmentId,
            status: client_1.AppointmentStatus.COMPLETED,
            paymentStatus: client_1.PaymentStatus.PAID,
        },
        include: {
            doctor: true,
            patient: true,
        },
    });
    //Checking Doctor Patient
    if (!(user.email === appointMentInfo.patient.email)) {
        throw new apiError_1.default(http_status_1.default.BAD_REQUEST, "This Doctor is not yours");
    }
    //Rating Create and Doctor Updated Average field
    const result = yield globalConstant_1.prisma.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        const createdReviewInfo = yield tx.review.create({
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
        const averageRatingData = yield tx.review.aggregate({
            _avg: {
                rating: true,
            },
        });
        yield tx.doctor.update({
            where: {
                id: appointMentInfo.doctorId,
            },
            data: {
                averageRating: averageRatingData._avg.rating,
            },
        });
        return createdReviewInfo;
    }));
    return result;
});
const getmyReviews = (user, options) => __awaiter(void 0, void 0, void 0, function* () {
    const { skip, page, limit, sort, sortOrder } = (0, pageCalculation_1.default)(options);
    const userInfo = yield globalConstant_1.prisma.patient.findUniqueOrThrow({
        where: {
            email: user.email,
        },
    });
    const result = yield globalConstant_1.prisma.review.findMany({
        where: {
            patientId: userInfo.id,
        },
        skip,
        take: limit,
        orderBy: {
            [sort]: sortOrder,
        },
    });
    const total = yield globalConstant_1.prisma.review.count({
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
const getAllReviews = (user, options) => __awaiter(void 0, void 0, void 0, function* () {
    const { skip, page, limit, sort, sortOrder } = (0, pageCalculation_1.default)(options);
    //Checking Admin Info
    yield globalConstant_1.prisma.admin.findUniqueOrThrow({
        where: {
            email: user.email,
        },
    });
    const result = yield globalConstant_1.prisma.review.findMany({
        skip,
        take: limit,
        orderBy: {
            [sort]: sortOrder,
        },
    });
    const total = yield globalConstant_1.prisma.review.count();
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
});
exports.reviewServices = {
    createReviewsIntoDB,
    getmyReviews,
    getAllReviews,
};
