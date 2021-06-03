import { BaseError, catcher } from "../middlewares/errorHandler";
import { HttpStatusCode } from "../shared/http";
import Course from "../models/Course";
import Lesson from "../models/Lesson";
import Article from "../models/Article";
import Exercise from "../models/Exercise";
import Test from "../models/Test";
import * as AWS from "../config/aws";

// todo: Add pagination
export const createCourse = async (title: string, description: string) => {
  try {
    const slug = title.trim().replace(/\s+/g, "-");

    const newCourse: any = await Course.create({
      title,
      description,
      slug,
    });

    return {
      title: newCourse.title,
      description: newCourse.description,
      slug,
    };
  } catch (error) {
    catcher(error);
  }
};

// todo: Filters
export const getAllCourses = async (skip = 5, limit = 15) => {
  try {
    const courses = await Course.find({})
      .select("title description slug")
      .lean()
      .exec();
    return courses;
  } catch (error) {
    catcher(error);
  }
};

export const getCourse = async (slug: string) => {
  try {
    const course = await Course.findOne({ slug })
      .select("title description slug")
      .lean()
      .exec();

    if (!course) {
      throw new BaseError(
        "API Error",
        HttpStatusCode.NOT_FOUND,
        "Resource not found",
        true
      );
    }

    return course;
  } catch (error) {
    catcher(error);
  }
};

export const updateCourse = async (slug: string, properties: any) => {
  try {
    const { title } = properties;

    let newSlug;

    if (title) {
      newSlug = title.trim().replace(/\s+/g, "-");
      properties = { ...properties, slug: newSlug };
    }

    return await Course.updateOne({ slug }, { $set: properties }).lean().exec();
  } catch (error) {
    catcher(error);
  }
};

export const createLesson = async (
  slug: string,
  title: string,
  content: any,
  type: string
) => {
  try {
    const course: any = await Course.findOne({ slug });

    if (!course) {
      throw new BaseError(
        "API Error",
        HttpStatusCode.NOT_FOUND,
        "Resource not found",
        true
      );
    }
    let lesson;

    const lessonSlug = title.trim().replace(/\s+/g, "-");

    console.log(lessonSlug);
    // Praparing the file to S3
    const buf = Buffer.from(JSON.stringify({ content: content }));

    switch (type) {
      case "Article": {
        const filename = `articles/${Date.now().toString()}.json`;

        const articelS3 = await AWS.upload(buf, filename, "application/json");

        lesson = await Article.create({
          title,
          meta: articelS3,
          type,
          courseSlug:slug,
          slug: lessonSlug,
          course: course._id,
        });
        break;
      }

      case "Exercise": {
        const filename = `exercises/${Date.now().toString()}.json`;

        const exerciseS3 = await AWS.upload(buf, filename, "application/json");

        lesson = await Exercise.create({
          title,
          meta: exerciseS3,
          type,
          courseSlug:slug,
          slug: lessonSlug,
          course: course._id,
        });
        break;
      }
      case "Test": {
        const filename = `tests/${Date.now().toString()}.json`;

        const testS3 = await AWS.upload(buf, filename, "application/json");

        lesson = await Test.create({
          title,
          meta: testS3,
          type,
          courseSlug:slug,
          slug: lessonSlug,
          course: course._id,
        });
        break;
      }
      default:
        break;
    }

    course.lessons = [...course.lessons, lesson._id];

    course.save();

    return lesson;
  } catch (error) {
    catcher(error);
  }
};

export const getAllLessons = async (slug: string) => {
  const lessons = await Course.findOne({ slug })
    .populate("lessons")
    .lean()
    .exec();
  return lessons;
};

export const removeLesson = async (slug: string, lessonId: string) => {
  try {
    const course: any = await Course.findOne({ slug });

    if (!course) {
      throw new BaseError(
        "API Error",
        HttpStatusCode.NOT_FOUND,
        "Resource not found",
        true
      );
    }
    const lesson = await Lesson.findByIdAndDelete(lessonId);

    course.lessons = course.lessons.filter(
      (lesson: any) => lesson._id != lessonId
    );

    return lesson;
  } catch (error) {
    catcher(error);
  }
};
