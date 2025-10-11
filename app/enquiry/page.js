"use client";
import React, { useState } from "react";

function Page() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

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

      <div className="grid grid-cols-12 mt-8 lg:gap-12 md:gap-12 gap-6">
        {/* LEFT SIDE FORM */}
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <h2 className="text-[1.5em] font-semibold">Send Us a Message</h2>
          <div className="lg:flex justify-between gap-8">
            <div className="w-[100%]">
              <label className="font-semibold text-[.8em] mt-4">First Name</label>
              <input
                onChange={(e) => setFName(e.target.value)}
                value={fName}
                className="bg-[#d9d9d931] border-black border rounded-lg w-full h-8"
              />
            </div>

            <div className="w-[100%]">
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

          <button className="flex gap-2 bg-gradient-to-r from-[#089CE0] to-[#16DBE4] text-white px-8 py-2 rounded-md font-semibold mt-4">
            <img src="./send.png" className="w-6" alt="send" /> Submit Enquiry
          </button>
        </div>

        {/* RIGHT SIDE SERVICES */}
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <p className="font-bold mb-4">Select Services</p>

          <div className="lg:flex md:flex gap-8">
            <div>
              {["Inbound", "Visa Assistance", "Flight Booking"].map((service) => (
                <label key={service} className="flex items-center space-x-2 mb-2">
                  <input
                    type="checkbox"
                    checked={selectedServices.includes(service)}
                    onChange={() => toggleService(service)}
                    className="w-4 h-4"
                  />
                  <span>{service}</span>
                </label>
              ))}
            </div>
            <div>
              {["Destinations", "Car Rentals", "Hotel Booking"].map((service) => (
                <label key={service} className="flex items-center space-x-2 mb-2">
                  <input
                    type="checkbox"
                    checked={selectedServices.includes(service)}
                    onChange={() => toggleService(service)}
                    className="w-4 h-4"
                  />
                  <span>{service}</span>
                </label>
              ))}
            </div>
          </div>

          {/* CONDITIONAL FIELDS */}
          <div className="mt-6 space-y-6">
            {selectedServices.includes("Inbound") && (
              <div>
                <h3 className="font-semibold mb-2">Inbound Details</h3>
                <select className="border rounded w-full h-8 mb-2">
                  <option value="">Inbound Type</option>
                  {inboundTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
                <input
                  type="number"
                  placeholder="Travel Duration (Days)"
                  className="border rounded w-full h-8 mb-2"
                />
                <input
                  type="number"
                  placeholder="Number of People"
                  className="border rounded w-full h-8"
                />
              </div>
            )}

            {selectedServices.includes("Destinations") && (
              <div>
                <h3 className="font-semibold mb-2">Destination Details</h3>
                <select className="border rounded w-full h-8 mb-2">
                  <option value="">Country</option>
                  {countries.map((country) => (
                    <option key={country}>{country}</option>
                  ))}
                </select>
                <input
                  type="number"
                  placeholder="Travel Duration (Days)"
                  className="border rounded w-full h-8 mb-2"
                />
                <input
                  type="number"
                  placeholder="Number of People"
                  className="border rounded w-full h-8"
                />
              </div>
            )}

            {selectedServices.includes("Visa Assistance") && (
              <div>
                <h3 className="font-semibold mb-2">Visa Assistance</h3>
                <input
                  type="number"
                  placeholder="Days Valid"
                  className="border rounded w-full h-8 mb-2"
                />
                <select className="border rounded w-full h-8">
                  <option value="">Destination Country</option>
                  {countries.map((country) => (
                    <option key={country}>{country}</option>
                  ))}
                </select>
              </div>
            )}

            {selectedServices.includes("Car Rentals") && (
              <div>
                <h3 className="font-semibold mb-2">Car Rentals</h3>
                <select className="border rounded w-full h-8 mb-2">
                  <option value="">Car Brand</option>
                  {carBrands.map((brand) => (
                    <option key={brand}>{brand}</option>
                  ))}
                </select>
                <select className="border rounded w-full h-8">
                  <option value="">Car Type</option>
                  {carTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </div>
            )}

            {selectedServices.includes("Flight Booking") && (
              <div>
                <h3 className="font-semibold mb-2">Flight Booking</h3>
                <select className="border rounded w-full h-8 mb-2">
                  <option value="">Class Type</option>
                  {flightClasses.map((cls) => (
                    <option key={cls}>{cls}</option>
                  ))}
                </select>
                <select className="border rounded w-full h-8">
                  <option value="">Departure City</option>
                  {countries.map((city) => (
                    <option key={city}>{city}</option>
                  ))}
                </select>
              </div>
            )}

            {selectedServices.includes("Hotel Booking") && (
              <div>
                <h3 className="font-semibold mb-2">Hotel Booking</h3>
                <select className="border rounded w-full h-8">
                  <option value="">Star Rating</option>
                  {starRatings.map((star) => (
                    <option key={star}>{star}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
