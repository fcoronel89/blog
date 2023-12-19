import { axiosInstance } from "./axiosInstance";

export const getPosts = async (cat) => {
  return await axiosInstance.get(`/posts${cat}`);
};

export const getPost = async (id) => {
  return await axiosInstance.get(`/posts/${id}`);
}

export const createPost = async (post) => {
  return await axiosInstance.post(`/posts`, post);
}

export const updatePost = async ({id, ...post}) => {
  console.log(id, post);
  return await axiosInstance.put(`/posts/${id}`, post);
}

export const deletePost = async (id) => {
  return await axiosInstance.delete(`/posts/${id}`);
}

export const uploadPostImage = async (formData) => {
  return await axiosInstance.post("/upload", formData);
}