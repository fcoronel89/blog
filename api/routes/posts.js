import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/post.js";
import { isLoggedIn } from "../controllers/auth.js";

const postsRouter = express.Router();

postsRouter.get("/", getPosts);
postsRouter.get("/:id", getPost);
postsRouter.post("/", isLoggedIn, createPost);
postsRouter.delete("/:id", isLoggedIn, deletePost);
postsRouter.put("/:id", isLoggedIn, updatePost);

postsRouter.post("/post", createPost);

export default postsRouter;
