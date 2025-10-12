import mongoose from "mongoose";

const inboundSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    tags: { type: [String], default: [] },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Inbound || mongoose.model("Inbound", inboundSchema);
