import express, { Application } from "express";
import cors from "cors";
import router from "./app/routes/routes";
const app: Application = express();

//middleware Declerence
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes Declearation
app.use("/api/v1", router);

export default app;
