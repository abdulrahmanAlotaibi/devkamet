import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Contact", ContactSchema);
