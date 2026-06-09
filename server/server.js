import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import authRoutes from "./routes/auth.js";
import teacherRoutes from "./routes/teachers.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/teachers", teacherRoutes);

mongoose.connect("YOUR_MONGO_URL");

app.listen(5000, () => {
  console.log("Server running");
});
