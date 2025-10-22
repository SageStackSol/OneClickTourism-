"use client";
import { useState,useEffect} from "react";
import { useRouter } from "next/navigation";

export default function CreateHotel() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", price: "", description: "", imageBase64: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setForm({ ...form, imageBase64: reader.result });
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/hotel", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        price: Number(form.price),
        // tags: form.tags.split(",").map((tag) => tag.trim()),
      }),
    });

    const data = await res.json();
    alert(data.message);
    console.log(data)
    // router.push("/inbound");
  };
   useEffect(() => {
      const fetchHotels = async () => {
        try {
          const res = await fetch("/api/hotel");
          const data = await res.json();
          // setdestinations(data);
          console.log(data);
        } catch (error) {
          console.error("Failed to load destination items", error);
        } finally {
          setLoading(false);
        }
      };
      fetchHotels();
    }, []);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-semibold mb-4">Add Hotel</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="price" type="number" placeholder="Price" onChange={handleChange} required />
        {/* <input name="tags" placeholder="Tags (comma separated)" onChange={handleChange} /> */}
        <textarea name="description" placeholder="Description" onChange={handleChange} required />
        <input type="file" accept="image/*" onChange={handleImage} required />
        {form.imageBase64 && <img src={form.imageBase64} alt="Preview" className="w-32 h-32 object-cover rounded" />}
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Create</button>
      </form>
    </div>
  );
}
