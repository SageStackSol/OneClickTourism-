"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useParams } from "next/navigation";

function EnquiryForm() {
  //  const {id}  = params;
  // console.log(id)
  const params = useParams();
  const id = params?.id;
  const searchParams = useSearchParams();
  console.log(id);

  useEffect(() => {
    const fetchInbound = async () => {
      const res = await fetch(`/api/inbound/${id}`);
      const data = await res.json();
      // setForm({
      //   name: data.name,
      //   price: data.price,
      //   tags: data.tags.join(", "),
      //   description: data.description,
      //   imageBase64: "",
      // });
      // setCurrentImage(data.image);
      console.log(data)
    };
    fetchInbound();

      const fetchDestination = async () => {
      const res = await fetch(`/api/destination/${id}`);
      const data = await res.json();
    //   setForm({
    //     name: data.name,
    //     price: data.price,
    //     tags: data.tags.join(", "),
    //     description: data.description,
    //     imageBase64: "",
    //   });
    //   setCurrentImage(data.image);
      console.log(data)
    };
    fetchDestination();
  }, [id]);

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
        <div className=" lg:col-span-6 md:col-span-6 col-span-12 ">
          <h2 className="text-[1.5em] font-semibold">Send Us a Message</h2>
          <div className="lg:flex justify-between gap-8">
            <div className="w-[100%]">
              <label className="font-semibold text-[.8em] mt-4">
                First Name
              </label>
              <br />
              <input
                onChange={(e) => {
                  setFName(e.target.value);
                }}
                value={fName}
                className="bg-[#d9d9d931] border-black border rounded-lg w-[100%] h-8"
              />
            </div>

            <div className="w-[100%]">
              <label className="font-semibold text-[.8em] mt-4">
                Last Name
              </label>
              <br />
              <input
                onChange={(e) => {
                  setLName(e.target.value);
                }}
                value={lName}
                className="bg-[#d9d9d931] border-black border rounded-lg w-[100%] h-8"
              />
            </div>
          </div>

          <p className="font-semibold text-[.8em] mt-4">Email Address</p>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            className="bg-[#d9d9d931] border-black border rounded-lg w-[100%] h-8"
          />
          <p className="font-semibold text-[.8em] mt-4">Phone Number</p>
          <input
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            value={phone}
            className="bg-[#d9d9d931] border-black border rounded-lg w-[100%] h-8"
          />

          <p className="font-semibold text-[.8em] mt-4">Message</p>
          <input
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={message}
            className=" h-12 bg-[#d9d9d931] border-black border rounded-lg w-[100%]"
          />
          <button className="flex gap-2 bg-gradient-to-r from-[#089CE0] to-[#16DBE4] text-white px-8 py-2 rounded-md font-semibold mt-4">
            <img src="./send.png" className="w-6" /> Submit Enquiry
          </button>
        </div>

        <div className="lg:col-span-6 md:col-span-6 col-span-12 ">
          <p className="font-bold mb-4">Select Services</p>

          <form className="lg:flex md:flex gap-8">
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="Services"
                  value="Inbound"
                  className="w-4 h-4"
                />
                <span>Inbound</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="Services"
                  value="Visa Assistance"
                  className="w-4 h-4"
                />
                <span>Visa Assistance</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="Services"
                  value="Flight Booking"
                  className="w-4 h-4"
                />
                <span>Flight Booking</span>
              </label>
            </div>
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="Services"
                  value="Destinations"
                  className="w-4 h-4"
                />
                <span>Destinations</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="Services"
                  value="Car Rentals"
                  className="w-4 h-4"
                />
                <span>Car Rentals</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="Services"
                  value="Hotel Booking"
                  className="w-4 h-4"
                />
                <span>Hotel Booking</span>
              </label>
            </div>
            {/* <button type="submit" class="mt-3 px-4 py-2 bg-blue-500 text-white rounded">Submit</button> */}
          </form>
        </div>
      </div>
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
