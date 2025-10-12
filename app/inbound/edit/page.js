"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EditInboundList() {
  const [inbounds, setInbounds] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Fetch all inbound items
  useEffect(() => {
    const fetchInbounds = async () => {
      try {
        const res = await fetch("/api/inbound");
        const data = await res.json();
        setInbounds(data);
      } catch (error) {
        console.error("Failed to load inbound items", error);
      } finally {
        setLoading(false);
      }
    };
    fetchInbounds();
  }, []);

  if (loading) {
    return <div className="p-6 text-center text-gray-600">Loading...</div>;
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6 text-center">Edit Inbound Items</h1>

      {inbounds.length === 0 ? (
        <p className="text-center text-gray-500">No inbound items found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {inbounds.map((item) => (
            <div
              key={item._id}
              className="border rounded-lg shadow-sm hover:shadow-lg transition p-4 cursor-pointer bg-white"
              onClick={() => router.push(`/inbound/edit/${item._id}`)}
            >
              <img
                src={item.image || "/placeholder.png"}
                alt={item.name}
                className="w-full h-48 object-cover rounded-md mb-3"
              />
              <h2 className="text-lg font-medium">{item.name}</h2>
              <p className="text-sm text-gray-600 mb-1">₹{item.price}</p>
              <div className="flex flex-wrap gap-1 mb-2">
                {item.tags &&
                  item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
              </div>
              <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/inbound/edit/${item._id}`);
                }}
                className="mt-3 bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700 w-full"
              >
                Edit
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
