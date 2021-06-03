import mongoose from "mongoose";
/**
 * @desc: Lesson schema is a 'base/parent' schema for other types of lessons
 * We can achieve that by using 'discriminator'
 */

const schemaOptions = {
  discriminatorKey: "kind", // the name of the filed that will store other user schema data
  collection: "Lesson", // the name of base/parent collection
  timestamps: true,
};

const lessonSchema = new mongoose.Schema({}, schemaOptions);

lessonSchema.index({ title: "text" });

export default mongoose.model("Lesson", lessonSchema);
