import mongoose from "mongoose";

const TestReportSchema = new mongoose.Schema({
  status: {
    type: String,
    default: "notSubmitted",
    enum: ["notSubmitted", "passed", "failed"],
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
  testId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Test",
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export default mongoose.model("TestReport", TestReportSchema);
