import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({

  fullName: String,
  email: String,
  password: String,

  subject: String,
  school: String,
  experience: String,
  bio: String,

  skills: [String]

});

export default mongoose.model("Teacher", teacherSchema);
