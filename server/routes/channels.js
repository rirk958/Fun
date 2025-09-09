import express from "express";
import Channel from "../models/Channel.js";

const router = express.Router();

router.get("/", async (_req, res) => {
  const channels = await Channel.find();
  res.json(channels);
});

router.post("/", async (req, res) => {
  const channel = await Channel.create(req.body);
  res.status(201).json(channel);
});

router.delete("/:id", async (req, res) => {
  await Channel.findByIdAndDelete(req.params.id);
  res.json({ message: "deleted" });
});

export default router;
