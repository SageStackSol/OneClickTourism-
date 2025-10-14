import { connectDB } from "@/lib/mongodb";
import Destinations from "@/models/Destinations";
import cloudinary from "@/lib/cloudinary";

// 📍 GET single destination
export async function GET(req, { params }) {
  try {
    await connectDB();
    const destination = await Destinations.findById(params.id);
    if (!destination) return new Response(JSON.stringify({ message: "Destination not found" }), { status: 404 });
    return new Response(JSON.stringify(destination), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error fetching destination", error: error.message }), { status: 500 });
  }
}

// 📍 PUT: update destination
export async function PUT(req, { params }) {
  try {
    await connectDB();
    const { name, price, tags, description, imageBase64, oldImage } = await req.json();
    const updateData = { name, price, description, tags };

    if (imageBase64) {
      if (oldImage) {
        const publicId = oldImage.split("/").pop().split(".")[0];
        await cloudinary.uploader.destroy(`destinations/${publicId}`);
      }
      const upload = await cloudinary.uploader.upload(imageBase64, { folder: "Destinations" });
      updateData.image = upload.secure_url;
    }

    const updated = await Destinations.findByIdAndUpdate(params.id, updateData, { new: true });
    return new Response(JSON.stringify({ message: "Destinations updated", destination: updated }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error updating destination", error: error.message }), { status: 500 });
  }
}

// 📍 DELETE
export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const destination = await Destinations.findById(params.id);
    if (!destination) return new Response(JSON.stringify({ message: "Destinations not found" }), { status: 404 });

    if (destination.image) {
      const publicId = destination.image.split("/").pop().split(".")[0];
      await cloudinary.uploader.destroy(`destinations/${publicId}`);
    }

    await Destinations.findByIdAndDelete(params.id);
    return new Response(JSON.stringify({ message: "Destinations deleted successfully" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error deleting destination", error: error.message }), { status: 500 });
  }
}
