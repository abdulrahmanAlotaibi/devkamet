import express from "express";
import * as lessonController from "../controllers/lessonController";
import { auth } from "../middlewares/auth";
import checkPermission, {
  permissionFunctions,
} from "../middlewares/permissions";

const app = express();

app.get("/:slug", lessonController.getLesson);

app.put(
  "/:slug",
  auth,
  checkPermission("lesson", permissionFunctions.updateAny),
  lessonController.updateLesson
);

module.exports = app;
