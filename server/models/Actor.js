import mongoose from "mongoose";

const actorSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  bio: String,
  photo: String
});

export default mongoose.model("Actor", actorSchema);
