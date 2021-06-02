import mongoose from "mongoose";
import Lesson from "./Lesson";

const ExerciseSchema = new mongoose.Schema(
  {
    contentType: {
      type: String,
      default: "Exercise",
    },
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
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
    ourSolution: {
      type: String,
      required: true,
    },
    rawTest: {
      type: String,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      path: "Course",
      required: true,
    },
  },
  { timestamps: true }
);

export default Lesson.discriminator("Exercise", ExerciseSchema);
