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
    flight: {},
    car: {},
    hotel: {},
  });

  // Pre-fill logic for URL params (optional)
  useEffect(() => {
    const service = searchParams.get("service");
    if (service) {
      toggleService(service);
    }
  }, [searchParams]);

  // Toggle multi-select
  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  // Handle field changes
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
        flight: {},
        car: {},
        hotel: {},
      });
    } else {
      alert("Error submitting enquiry.");
    }
  };

  // For dropdowns
  const inboundTypes = ["Adventure", "Luxury", "Family", "Culture"];
  const tripTypes = ["Leisure", "Business", "Honeymoon", "Group Trip"];
  const carTypes = ["SUV", "Sedan", "Luxury", "Van"];

  return (
    <div className="lg:py-20 md:py-20 py-16 lg:px-40 md:px-40 px-4">
      <h1 className="lg:text-[3em] md:text-[3em] text-[2em] font-bold text-center">
        Ready to Plan Your Next
      </h1>
      <h1 className="lg:text-[3em] md:text-[3em] text-[2em] font-bold text-[#FA7C28] text-center">
        Adventure?
      </h1>
      <p className="text-center lg:px-48 md:px-48 px-4">
        Our travel experts are standing by to help you create the perfect
        itinerary. Contact us today for a free consultation.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-12 mt-8 lg:gap-12 md:gap-12 gap-6">
          {/* LEFT: Basic Info */}
          <div className="lg:col-span-6 md:col-span-6 col-span-12">
            <h2 className="text-[1.5em] font-semibold">Send Us a Message</h2>

            <div className="lg:flex justify-between gap-8">
              <div className="w-full">
                <label className="font-semibold text-[.8em] mt-4">First Name</label>
                <input
                  onChange={(e) => setFName(e.target.value)}
                  value={fName}
                  className="bg-[#d9d9d931] border-black border rounded-lg w-full h-8"
                />
              </div>

              <div className="w-full">
                <label className="font-semibold text-[.8em] mt-4">Last Name</label>
                <input
                  onChange={(e) => setLName(e.target.value)}
                  value={lName}
                  className="bg-[#d9d9d931] border-black border rounded-lg w-full h-8"
                />
              </div>
            </div>

            <p className="font-semibold text-[.8em] mt-4">Email Address</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="bg-[#d9d9d931] border-black border rounded-lg w-full h-8"
            />

            <p className="font-semibold text-[.8em] mt-4">Phone Number</p>
            <input
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              className="bg-[#d9d9d931] border-black border rounded-lg w-full h-8"
            />

            <p className="font-semibold text-[.8em] mt-4">Message</p>
            <input
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              className="h-12 bg-[#d9d9d931] border-black border rounded-lg w-full"
            />

            <button
              type="submit"
              className="flex gap-2 bg-gradient-to-r from-[#089CE0] to-[#16DBE4] text-white px-8 py-2 rounded-md font-semibold mt-4"
            >
              <img src="./send.png" className="w-6" /> Submit Enquiry
            </button>
          </div>

          {/* RIGHT: Services */}
          <div className="lg:col-span-6 md:col-span-6 col-span-12">
            <p className="font-bold mb-4">Select Services</p>

            <div className="flex flex-wrap gap-4">
              {[
                "Inbound",
                "Destinations",
                "Visa Assistance",
                "Flight Booking",
                "Car Rental",
                "Hotel Booking",
              ].map((service) => (
                <label key={service} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={service}
                    disabled={selectedServices.includes("Inbound") && service === "Destinations"}
                    checked={selectedServices.includes(service)}
                    onChange={() => toggleService(service)}
                    className="w-4 h-4"
                  />
                  <span
                    className={
                      selectedServices.includes("Inbound") && service === "Destinations"
                        ? "text-gray-400 line-through"
                        : ""
                    }
                  >
                    {service}
                  </span>
                </label>
              ))}
            </div>

            {/* Conditional Questionnaires */}
            <div className="mt-6 space-y-8">
              {selectedServices.includes("Inbound") && (
                <div className="border p-4 rounded-md">
                  <h3 className="font-semibold mb-2">Inbound Details</h3>
                  <label>Type of Dubai Experience</label>
                  <select
                    onChange={(e) =>
                      handleServiceChange("inbound", "type", e.target.value)
                    }
                    className="w-full border rounded-lg mb-2"
                  >
                    <option value="">Select</option>
                    {inboundTypes.map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>

                  <label>Number of Travellers</label>
                  <input
                    type="number"
                    className="w-full border rounded-lg mb-2"
                    onChange={(e) =>
                      handleServiceChange("inbound", "travellers", e.target.value)
                    }
                  />

                  <label>Preferred Travel Dates</label>
                  <input
                    type="date"
                    className="w-full border rounded-lg mb-2"
                    onChange={(e) =>
                      handleServiceChange("inbound", "dates", e.target.value)
                    }
                  />

                  <label>Need Airport Pick-up & Drop-off?</label>
                  <select
                    className="w-full border rounded-lg"
                    onChange={(e) =>
                      handleServiceChange("inbound", "pickupDrop", e.target.value)
                    }
                  >
                    <option value="">Select</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              )}

              {selectedServices.includes("Destinations") && (
                <div className="border p-4 rounded-md">
                  <h3 className="font-semibold mb-2">Destination Details</h3>
                  <label>Preferred Destination</label>
                  <input
                    type="text"
                    className="w-full border rounded-lg mb-2"
                    onChange={(e) =>
                      handleServiceChange("destination", "preferredDestination", e.target.value)
                    }
                  />

                  <label>Expected Travel Duration</label>
                  <input
                    type="text"
                    className="w-full border rounded-lg mb-2"
                    onChange={(e) =>
                      handleServiceChange("destination", "duration", e.target.value)
                    }
                  />

                  <label>Type of Trip</label>
                  <select
                    className="w-full border rounded-lg mb-2"
                    onChange={(e) =>
                      handleServiceChange("destination", "tripType", e.target.value)
                    }
                  >
                    <option value="">Select</option>
                    {tripTypes.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>

                  <label>Need customised Itinerary?</label>
                  <select
                    className="w-full border rounded-lg"
                    onChange={(e) =>
                      handleServiceChange("destination", "customItinerary", e.target.value)
                    }
                  >
                    <option value="">Select</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              )}

              {selectedServices.includes("Visa Assistance") && (
                <div className="border p-4 rounded-md">
                  <h3 className="font-semibold mb-2">Visa Assistance Details</h3>
                  <label>Visa Country</label>
                  <input
                    type="text"
                    className="w-full border rounded-lg mb-2"
                    onChange={(e) => handleServiceChange("visa", "country", e.target.value)}
                  />

                  <label>Nationality & Current Location</label>
                  <input
                    type="text"
                    className="w-full border rounded-lg mb-2"
                    onChange={(e) =>
                      handleServiceChange("visa", "nationality", e.target.value)
                    }
                  />

                  <label>Intended Travel Date / Duration</label>
                  <input
                    type="text"
                    className="w-full border rounded-lg mb-2"
                    onChange={(e) =>
                      handleServiceChange("visa", "travelDuration", e.target.value)
                    }
                  />

                  <label>Applied before for same country?</label>
                  <select
                    className="w-full border rounded-lg"
                    onChange={(e) =>
                      handleServiceChange("visa", "appliedBefore", e.target.value)
                    }
                  >
                    <option value="">Select</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              )}

              {selectedServices.includes("Flight Booking") && (
                <div className="border p-4 rounded-md">
                  <h3 className="font-semibold mb-2">Flight Booking Details</h3>
                  <label>Departure & Arrival City</label>
                  <input
                    type="text"
                    className="w-full border rounded-lg mb-2"
                    onChange={(e) =>
                      handleServiceChange("flight", "route", e.target.value)
                    }
                  />

                  <label>Travel Dates</label>
                  <input
                    type="text"
                    className="w-full border rounded-lg mb-2"
                    onChange={(e) =>
                      handleServiceChange("flight", "dates", e.target.value)
                    }
                  />

                  <label>Number of Passengers</label>
                  <input
                    type="text"
                    className="w-full border rounded-lg mb-2"
                    onChange={(e) =>
                      handleServiceChange("flight", "passengers", e.target.value)
                    }
                  />

                  <label>Preferred Airline / Class</label>
                  <input
                    type="text"
                    className="w-full border rounded-lg"
                    onChange={(e) =>
                      handleServiceChange("flight", "airlineClass", e.target.value)
                    }
                  />
                </div>
              )}

              {selectedServices.includes("Car Rental") && (
                <div className="border p-4 rounded-md">
                  <h3 className="font-semibold mb-2">Car Rental Details</h3>
                  <label>Type of Car</label>
                  <select
                    className="w-full border rounded-lg mb-2"
                    onChange={(e) =>
                      handleServiceChange("car", "carType", e.target.value)
                    }
                  >
                    <option value="">Select</option>
                    {carTypes.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>

                  <label>Pick-up & Drop-off Dates/Locations</label>
                  <input
                    type="text"
                    className="w-full border rounded-lg mb-2"
                    onChange={(e) =>
                      handleServiceChange("car", "pickupDropoff", e.target.value)
                    }
                  />

                  <label>Driving Option</label>
                  <select
                    className="w-full border rounded-lg mb-2"
                    onChange={(e) =>
                      handleServiceChange("car", "drivingOption", e.target.value)
                    }
                  >
                    <option value="">Select</option>
                    <option>Chauffeur Driven</option>
                    <option>Self Drive</option>
                  </select>

                  <label>Special Requirements</label>
                  <input
                    type="text"
                    className="w-full border rounded-lg"
                    onChange={(e) =>
                      handleServiceChange("car", "requirements", e.target.value)
                    }
                  />
                </div>
              )}

              {selectedServices.includes("Hotel Booking") && (
                <div className="border p-4 rounded-md">
                  <h3 className="font-semibold mb-2">Hotel Booking Details</h3>
                  <label>Preferred City / Area</label>
                  <input
                    type="text"
                    className="w-full border rounded-lg mb-2"
                    onChange={(e) =>
                      handleServiceChange("hotel", "city", e.target.value)
                    }
                  />

                  <label>Check-in & Check-out Dates</label>
                  <input
                    type="text"
                    className="w-full border rounded-lg mb-2"
                    onChange={(e) =>
                      handleServiceChange("hotel", "dates", e.target.value)
                    }
                  />

                  <label>Guests (Adults & Children)</label>
                  <input
                    type="text"
                    className="w-full border rounded-lg mb-2"
                    onChange={(e) =>
                      handleServiceChange("hotel", "guests", e.target.value)
                    }
                  />

                  <label>Hotel Category / Budget</label>
                  <input
                    type="text"
                    className="w-full border rounded-lg"
                    onChange={(e) =>
                      handleServiceChange("hotel", "budget", e.target.value)
                    }
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading enquiry form...</div>}>
      <EnquiryForm />
    </Suspense>
  );
}
