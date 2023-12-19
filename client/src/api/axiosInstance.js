import axios from "axios";
import { apiUrl } from "../utils/helpers";

export const axiosInstance = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
  },
});