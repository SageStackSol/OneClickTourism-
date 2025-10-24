// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function CreateCar() {
//   const router = useRouter();

//   const [form, setForm] = useState({
//     name: "",
//     description: "",
//     models: "",
//     logoBase64: "",
//     imageBase64: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const fileToBase64 = (file) =>
//     new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => resolve(reader.result);
//       reader.onerror = (err) => reject(err);
//     });

//   const handleLogo = async (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const base64 = await fileToBase64(file);
//       setForm({ ...form, logoBase64: base64 });
//     }
//   };

//   const handleImage = async (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const base64 = await fileToBase64(file);
//       setForm({ ...form, imageBase64: base64 });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.logoBase64 || !form.imageBase64) {
//       alert("Please upload both logo and car image!");
//       return;
//     }

//     setLoading(true);

//     try {
//       const payload = {
//         ...form,
//         models: form.models.split(",").map((m) => m.trim()),
//       };

//       const res = await fetch("/api/cars", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         alert(data.error || "Failed to add car");
//       } else {
//         alert("Car added successfully ✅");
//         router.push("/car-rentals");
//       }
//     } catch (err) {
//       console.error("POST ERROR:", err);
//       alert("Something went wrong while adding the car.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6 max-w-md mx-auto">
//       <h1 className="text-xl font-semibold mb-4">Add Car</h1>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-3">
//         <input
//           name="name"
//           placeholder="Car Brand Name"
//           value={form.name}
//           onChange={handleChange}
//           required
//           className="border p-2 rounded"
//         />
//         <textarea
//           name="description"
//           placeholder="Description"
//           value={form.description}
//           onChange={handleChange}
//           required
//           className="border p-2 rounded"
//         />
//         <input
//           name="models"
//           placeholder="Models (comma separated)"
//           value={form.models}
//           onChange={handleChange}
//           required
//           className="border p-2 rounded"
//         />

//         <div>
//           <p className="text-sm text-gray-600 mb-1">Upload Logo</p>
//           <input type="file" accept="image/*" onChange={handleLogo} required />
//           {form.logoBase64 && (
//             <img
//               src={form.logoBase64}
//               className="w-20 h-20 object-cover mt-2 rounded"
//               alt="Logo Preview"
//             />
//           )}
//         </div>

//         <div>
//           <p className="text-sm text-gray-600 mb-1">Upload Car Image</p>
//           <input type="file" accept="image/*" onChange={handleImage} required />
//           {form.imageBase64 && (
//             <img
//               src={form.imageBase64}
//               className="w-32 h-20 object-cover mt-2 rounded"
//               alt="Car Preview"
//             />
//           )}
//         </div>

//         <button
//           type="submit"
//           className={`bg-black text-white px-4 py-2 rounded ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
//           disabled={loading}
//         >
//           {loading ? "Creating..." : "Create"}
//         </button>
//       </form>
//     </div>
//   );
// }

"use client";
import { useState, useEffect } from "react";

export default function CarManagementPage() {
  const [cars, setCars] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    models: "",
    logoBase64: "",
    imageBase64: "",
  });
  const [editingCarId, setEditingCarId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch cars
  const fetchCars = async () => {
    try {
      const res = await fetch("/api/cars");
      const data = await res.json();
      setCars(data);
    } catch (err) {
      console.error("Fetch cars error:", err);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const fileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
    });

  const handleLogo = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64 = await fileToBase64(file);
      setForm({ ...form, logoBase64: base64 });
    }
  };

  const handleImage = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64 = await fileToBase64(file);
      setForm({ ...form, imageBase64: base64 });
    }
  };

  // CREATE
  const handleCreate = async (e) => {
    e.preventDefault();
    if (!form.logoBase64 || !form.imageBase64) {
      alert("Upload both logo and car image!");
      return;
    }

    setLoading(true);
    try {
      const payload = {
        ...form,
        models: form.models.split(",").map((m) => m.trim()),
      };

      const res = await fetch("/api/cars", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) alert(data.error || "Failed to create car");
      else {
        alert("Car created ✅");
        setForm({ name: "", description: "", models: "", logoBase64: "", imageBase64: "" });
        fetchCars();
      }
    } catch (err) {
      console.error("POST error:", err);
    } finally {
      setLoading(false);
    }
  };

  // EDIT
  const startEdit = (car) => {
    setEditingCarId(car._id);
    setForm({
      name: car.name,
      description: car.description,
      models: car.models.join(", "),
      logoBase64: car.logo.url,
      imageBase64: car.image.url,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!editingCarId) return;

    setLoading(true);
    try {
      const payload = {
        id: editingCarId,
        ...form,
        models: form.models.split(",").map((m) => m.trim()),
      };

      const res = await fetch("/api/cars", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) alert(data.error || "Failed to update car");
      else {
        alert("Car updated ✅");
        setEditingCarId(null);
        setForm({ name: "", description: "", models: "", logoBase64: "", imageBase64: "" });
        fetchCars();
      }
    } catch (err) {
      console.error("PUT error:", err);
    } finally {
      setLoading(false);
    }
  };

  // DELETE
  const handleDelete = async (id) => {
    if (!confirm("Delete this car?")) return;

    try {
      const res = await fetch("/api/cars", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      const data = await res.json();
      if (!res.ok) alert(data.error || "Failed to delete car");
      else {
        alert("Car deleted ✅");
        fetchCars();
      }
    } catch (err) {
      console.error("DELETE error:", err);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Car Management</h1>

      {/* CREATE / EDIT FORM */}
      <form
        onSubmit={editingCarId ? handleUpdate : handleCreate}
        className="flex flex-col gap-3 border p-4 rounded mb-6"
      >
        <h2 className="text-xl font-semibold">{editingCarId ? "Edit Car" : "Add Car"}</h2>
        <input
          name="name"
          placeholder="Car Brand Name"
          value={form.name}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          name="models"
          placeholder="Models (comma separated)"
          value={form.models}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <div>
          <p className="text-sm text-gray-600 mb-1">Upload Logo</p>
          <input type="file" accept="image/*" onChange={handleLogo} />
          {form.logoBase64 && (
            <img
              src={form.logoBase64}
              className="w-20 h-20 object-cover mt-2 rounded"
              alt="Logo Preview"
            />
          )}
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-1">Upload Car Image</p>
          <input type="file" accept="image/*" onChange={handleImage} />
          {form.imageBase64 && (
            <img
              src={form.imageBase64}
              className="w-32 h-20 object-cover mt-2 rounded"
              alt="Car Preview"
            />
          )}
        </div>
        <button
          type="submit"
          className={`bg-black text-white px-4 py-2 rounded ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={loading}
        >
          {loading ? (editingCarId ? "Updating..." : "Creating...") : editingCarId ? "Update Car" : "Create Car"}
        </button>
        {editingCarId && (
          <button
            type="button"
            className="mt-2 bg-gray-500 text-white px-4 py-2 rounded"
            onClick={() => {
              setEditingCarId(null);
              setForm({ name: "", description: "", models: "", logoBase64: "", imageBase64: "" });
            }}
          >
            Cancel Edit
          </button>
        )}
      </form>

      {/* CAR LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cars.map((car) => (
          <div key={car._id} className="border p-4 rounded shadow">
            <div className="flex items-center gap-4 mb-2">
              <img src={car.logo.url} className="w-12 h-12 object-cover rounded" alt="Logo" />
              <h3 className="text-lg font-semibold">{car.name}</h3>
            </div>
            <p className="text-gray-700 mb-2">{car.description}</p>
            <p className="text-gray-500 mb-2">Models: {car.models.join(", ")}</p>
            <img src={car.image.url} className="w-full h-32 object-cover rounded mb-2" alt="Car" />
            <div className="flex gap-2">
              <button
                className="bg-blue-600 text-white px-3 py-1 rounded"
                onClick={() => startEdit(car)}
              >
                Edit
              </button>
              <button
                className="bg-red-600 text-white px-3 py-1 rounded"
                onClick={() => handleDelete(car._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
