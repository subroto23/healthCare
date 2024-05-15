import express, { Application } from "express";
import cors from "cors";
import router from "./app/routes/routes";
import globalErrorHandler from "./app/middleware/Error/globalErrorHandler";
import notFoundApi from "./app/middleware/notFoundApi";
import cookieParser from "cookie-parser";
const app: Application = express();

//middleware Declerence
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//Routes Declearation
app.use("/api/v1", router);

//global Error Handler
app.use(globalErrorHandler);

//Not Found Route
app.use(notFoundApi);

export default app;
