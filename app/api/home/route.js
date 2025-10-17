import { connectDB } from "@/lib/mongodb";
import cloudinary from "@/lib/cloudinary";
import Home from "@/models/Home";
import { NextResponse } from "next/server";

// 📍 GET
export async function GET() {
  try {
    await connectDB();
    const home = await Home.find().sort({ createdAt: -1 });
    return new Response(JSON.stringify(home), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error fetching home", error: error.message }), { status: 500 });
  }
}

//post 
export const POST = async (req) => {
  try {
    const { heading, tagline, heroImages, belowHeroImages } = await req.json();

    if (!heading || !tagline) {
      return NextResponse.json({ error: "Heading and tagline required" }, { status: 400 });
    }

    await connectDB();

    // Upload hero section images
    const heroUrls = await Promise.all(
      (heroImages || []).map(async (base64) => {
        const uploaded = await cloudinary.uploader.upload(base64, {
          folder: "hero_section",
        });
        return uploaded.secure_url;
      })
    );

    // Upload below-hero section images
    const belowUrls = await Promise.all(
      (belowHeroImages || []).map(async (base64) => {
        const uploaded = await cloudinary.uploader.upload(base64, {
          folder: "below_hero_section",
        });
        return uploaded.secure_url;
      })
    );

    // Save to MongoDB
    const home = await Home.create({
      heading,
      tagline,
      heroImages: heroUrls,
      belowHeroImages: belowUrls,
    });

    return NextResponse.json({
      message: "Data saved successfully",
      data: home,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
};