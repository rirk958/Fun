import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title:   { type: String, required: true },
  path:    { type: String, required: true },
  channel: { type: mongoose.Schema.Types.ObjectId, ref: "Channel" },
  actors:  [{ type: mongoose.Schema.Types.ObjectId, ref: "Actor" }],
  date:    { type: Date, default: Date.now }
});

export default mongoose.model("Video", videoSchema);
