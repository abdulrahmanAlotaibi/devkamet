import Lesson from "../models/Lesson";
import { catcher } from "../middlewares/errorHandler";
import Contact from "../models/Contact";
import Course from "../models/Course";
import { Console } from "node:console";

export const contactUs = async (
  name: string,
  content: string,
  email: string
) => {
  try {
    const contact = await Contact.create({ name, content, email });
    return contact;
  } catch (error) {
    catcher(error);
  }
};

export const search = async (term: string, filters: any) => {
  const lessons = await Lesson.find(
    { $text: { $search: term, $caseSensitive: false } },
    { score: { $meta: "textScore" } }
  )
    .sort({ score: { $meta: "textScore" } })
    .exec();

  return lessons;
};
