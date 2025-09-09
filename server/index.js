import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import actorRoutes from "./routes/actors.js";
import channelRoutes from "./routes/channels.js";
import videoRoutes from "./routes/videos.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/mydb")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use("/api/actors", actorRoutes);
app.use("/api/channels", channelRoutes);
app.use("/api/videos", videoRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
