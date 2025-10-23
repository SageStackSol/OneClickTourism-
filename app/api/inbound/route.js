import { connectDB } from "@/lib/mongodb";
import Inbound from "@/models/Inbound";
import cloudinary from "@/lib/cloudinary";

// 📍 GET: fetch all inbounds
export async function GET() {
  try {
    await connectDB();
    const inbounds = await Inbound.find().sort({ createdAt: -1 });
    return new Response(JSON.stringify(inbounds), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error fetching inbounds", error: error.message }), { status: 500 });
  }
}

// 📍 POST: create new inbound
export async function POST(req) {
  try {
    await connectDB();
    const { name, price, categoryTags,timeTags,experienceTags, description, imageBase64 } = await req.json();

    if (!name || !price || !description || !imageBase64) {
      return new Response(JSON.stringify({ message: "Missing required fields" }), { status: 400 });
    }
console.log( name, price, categoryTags,timeTags,experienceTags, description, imageBase64 )
    const upload = await cloudinary.uploader.upload(imageBase64, { folder: "inbounds" });

    const newInbound = await Inbound.create({
      name,
      price,
      categoryTags: categoryTags || [],
      timeTags: timeTags || [],
      experienceTags: experienceTags || [],
      description,
      image: upload.secure_url,
    });

    return new Response(JSON.stringify({ message: "Inbound created successfully", inbound: newInbound }), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Error creating inbound", error: error.message }), { status: 500 });
  }
}
