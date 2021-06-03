import express from "express";
import * as IDEController from "../controllers/IDEController";
const app = express();
import { auth } from "../middlewares/auth";

app.post("/run", auth, IDEController.runCode);

app.post("/test", auth, IDEController.runCode);

module.exports = app;
