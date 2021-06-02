import express from "express";
import validationChecker from "../middlewares/validator";
import * as validationChecklist from "../middlewares/validationChecklist";
import * as courseController from "../controllers/courseController";
import { auth } from "../middlewares/auth";
import checkPermission, {
  permissionFunctions,
} from "../middlewares/permissions";

const app = express();

app.post(
  "/",
  validationChecklist.manageCourse,
  validationChecker,
  auth,
  checkPermission("course", permissionFunctions.createAny),
  courseController.createCourse
);

app.get("/:slug", auth, courseController.getCourse);

app.get("/", auth, courseController.getAllCourses);

app.patch(
  "/",
  auth,
  checkPermission("course", permissionFunctions.updateAny),
  courseController.updateCourse
);

app.post(
  "/:slug/lessons/",
  auth,
  checkPermission("lesson", permissionFunctions.createAny),
  courseController.createLesson
);

app.get("/:slug/lessons/", courseController.getAllLessons);

app.delete(
  "/:slug/lessons/:lessonId",
  auth,
  checkPermission("lesson", permissionFunctions.deleteAny),
  courseController.removeLesson
);

module.exports = app;
