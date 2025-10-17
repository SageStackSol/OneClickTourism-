import mongoose from "mongoose";

const homeSchema = new mongoose.Schema(
  {
    heading: { type: String, required: true },
    tagline: { type: String, required: true },
    // images: { type: [String], required: true },
    heroImages: [String],
    belowHeroImages: [String],
  },
  { timestamps: true }
);

export default mongoose.models.Home || mongoose.model("Home", homeSchema);
