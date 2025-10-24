import { connectDB } from "@/lib/mongodb";
import Cars from "@/models/Cars";
import cloudinary from "@/lib/cloudinary";

export async function GET() {
  try {
    await connectDB();
    const cars = await Cars.find().sort({ createdAt: -1 });
    return Response.json(cars, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDB();

    // Parse JSON instead of formData
    const body = await req.json();

    const { name, description, models, logoBase64, imageBase64 } = body;

    const parsedModels = models ? models.map((m) => m.trim()) : [];

    // Upload to Cloudinary directly from Base64
    const uploadLogo = await cloudinary.uploader.upload(logoBase64, {
      folder: "cars",
    });

    const uploadImage = await cloudinary.uploader.upload(imageBase64, {
      folder: "cars",
    });

    const newCar = await Cars.create({
      name,
      description,
      models: parsedModels,
      logo: { url: uploadLogo.secure_url, publicId: uploadLogo.public_id },
      image: { url: uploadImage.secure_url, publicId: uploadImage.public_id },
    });

    return Response.json(newCar, { status: 201 });
  } catch (error) {
    return Response.json({ message: "POST failed", error: error.message }, { status: 500 });
  }
}


export async function PUT(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { id, name, description, models, logoBase64, imageBase64 } = body;

    const existingCar = await Cars.findById(id);
    if (!existingCar) {
      return Response.json({ message: "Car not found" }, { status: 404 });
    }

    let updateData = {
      name,
      description,
      models: models ? models.map((m) => m.trim()) : [],
    };

    // Update logo if provided
    if (logoBase64) {
      await cloudinary.uploader.destroy(existingCar.logo.publicId);

      const uploadNewLogo = await cloudinary.uploader.upload(logoBase64, {
        folder: "cars",
      });

      updateData.logo = {
        url: uploadNewLogo.secure_url,
        publicId: uploadNewLogo.public_id,
      };
    }

    // Update image if provided
    if (imageBase64) {
      await cloudinary.uploader.destroy(existingCar.image.publicId);

      const uploadNewImage = await cloudinary.uploader.upload(imageBase64, {
        folder: "cars",
      });

      updateData.image = {
        url: uploadNewImage.secure_url,
        publicId: uploadNewImage.public_id,
      };
    }

    const updatedCar = await Cars.findByIdAndUpdate(id, updateData, { new: true });

    return Response.json(updatedCar, { status: 200 });
  } catch (error) {
    return Response.json({ message: "PUT failed", error: error.message }, { status: 500 });
  }
}


export async function DELETE(req) {
  try {
    await connectDB();
    const { id } = await req.json();

    const car = await Cars.findById(id);
    if (!car) return Response.json({ message: "Car not found" }, { status: 404 });

    await cloudinary.uploader.destroy(car.logo.publicId);
    await cloudinary.uploader.destroy(car.image.publicId);

    await Cars.findByIdAndDelete(id);

    return Response.json({ message: "Deleted" }, { status: 200 });
  } catch (error) {
    return Response.json({ message: "DELETE failed", error: error.message }, { status: 500 });
  }
}

