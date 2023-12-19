import http from "http"; // Change this line
import app from "./app.js";
import { mongoConnect } from "./services/mongo.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 3001; // Choose a suitable port
let server;

async function startServer() {
  try {
    // Establish MongoDB connection
    await mongoConnect();

    // Running in development, use HTTP instead of HTTPS
    server = http.createServer(app);

    // Start the server
    server.listen(port, () => {
      console.log(`Server is running in http://localhost:${port}`);
    });

    //return server; // Return the server instance
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the application on connection error
  }
}

startServer();
