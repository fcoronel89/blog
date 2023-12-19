import multer from "multer";
import express from "express";

const uploadRouter = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../client/public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

uploadRouter.post("/", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file?.filename);
});

export default uploadRouter;
