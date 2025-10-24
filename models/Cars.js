import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    logo: {
      url: { type: String, required: true },
      publicId: { type: String, required: true }
    },
    image: {
      url: { type: String, required: true },
      publicId: { type: String, required: true }
    },
    models: { type: [String], default: [] },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Cars || mongoose.model("Cars", carSchema);
