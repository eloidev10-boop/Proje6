import express from "express";
import Teacher from "../models/Teacher.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const teachers = await Teacher.find();
  res.json(teachers);
});

router.get("/:id", async (req, res) => {
  const teacher = await Teacher.findById(req.params.id);
  res.json(teacher);
});

export default router;
