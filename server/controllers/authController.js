import Teacher from "../models/Teacher.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {

  const { fullName, email, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  await Teacher.create({
    fullName,
    email,
    password: hashed
  });

  res.json({ message: "User created" });
};

export const login = async (req, res) => {

  const { email, password } = req.body;

  const user = await Teacher.findOne({ email });

  if (!user) return res.status(404).json({ msg: "Not found" });

  const match = await bcrypt.compare(password, user.password);

  if (!match) return res.status(401).json({ msg: "Wrong password" });

  const token = jwt.sign({ id: user._id }, "secret", {
    expiresIn: "7d"
  });

  res.json({ token, user });
};
