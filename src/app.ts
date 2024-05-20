import express, { Application } from "express";
import cors from "cors";
import router from "./app/routes/routes";
import globalErrorHandler from "./app/middleware/Error/globalErrorHandler";
import notFoundApi from "./app/middleware/notFoundApi";
import cookieParser from "cookie-parser";
import { appoinmentServices } from "./app/modules/appointment/appointment.services";
import cron from "node-cron";
const app: Application = express();

//middleware Declerence
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//Routes Declearation
app.use("/api/v1", router);

//Unpaid Appointments Deleted
cron.schedule("* * * * *", () => {
  try {
    appoinmentServices.unPaidAppointmentDeleted();
  } catch (error) {
    console.log("Not Deleted");
  }
});

//global Error Handler
app.use(globalErrorHandler);

//Not Found Route
app.use(notFoundApi);

export default app;
