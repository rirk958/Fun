import express from "express";
import Video from "../models/Video.js";

const router = express.Router();

// filter by ?actor=<id>&channel=<id>
router.get("/", async (req, res) => {
  const query = {};
  if (req.query.actor)   query.actors = req.query.actor;
  if (req.query.channel) query.channel = req.query.channel;

  const videos = await Video.find(query).populate("actors channel");
  res.json(videos);
});

router.post("/", async (req, res) => {
  const video = await Video.create(req.body);
  res.status(201).json(video);
});

export default router;
