import Lesson from "../models/Lesson";
import { BaseError } from "../middlewares/errorHandler";
import { HttpStatusCode } from "../shared/http";
import Test from "../models/Test";
import Exercise from "../models/Exercise";
import Article from "../models/Article";
import * as AWS from "../config/aws";

export const getLesson = async (slug: string) => {
  const lesson: any = await Lesson.findOne({ slug }).lean().exec();

  if (!lesson) {
    throw new BaseError(
      "API Error",
      HttpStatusCode.NOT_FOUND,
      "Resource not found",
      true
    );
  }

  const response: any = await AWS.getObject(lesson.meta.Key);

  // Buffer --> String --> Object
  const content = JSON.parse(response.Body.toString("utf-8")).content;

  return { ...lesson, content };
};

export const updateLesson = async (slug: string, updatedLesson: any) => {
  let lesson;

  lesson = await Lesson.findOne({ slug }).exec();

  const { title, content } = updatedLesson;

  let buf;

  if (content)
    buf = Buffer.from(JSON.stringify({ content: updatedLesson.content }));

  let newSlug;

  if (title) {
    newSlug = title.trim().replace(/\s+/g, "-");
    updatedLesson = { ...updatedLesson, slug: newSlug };
  }

  if (updatedLesson.origin === "Test") {
    const testS3 = await AWS.updateObject(
      buf,
      updatedLesson.title,
      "application/json"
    );

    updatedLesson.content = testS3;

    lesson = await Test.updateOne(
      { slug },
      { $set: updatedLesson },
      {
        new: true,
      }
    );
  } else if (updatedLesson.origin === "Exercise") {
    const exerciseS3 = await AWS.updateObject(
      buf,
      updatedLesson.title,
      "application/json"
    );

    updatedLesson.content = exerciseS3;

    lesson = await Exercise.updateOne(
      { slug },
      { $set: updatedLesson },
      {
        new: true,
      }
    );
  } else {
    const articelS3 = await AWS.updateObject(
      buf,
      updatedLesson.title,
      "application/json"
    );

    updatedLesson.content = articelS3;

    lesson = await Article.updateOne(
      { slug },
      { $set: updatedLesson },
      {
        new: true,
      }
    );
  }

  if (!lesson) {
    throw new BaseError(
      "API Error",
      HttpStatusCode.NOT_FOUND,
      "Resource not found",
      true
    );
  }
  return lesson;
};
