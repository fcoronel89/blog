import express from "express";
const usersRouter = express.Router();

usersRouter.get("/users", (req, res) => {
    return res.json({
        users: ["users 1", "Post 2", "Post 3"],
    })
})


export default usersRouter;