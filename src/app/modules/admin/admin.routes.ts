import express from "express";
const routes = express.Router();
routes.get("/", (req, res) => {
  res.send("Welcome");
});

export const adminRouter = routes;
