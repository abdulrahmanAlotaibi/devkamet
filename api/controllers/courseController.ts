import * as courseService from "../services/courseService";
import { BaseError } from "../middlewares/errorHandler";
import { HttpStatusCode } from "../shared/http";

export const createCourse = async (req: any, res: any, next: any) => {
  try {
    const { title, description } = req.body;

    const response = await courseService.createCourse(title, description);

    res.status(HttpStatusCode.OK).json({
      status: "success",
      result: response,
    });
  } catch (error) {
    next(error);
  }
};

export const getCourse = async (req: any, res: any, next: any) => {
  try {
    const { slug } = req.params;

    const response = await courseService.getCourse(slug);

    res.status(HttpStatusCode.OK).json({
      status: "success",
      result: response,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllCourses = async (req: any, res: any, next: any) => {
  try {
    const response: any = await courseService.getAllCourses();
    console.log("d")
    res.status(HttpStatusCode.OK).json({
      status: "success",
      result: response,
    });
  } catch (error) {
    next(error);
  }
};

export const updateCourse = async (req: any, res: any, next: any) => {
  try {
    const { slug, properties } = req.body;

    const response = await courseService.updateCourse(slug, properties);

    res.status(HttpStatusCode.OK).json({
      status: "success",
      result: response,
    });
  } catch (error) {
    next(error);
  }
};

export const createLesson = async (req: any, res: any, next: any) => {
  try {
    const { slug } = req.params;
    const { title, content, type } = req.body;

    const response = await courseService.createLesson(
      slug,
      title,
      content,
      type
    );

    res.status(HttpStatusCode.OK).json({
      status: "success",
      result: response,
      message: "Lesson has been created",
    });
  } catch (error) {
    next(error);
  }
};

export const getAllLessons = async (req: any, res: any, next: any) => {
  try {
    const { slug } = req.params;

    const response = await courseService.getAllLessons(slug);

    res.status(HttpStatusCode.OK).json({
      status: "success",
      result: response,
    });
  } catch (error) {
    next(error);
  }
};

export const removeLesson = async (req: any, res: any, next: any) => {
  const { slug, lessonId } = req.params;

  try {
    const response = await courseService.removeLesson(slug, lessonId);

    res.status(HttpStatusCode.OK).json({
      status: "success",
      result: response,
      message: "Lesson has been deleted",
    });
  } catch (error) {
    next(error);
  }
};
