import { createUser, findUser } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const register = async (req, res) => {
  try {
    const user = req.body;
    const createdUser = await createUser(user);
    res.status(201).json(createdUser);
  } catch (error) {
    if (error.message.includes("The user already exists")) {
      return res.status(409).json({ message: "User already exists" });
    }
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const existingUser = await findUser({
      userName: req.body.userName,
    });

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }
    //Check password
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      existingUser.password
    );
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Wrong username or password" });
    }

    const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET);

    const { password, ...info } = existingUser._doc;

    return res
      .cookie("access_token", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24,
      })
      .status(200)
      .json({ info });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const logout = async (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json({ message: "User has been logged out" });
};

export const isLoggedIn = async (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(401).json({ message: "Please login" });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(401).json({ message: "Please login" });
    }
    
    req.user = user;
    next();
  });
};
