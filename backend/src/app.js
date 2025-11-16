import express from "express";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { createServer } from "node:http";
import cors from "cors";
import { connectToSocket } from "./controllers/socketManager.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, (req, res) => {
      console.log(`server listening on port:${ENV.PORT}`);
    });
  } catch (error) {
    console.log("error connection server");
  }
};

startServer();
