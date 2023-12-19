import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URL =process.env.MONGO_URI;

mongoose.connection.once("open", () => {
  console.log("Mongo db connection ready");
});

mongoose.connection.on("error", (error) => {
  console.error(error);
});

export async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

export async function mongoDisconnect() {
  await mongoose.disconnect();
}
