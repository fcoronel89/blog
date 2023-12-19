import { axiosInstance } from "./axiosInstance";

export const login = async (user) => {
  return await axiosInstance.post("/auth/login", user);
};

export const register = async (user) => {
  return await axiosInstance.post("/auth/register", user);
};

export const logout = async () => {
  return await axiosInstance.get("/auth/logout");
};
