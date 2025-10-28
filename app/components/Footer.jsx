"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"], // choose what you need
  variable: "--font-poppins",
});
function Footer() {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("");
  // console.log(Poppins)

  const handleSubmit = async () => {
    if (!input.trim()) {
      setStatus("Please enter a valid email or phone number.");
      return;
    }

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Submitted successfully!");
        setInput("");
      } else {
        setStatus(data.error || "Something went wrong.");
      }
    } catch (error) {
      setStatus("Error sending email.");
    }
  };

  return (
    <>
      <div className="bg-[#7B7B78] lg:px-20 lg:py-8 md:px-20 md:py-8 px-4 py-4">
        {/* Heading */}
        <h2 className="text-5xl font-bold mb-4 lg:text-left md:text-left text-center text-white">
          Get in Touch
        </h2>

        {/* Input + Button Row */}
        <div className="flex lg:flex-row md:flex-row flex-col items-center gap-2 mb-4">
          <input
            placeholder="Email or Mobile Number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-[#D9D9D9] lg:w-[32vw] md:w-[32vw] w-full h-10 rounded-md focus:outline-none px-3"
          />
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-gradient-to-r from-[#FFA203] to-[#FDE8BF] text-black font-semibold rounded-full lg:w-fit md:w-fit w-full"
          >
            Submit
          </button>
        </div>

        {status && (
          <p className="text-white mb-4 text-sm text-center lg:text-left md:text-left">
            {status}
          </p>
        )}

        <hr className="my-4" />

        <div className="grid grid-cols-12 lg:gap-12 md:gap-12">
          {/* Map */}
          <div className="lg:col-span-5 md:col-span-5 col-span-12 bg-[#D9D9D9] h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3630.852798211513!2d54.37021637535896!3d24.490556678172627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDI5JzI2LjAiTiA1NMKwMjInMjIuMSJF!5e0!3m2!1sen!2sin!4v1760355530234!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Links */}
          <div className="lg:col-span-7 md:col-span-7 col-span-12 grid grid-cols-12">
            <div className="col-span-6">
              <h3 className="font-semibold text-[1.2em] mb-2 text-[#F97A1E]">
                Quick Links
              </h3>
              <ul>
                <Link href={"/about-us"}>
                  <li className="mb-1 text-white">About Us</li>
                </Link>
                <Link href={"/services-offered"}>
                  <li className="mb-1 text-white">Services</li>
                </Link>
                <Link href={"/contact-us"}>
                  <li className="mb-1 text-white">Contact Us</li>
                </Link>
              </ul>
            </div>

            <div className="col-span-6">
              <h3 className="font-semibold text-[1.2em] mb-2 text-[#F97A1E]">
                Our Services
              </h3>
              <ul>
                <Link href={"/inbound"}>
                  <li className="mb-1 text-white">Inbound</li>
                </Link>
                <Link href={"/destination"}>
                  <li className="mb-1 text-white">Destinations</li>
                </Link>
                <Link href={"/flight-bookings"}>
                  <li className="mb-1 text-white">Flight Booking</li>
                </Link>
                <Link href={"/visa"}>
                  <li className="mb-1 text-white">Visa</li>
                </Link>
                <Link href={"/hotel-bookings"}>
                  <li className="mb-1 text-white">Hotel Booking</li>
                </Link>
                <Link href={"/car-rentals"}>
                  <li className="mb-1 text-white">Car Rentals</li>
                </Link>
              </ul>
            </div>

            <div className="col-span-12 flex flex-col my-4">
              <h3 className="font-semibold text-[1.2em] mb-2 text-[#F97A1E]">
                Contact Info
              </h3>
              <p className="text-white">
                <span className="font-extrabold">Email: </span>
                info@pacificinternationalservices.com
              </p>
              <p className="text-white">
                Address: 1603,16th Floor, Tower, Likhnaysir Street, Al Danah,
                Abu Dhabi
              </p>
              <p className="text-white">Phone: <span className={`${poppins.className} text-sm font-thin`}>+971564676342 </span> </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
