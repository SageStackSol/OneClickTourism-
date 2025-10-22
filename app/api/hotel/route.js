import { connectDB } from "@/lib/mongodb";
// import Inbound from "@/models/Inbound";
// import Destinations from "@/models/Destinations";
import Hotels from "@/models/Hotels";
import cloudinary from "@/lib/cloudinary";

// 📍 GET: fetch all hotels
export async function GET() {
  try {
    await connectDB();
    const hotels = await Hotels.find().sort({ createdAt: -1 });
    return new Response(JSON.stringify(hotels), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error fetching hotels", error: error.message }), { status: 500 });
  }
}

// 📍 POST: create new hotel
export async function POST(req) {
  try {
    await connectDB();
    const { name, price, description, imageBase64 } = await req.json();

    if (!name || !price || !description || !imageBase64) {
      return new Response(JSON.stringify({ message: "Missing required fields" }), { status: 400 });
    }

    const upload = await cloudinary.uploader.upload(imageBase64, { folder: "hotels" });

    const newHotel = await Hotels.create({
      name,
      price,
      // tags: tags || [],
      description,
      image: upload.secure_url,
    });

    return new Response(JSON.stringify({ message: "hotels created successfully", hotel: newHotel }), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Error creating hotel", error: error.message }), { status: 500 });
  }
}
