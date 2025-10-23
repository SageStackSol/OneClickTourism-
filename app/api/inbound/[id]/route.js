import { connectDB } from "@/lib/mongodb";
import Inbound from "@/models/Inbound";
import cloudinary from "@/lib/cloudinary";

// 📍 GET single inbound
export async function GET(req, { params }) {
  try {
    await connectDB();
    const inbound = await Inbound.findById(params.id);
    if (!inbound) return new Response(JSON.stringify({ message: "Inbound not found" }), { status: 404 });
    return new Response(JSON.stringify(inbound), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error fetching inbound", error: error.message }), { status: 500 });
  }
}

// 📍 PUT: update inbound
export async function PUT(req, { params }) {
  try {
    await connectDB();
    const { name, price, categoryTags, timeTags, experienceTags, description, imageBase64, oldImage } = await req.json();
    const updateData = { name, price, description, categoryTags, timeTags, experienceTags };

    if (imageBase64) {
      if (oldImage) {
        const publicId = oldImage.split("/").pop().split(".")[0];
        await cloudinary.uploader.destroy(`inbounds/${publicId}`);
      }
      const upload = await cloudinary.uploader.upload(imageBase64, { folder: "inbounds" });
      updateData.image = upload.secure_url;
    }

    const updated = await Inbound.findByIdAndUpdate(params.id, updateData, { new: true });
    return new Response(JSON.stringify({ message: "Inbound updated", inbound: updated }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error updating inbound", error: error.message }), { status: 500 });
  }
}

// 📍 DELETE
export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const inbound = await Inbound.findById(params.id);
    if (!inbound) return new Response(JSON.stringify({ message: "Inbound not found" }), { status: 404 });

    if (inbound.image) {
      const publicId = inbound.image.split("/").pop().split(".")[0];
      await cloudinary.uploader.destroy(`inbounds/${publicId}`);
    }

    await Inbound.findByIdAndDelete(params.id);
    return new Response(JSON.stringify({ message: "Inbound deleted successfully" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error deleting inbound", error: error.message }), { status: 500 });
  }
}
