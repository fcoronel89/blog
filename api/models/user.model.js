import User from "./user.mongo.js";
import bcrypt from "bcryptjs";

export async function findUser(filter) {
  return await User.findOne(filter);
}

export async function findUserbyId(id) {
  return await User.findById(id);
}

export async function createUser(user) {
    try {
      const existingUser = await findUser({
        userName: user.userName,
      });

      if (existingUser) {
        throw new Error("The user already exists");
      }

      const salt = bcrypt.genSaltSync(10);
      user.password = bcrypt.hashSync(user.password, salt);
      const newUser = new User(user);
      console.log(newUser);
      await newUser.save();

    } catch (err) {
      throw new Error(err);
    }
  }