import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
  img: { type: String },
});

const User = mongoose.model("User", userSchema);

export default User;