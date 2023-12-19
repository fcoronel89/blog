import Post from "./post.mongo.js";

export const findPosts = async (filter) => {
  return await Post.find(filter);
};

export const findPostById = async (postId) => {
  return await Post.findById(postId);
};

export async function addPost(post) {
  try {
    const newPost = new Post(post);
    console.log(newPost);
    await newPost.save();
    return newPost;
  } catch (err) {
    throw err;
  }
}

export async function modifyPost(postId, post) {
  try {
    const updatedPost = await Post.findByIdAndUpdate(postId, post, {
      new: true,
    });
    return updatedPost;
  } catch (err) {
    throw err;
  }
}