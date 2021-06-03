import mongoose from "mongoose";

const ChapterSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  contentType: {
    type: String,
    required: true,
    enum: ["Article", "Exercise", "Test"],
  },
  lessons: [
    {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "contentType", // Dynamic referencing
    },
  ],
  isArchive: {
    type: Boolean,
    default: false,
  },
},{timestamps: true});

export default mongoose.model("Chapter", ChapterSchema);
