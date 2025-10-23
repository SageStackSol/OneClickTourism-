import mongoose from "mongoose";

const inboundSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    categoryTags: { type: [String], default: [] },
    timeTags: { type: [String], default: [] },
    experienceTags: { type: [String], default: [] },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Inbound || mongoose.model("Inbound", inboundSchema);
