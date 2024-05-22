"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_routes_1 = require("../modules/admin/admin.routes");
const auth_route_1 = require("../modules/auth/auth.route");
const doctor_route_1 = require("../modules/doctors/doctor.route");
const patient_route_1 = require("../modules/patients/patient.route");
const user_routes_1 = require("../modules/users/user.routes");
const specialities_route_1 = require("../modules/specialities/specialities.route");
const schedules_router_1 = require("../modules/schedules/schedules.router");
const doctorSchedule_route_1 = require("../modules/doctorSchedule/doctorSchedule.route");
const appointment_routes_1 = require("../modules/appointment/appointment.routes");
const payments_route_1 = require("../modules/payments/payments.route");
const prescription_routes_1 = require("../modules/prescription/prescription.routes");
const reviews_routes_1 = require("../modules/reviews/reviews.routes");
const metaData_router_1 = require("../modules/metaData/metaData.router");
const router = express_1.default.Router();
const routesAndPath = [
    {
        path: "/users",
        route: user_routes_1.userRoutes,
    },
    {
        path: "/auth",
        route: auth_route_1.authRoutes,
    },
    {
        path: "/admins",
        route: admin_routes_1.adminRouter,
    },
    {
        path: "/doctors",
        route: doctor_route_1.doctorRouter,
    },
    {
        path: "/patients",
        route: patient_route_1.patientRouter,
    },
    {
        path: "/specialities",
        route: specialities_route_1.specialityRouter,
    },
    {
        path: "/schedules",
        route: schedules_router_1.scheduleRoutes,
    },
    {
        path: "/doctor-schedule",
        route: doctorSchedule_route_1.doctorScheduleRoutes,
    },
    {
        path: "/appointments",
        route: appointment_routes_1.appointmentRoutes,
    },
    {
        path: "/payments",
        route: payments_route_1.paymentRoutes,
    },
    {
        path: "/prescriptions",
        route: prescription_routes_1.prescriptionRoutes,
    },
    {
        path: "/reviews",
        route: reviews_routes_1.reviewRoutes,
    },
    {
        path: "/meta-data",
        route: metaData_router_1.metaDataRoutes,
    },
];
//Looping All Routes
routesAndPath.forEach((route) => router.use(route.path, route.route));
exports.default = router;
