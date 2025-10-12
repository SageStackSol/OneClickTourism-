"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditInbound() {
  const { id } = useParams();
  const router = useRouter();
  const [form, setForm] = useState({ name: "", price: "", tags: "", description: "", imageBase64: "" });
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    const fetchInbound = async () => {
      const res = await fetch(`/api/inbound/${id}`);
      const data = await res.json();
      setForm({ name: data.name, price: data.price, tags: data.tags.join(", "), description: data.description, imageBase64: "" });
      setCurrentImage(data.image);
    };
    fetchInbound();
  }, [id]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setForm({ ...form, imageBase64: reader.result });
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/inbound/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        price: Number(form.price),
        tags: form.tags.split(",").map((tag) => tag.trim()),
        oldImage: currentImage,
      }),
    });

    const data = await res.json();
    alert(data.message);
    router.push("/inbound");
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-semibold mb-4">Edit Inbound</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input name="name" value={form.name} onChange={handleChange} required />
        <input name="price" type="number" value={form.price} onChange={handleChange} required />
        <input name="tags" value={form.tags} onChange={handleChange} />
        <textarea name="description" value={form.description} onChange={handleChange} required />
        <div>
          <p className="text-sm text-gray-500 mb-1">Current Image:</p>
          <img src={currentImage} alt="Current" className="w-32 h-32 object-cover rounded mb-2" />
          <input type="file" accept="image/*" onChange={handleImage} />
          {form.imageBase64 && <img src={form.imageBase64} className="w-32 h-32 object-cover rounded" />}
        </div>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Update</button>
      </form>
    </div>
  );
}
