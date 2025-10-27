"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function EnquiryPage() {
  const { id } = useParams();
  const [inbound, setInbound] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    fromDate: "",
    toDate: "",
    numberOfPeople: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // ✅ Fetch inbound details
  useEffect(() => {
    const fetchInbound = async () => {
      try {
        const res = await fetch(`/api/inbound/${id}`);
        const data = await res.json();
        setInbound(data);
      } catch (err) {
        console.error("Failed to load inbound:", err);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchInbound();
  }, [id]);

  // ✅ Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validation
    if (
      !formData.fullName ||
      !formData.mobileNumber ||
      !formData.email ||
      !formData.fromDate ||
      !formData.toDate ||
      !formData.numberOfPeople
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, destination: inbound?.name }),
      });

      if (res.ok) {
        setSuccess("Your enquiry has been submitted successfully!");
        setFormData({
          fullName: "",
          mobileNumber: "",
          email: "",
          fromDate: "",
          toDate: "",
          numberOfPeople: "",
          message: "",
        });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Error submitting form.");
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Loading...
      </div>
    );

  if (!inbound)
    return (
      <div className="flex justify-center items-center h-screen text-xl text-gray-500">
        Destination not found.
      </div>
    );

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      {/* Left Side - Form */}
      <div className="lg:w-1/2 w-full bg-white p-10 flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Enquire for {inbound.name}
        </h1>
        <p className="text-gray-600 mb-6">
          Fill in the details below and our travel team will reach out to you
          shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name *"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
          />

          <input
            type="tel"
            name="mobileNumber"
            placeholder="Mobile Number *"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
          />

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm text-gray-600 mb-1">
                From Date *
              </label>
              <input
                type="date"
                name="fromDate"
                value={formData.fromDate}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm text-gray-600 mb-1">
                To Date *
              </label>
              <input
                type="date"
                name="toDate"
                value={formData.toDate}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>
          </div>

          <input
            type="number"
            name="numberOfPeople"
            placeholder="Number of People *"
            value={formData.numberOfPeople}
            onChange={handleChange}
            min="1"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
          />

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
          ></textarea>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-600 text-sm">{success}</p>}

          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Submit Enquiry
          </button>
        </form>
      </div>

      {/* Right Side - Destination Preview */}
      <div className="lg:w-1/2 w-full relative">
        <img
          src={inbound.image}
          alt={inbound.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 bg-black/50 text-white p-6 w-full">
          <h2 className="text-2xl font-bold">{inbound.name}</h2>
          <p className="mt-2 text-sm line-clamp-3">{inbound.description}</p>
          <p className="mt-2 font-semibold">₹{inbound.price}</p>
        </div>
      </div>
    </div>
  );
}
