import * as lessonService from "../services/lessonService";
import { HttpStatusCode } from "../shared/http";

export const getLesson = async (req: any, res: any, next: any) => {
  const { slug } = req.params;

  try {
    const response = await lessonService.getLesson(slug);

    res.status(HttpStatusCode.OK).json({
      status: "success",
      result: response,
    });
  } catch (error) {
    next(error);
  }
};

export const updateLesson = async (req: any, res: any, next: any) => {
  const { slug } = req.params;
  const { updatedLesson } = req.body;
  try {
    const response = await lessonService.updateLesson(slug, updatedLesson);

    res.status(HttpStatusCode.OK).json({
      status: "success",
      result: response,
      message: "Lesson has been updated",
    });
  } catch (error) {
    next(error);
  }
};
