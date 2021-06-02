import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
      trim: true,
    },

    description: {
      type: String,
    },
    slug: {
      type: String,
      require: true,
      unique: true,
      trim: true,
    },
    status: {
      type: String,
      default: "Published",
    },
    lessons: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lesson",
        default: [],
      },
    ],
  },
  { timestamps: true }
);

CourseSchema.index({ title: "text", description: "text", tags: "text" });

export default mongoose.model("Course", CourseSchema);
