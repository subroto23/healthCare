"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./app/routes/routes"));
const globalErrorHandler_1 = __importDefault(require("./app/middleware/Error/globalErrorHandler"));
const notFoundApi_1 = __importDefault(require("./app/middleware/notFoundApi"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const appointment_services_1 = require("./app/modules/appointment/appointment.services");
const node_cron_1 = __importDefault(require("node-cron"));
const app = (0, express_1.default)();
//middleware Declerence
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const corsOptions = {
    origin: ["https://subroto-health-care.vercel.app", "http://localhost:3000"],
    credentials: true,
};
app.use((0, cors_1.default)(corsOptions));
//Routes Declearation
app.use("/api/v1", routes_1.default);
//Unpaid Appointments Deleted
node_cron_1.default.schedule("* * * * *", () => {
    try {
        appointment_services_1.appoinmentServices.unPaidAppointmentDeleted();
    }
    catch (error) {
        console.log("Not Deleted");
    }
});
//global Error Handler
app.use(globalErrorHandler_1.default);
//Not Found Route
app.use(notFoundApi_1.default);
exports.default = app;
