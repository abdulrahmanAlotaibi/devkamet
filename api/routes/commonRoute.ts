import { contactUs, search } from "../controllers/commonController";
import express from "express";
import { auth } from "../middlewares/auth";
const app = express();

app.post("/contact-us", contactUs);

app.get("/search", auth, search);

module.exports = app;
