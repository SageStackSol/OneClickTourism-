import { connectDB } from "@/lib/mongodb";
// import Inbound from "@/models/Inbound";
import Destinations from "@/models/Destinations";
import cloudinary from "@/lib/cloudinary";

// 📍 GET: fetch all destinations
export async function GET() {
  try {
    await connectDB();
    const destinations = await Destinations.find().sort({ createdAt: -1 });
    return new Response(JSON.stringify(destinations), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error fetching destinations", error: error.message }), { status: 500 });
  }
}

// 📍 POST: create new destination
export async function POST(req) {
  try {
    await connectDB();
    const { name, price, tags, description, imageBase64 } = await req.json();

    if (!name || !price || !description || !imageBase64) {
      return new Response(JSON.stringify({ message: "Missing required fields" }), { status: 400 });
    }

    const upload = await cloudinary.uploader.upload(imageBase64, { folder: "Destinations" });

    const newDestination = await Destinations.create({
      name,
      price,
      tags: tags || [],
      description,
      image: upload.secure_url,
    });

    return new Response(JSON.stringify({ message: "Destinations created successfully", destination: newDestination }), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Error creating destination", error: error.message }), { status: 500 });
  }
}
