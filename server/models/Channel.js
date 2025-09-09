import mongoose from "mongoose";

const channelSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: String
});

export default mongoose.model("Channel", channelSchema);
