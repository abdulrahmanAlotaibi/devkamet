import mongoose from "mongoose";
import User from "./User";
const StudentSchema = new mongoose.Schema({

})
export default User.discriminator("Student", StudentSchema);
