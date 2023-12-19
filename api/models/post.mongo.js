import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  desc: { type: String, required: true },
  img: { type: String },
  creatorId: { type: String, required: true },
  category: { type: String, required: true },
});

const Post = mongoose.model("Post", postSchema);

export default Post;