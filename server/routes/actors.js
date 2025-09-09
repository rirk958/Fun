import express from "express";
import Actor from "../models/Actor.js";

const router = express.Router();

router.get("/", async (_req, res) => {
  const actors = await Actor.find();
  res.json(actors);
});

router.post("/", async (req, res) => {
  const actor = await Actor.create(req.body);
  res.status(201).json(actor);
});

router.delete("/:id", async (req, res) => {
  await Actor.findByIdAndDelete(req.params.id);
  res.json({ message: "deleted" });
});

export default router;
