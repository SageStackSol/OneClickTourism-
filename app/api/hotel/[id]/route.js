import { connectDB } from "@/lib/mongodb";
// import Destinations from "@/models/Destinations";
import Hotels from "@/models/Hotels";
import cloudinary from "@/lib/cloudinary";

// 📍 GET single hotel
export async function GET(req, { params }) {
  try {
    await connectDB();
    const hotel = await Hotels.findById(params.id);
    if (!hotel) return new Response(JSON.stringify({ message: "hotel not found" }), { status: 404 });
    return new Response(JSON.stringify(hotel), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error fetching hotel", error: error.message }), { status: 500 });
  }
}

// 📍 PUT: update hotel
export async function PUT(req, { params }) {
  try {
    await connectDB();
    const { name, price, description, imageBase64, oldImage } = await req.json();
    const updateData = { name, price, description };

    if (imageBase64) {
      if (oldImage) {
        const publicId = oldImage.split("/").pop().split(".")[0];
        await cloudinary.uploader.destroy(`hotels/${publicId}`);
      }
      const upload = await cloudinary.uploader.upload(imageBase64, { folder: "hotels" });
      updateData.image = upload.secure_url;
    }

    const updated = await Hotels.findByIdAndUpdate(params.id, updateData, { new: true });
    return new Response(JSON.stringify({ message: "Hotels updated", hotel: updated }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error updating hotel", error: error.message }), { status: 500 });
  }
}

// 📍 DELETE
export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const hotel = await Hotels.findById(params.id);
    if (!hotel) return new Response(JSON.stringify({ message: "Hotels not found" }), { status: 404 });

    if (hotel.image) {
      const publicId = hotel.image.split("/").pop().split(".")[0];
      await cloudinary.uploader.destroy(`Hotels/${publicId}`);
    }

    await Hotels.findByIdAndDelete(params.id);
    return new Response(JSON.stringify({ message: "Hotels deleted successfully" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error deleting hotel", error: error.message }), { status: 500 });
  }
}
