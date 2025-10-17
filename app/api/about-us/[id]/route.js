import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
// import connectDB from "@/lib/mongodb";
import { connectDB } from "@/lib/mongodb";
import AboutUs from "@/models/AboutUs";


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

    const {  aboutUsHeroImages} = await req.json();

    const about = await AboutUs.findById(id);
    if (!about) {
      return NextResponse.json({ error: "Record not found" }, { status: 404 });
    }

    // ✅ helper to upload images if base64 provided
    const uploadImage = async (img, folder) => {
      if (img.startsWith("http")) return img; // already URL
      const uploadRes = await cloudinary.uploader.upload(img, { folder });
      return uploadRes.secure_url;
    };

    // ✅ upload new images (if sent)
    const heroUrls = aboutUsHeroImages
      ? await Promise.all(aboutUsHeroImages.map((img) => uploadImage(img, "aboutHero")))
      : about.aboutUsHeroImages;



    // ✅ update record
   
    AboutUs.aboutUsHeroImages = heroUrls;


    await AboutUs.save();

    return NextResponse.json(
      { message: "about section updated successfully", data: AboutUs },
      { status: 200 }
    );
  } catch (error) {
    console.error("Edit error:", error);
    return NextResponse.json({ error: "Edit failed" }, { status: 500 });
  }
};
