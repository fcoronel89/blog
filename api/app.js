import express from "express";
import cors from "cors";
import api from "./routes/api.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(morgan("combined"));
app.use(express.json());
app.use(cookieParser());

app.use("/v1", api);

export default app;
