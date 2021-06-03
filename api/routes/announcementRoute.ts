import * as announcementController from "../controllers/announcementController";
import express from "express";
const app = express();
import { auth } from "../middlewares/auth";
import checkPermission, {
  permissionFunctions,
} from "../middlewares/permissions";

app.post(
  "/",
  auth,
  checkPermission("announcement", permissionFunctions.createAny),
  announcementController.createAnnouncement
);

app.get(
  "/",
  auth,
  checkPermission("announcement", permissionFunctions.readAny),
  announcementController.getAllAnnouncements
);

app.get("/latest", announcementController.getAnnouncement);

module.exports = app;
