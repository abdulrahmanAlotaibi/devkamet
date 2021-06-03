import mongoose from "mongoose";
import Lesson from "./Lesson";

const TestSchema = new mongoose.Schema(
  {
    contentType: {
      type: String,
      default: "Test",
    },
    title: {
      type: String,
      required: true,
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
  },
  { timestamps: true }
);

export default Lesson.discriminator("Test", TestSchema);
