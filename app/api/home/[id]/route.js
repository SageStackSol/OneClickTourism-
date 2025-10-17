import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
// import connectDB from "@/lib/mongodb";
import { connectDB } from "@/lib/mongodb";
import Home from "@/models/Home";


// ✅ Cloudinary Config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const PUT = async (req, { params }) => {
  const { id } = params;

  try {
    await connectDB();

    const { heading, tagline, heroImages, belowHeroImages } = await req.json();

    const home = await Home.findById(id);
    if (!home) {
      return NextResponse.json({ error: "Record not found" }, { status: 404 });
    }

    // ✅ helper to upload images if base64 provided
    const uploadImage = async (img, folder) => {
      if (img.startsWith("http")) return img; // already URL
      const uploadRes = await cloudinary.uploader.upload(img, { folder });
      return uploadRes.secure_url;
    };

    // ✅ upload new images (if sent)
    const heroUrls = heroImages
      ? await Promise.all(heroImages.map((img) => uploadImage(img, "hero")))
      : home.heroImages;

    const belowUrls = belowHeroImages
      ? await Promise.all(belowHeroImages.map((img) => uploadImage(img, "belowHero")))
      : home.belowHeroImages;

    // ✅ update record
    home.heading = heading || home.heading;
    home.tagline = tagline || home.tagline;
    home.heroImages = heroUrls;
    home.belowHeroImages = belowUrls;

    await home.save();

    return NextResponse.json(
      { message: "Home section updated successfully", data: home },
      { status: 200 }
    );
  } catch (error) {
    console.error("Edit error:", error);
    return NextResponse.json({ error: "Edit failed" }, { status: 500 });
  }
};
