import mongoose from "mongoose";
import Lesson from "./Lesson";
const ArticleSchema = new mongoose.Schema(
  {
    contentType: {
      type: String,
      default: "Article",
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    meta: {
      // Reference to storage solution (S3)
    },
    slug: {
      type: String,
      require: true,
      unique: true,
      trim: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      path: "Course",
      required: true,
    },
    tags: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

export default Lesson.discriminator("Article", ArticleSchema);
