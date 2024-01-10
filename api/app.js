import express from "express";
import cors from "cors";
import api from "./routes/api.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  })
);
app.use(morgan("combined"));
app.use(express.json());
app.use(cookieParser());

app.use("/v1", api);

export default app;
