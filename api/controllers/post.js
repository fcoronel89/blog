import { addPost, findPostById, findPosts, modifyPost } from "../models/post.model.js";
import { findUserbyId } from "../models/user.model.js";

export const getPosts = async (req, res) => {
  const cat = req.query.cat;
  try {
    const posts = await findPosts(cat ? { category: cat } : {});
    return res.status(200).json(posts);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const getPost = async (req, res) => {
  try {
    const post = await findPostById(req.params.id);
    const { userName, img } = await findUserbyId(post.creatorId);
    const data = {
      ...post._doc,
      userName,
      userImg: img,
    };
    return res.status(200).json(data);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).json({ message: "Post not found" });
    }
    return res.status(500).json(err);
  }
};

export const createPost = async (req, res) => {
  try {
    const postData = {
      ...req.body,
      creatorId: req.user.id,
    };
    console.log(postData);
    await addPost(postData);
    return res.status(200).json({ message: "Post created" });
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(400).json({ message: err.message });
    }
    return res.status(500).json(err);
  }
};

export const deletePost = async (req, res) => {
  try {
    const post = await findPostById(req.params.id);
    if (post.creatorId === req.user.id) {
      await post.deleteOne();
      return res.status(200).json({ message: "Post deleted" });
    } else {
      return res.status(403).json({ message: "You can delete only your post" });
    }
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).json({ message: "Post not found" });
    }
    return res.status(500).json(err);
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await findPostById(req.params.id);
    if (post.creatorId === req.user.id) {
      await modifyPost(id, req.body);
      return res.status(200).json({ message: "Post updated" });
    } else {
      return res.status(403).json({ message: "You can update only your post" });
    }
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).json({ message: "Post not found" });
    }
    return res.status(500).json(err.message);
  }
};
