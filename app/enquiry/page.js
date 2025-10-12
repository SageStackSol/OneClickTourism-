"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function EnquiryForm() {
  const searchParams = useSearchParams();

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);

  const [formData, setFormData] = useState({
    inbound: {},
    destination: {},
    visa: {},
    car: {},
    flight: {},
    hotel: {},
  });

  // ✅ This is safe now, inside Suspense
  useEffect(() => {
    const service = searchParams.get("service");
    const days = searchParams.get("days");

    if (service === "visa") {
      setSelectedServices((prev) =>
        prev.includes("Visa Assistance") ? prev : [...prev, "Visa Assistance"]
      );

      if (days) {
        setFormData((prev) => ({
          ...prev,
          visa: { ...prev.visa, daysValid: days },
        }));
      }
    }
  }, [searchParams]);

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleServiceChange = (service, key, value) => {
    setFormData((prev) => ({
      ...prev,
      [service]: { ...prev[service], [key]: value },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullForm = {
      firstName: fName,
      lastName: lName,
      email,
      phone,
      message,
      selectedServices,
      details: formData,
    };

    console.log("Submitting JSON:", fullForm);

    const res = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fullForm),
    });

    if (res.ok) {
      alert("Enquiry submitted successfully!");
      setFName("");
      setLName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setSelectedServices([]);
      setFormData({
        inbound: {},
        destination: {},
        visa: {},
        car: {},
        flight: {},
        hotel: {},
      });
    } else {
      alert("Error submitting enquiry.");
    }
  };

  // Data for dropdowns
  const inboundTypes = [
    "Dubai city tour",
    "Evening desert safari camel/SUV",
    "Jet ski adventure",
  ];
  const countries = ["France", "USA", "China", "Spain", "Mexico", "Italy"];
  const carBrands = ["BMW", "Mercedes", "Ferrari", "Rolls Royce"];
  const carTypes = ["Sedan", "SUV", "Van", "Luxury"];
  const flightClasses = [
    "Economy",
    "Premium Economy",
    "Business",
    "First Class",
    "Private Jet",
    "Chopper",
  ];
  const starRatings = ["3 star", "4 star", "5 star", "Luxury"];

  return (
    <div className="lg:py-20 md:py-20 py-16 lg:px-40 md:px-40 px-4">
      {/* --- your entire form code as before --- */}
      {/* no change in layout or form code, only moved inside Suspense */}
    </div>
  );
}

// ✅ Wrap in Suspense for Next.js
export default function Page() {
  return (
    <Suspense fallback={<div>Loading enquiry form...</div>}>
      <EnquiryForm />
    </Suspense>
  );
}
