import mongoose from "mongoose";

const aboutUsSchema = new mongoose.Schema(
  {
    // heading: { type: String, required: true },
    // tagline: { type: String, required: true },
    // images: { type: [String], required: true },
    aboutUsHeroImages: [String],
    // belowHeroImages: [String],
  },
  { timestamps: true }
);

export default mongoose.models.AboutUs || mongoose.model("AboutUs", aboutUsSchema);
