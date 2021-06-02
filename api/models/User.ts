import mongoose from "mongoose";

/**
 * @desc: User schema is a 'base/parent' schema for other types of users
 * We can achieve that by using 'discriminator'
 */

const schemaOptions = {
  discriminatorKey: "accountType", // the name of the filed that will store other user schema data
  collection: "User", // the name of base/parent collection
  timestamps: true,
};

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please supply a name"],
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: [true, "User must have a role"],
      default: "student",
      enum: ["student", "admin"],
    },
    avatarMeta: {},
    isVerified: {
      type: String,
      default: false,
    },
    isBaned: {
      type: Boolean,
      default: false,
    },
    refreshToken: String,
    resetPasswordToken: String,
    resetPasswordExpires: Date,
  },
  schemaOptions
);

export default mongoose.model("User", UserSchema);
