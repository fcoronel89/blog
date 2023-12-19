import express  from "express";
import postsRouter from "./posts.js";
import usersRouter from "./users.js";
import authRouter from "./auth.js";
import uploadRouter from "./upload.js";

const api = express.Router();

api.use("/posts", postsRouter);
api.use(usersRouter);
api.use("/auth",authRouter);
api.use("/upload",uploadRouter);

api.get("/", (req, res) => {
  const htmlResponse = `
      <html>
        <head>
          <title>NodeJs y Express</title>
        </head>
        <body>
          <h1>API Blog</h1>
        </body>
      </html>
    `;
  return res.send(htmlResponse);
});

export default api;
