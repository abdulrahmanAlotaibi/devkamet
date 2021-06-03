import mongoose from "mongoose";
import User from "./User";

const AdminSchema = new mongoose.Schema({
  bugs: [
    {
      title: String,
      description: String,
    },
  ],
});

export default User.discriminator("Admin", AdminSchema);
