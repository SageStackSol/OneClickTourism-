"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin-ext"], // no latin
  weight: ["400"],
  variable: "--font-poppins",
});

function Footer() {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("");

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
    <div
      className={`${poppins.className} bg-[#7B7B78] lg:px-20 lg:py-8 md:px-20 md:py-8 px-4 py-4 font-normal`}
    >
      {/* Heading */}
      <h2 className="text-5xl font-normal mb-4 lg:text-left md:text-left text-center text-white">
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
          className="px-6 py-2 bg-gradient-to-r from-[#FFA203] to-[#FDE8BF] text-black font-normal rounded-full lg:w-fit md:w-fit w-full"
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
          {/* Quick Links */}
          <div className="col-span-6">
            <h3 className="font-normal text-[1.2em] mb-2 text-[#F97A1E]">
              Quick Links
            </h3>
            <ul className="space-y-1">
              <li>
                <Link href="/about-us" className="text-white hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services-offered" className="text-white hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-white hover:underline">
                  Contact Us
                </Link>
              </li>
              <li className="text-white text-sm opacity-80">
                Phone : +971 56 783 6979
              </li>
              <li className="text-white text-sm opacity-80">
                Landline : +971-26266038
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="col-span-6">
            <h3 className="font-normal text-[1.2em] mb-2 text-[#F97A1E]">
              Our Services
            </h3>
            <ul className="space-y-1">
              <li>
                <Link href="/inbound" className="text-white hover:underline">
                  Inbound
                </Link>
              </li>
              <li>
                <Link href="/destination" className="text-white hover:underline">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/flight-bookings" className="text-white hover:underline">
                  Flight Booking
                </Link>
              </li>
              <li>
                <Link href="/visa" className="text-white hover:underline">
                  Visa
                </Link>
              </li>
              <li>
                <Link href="/hotel-bookings" className="text-white hover:underline">
                  Hotel Booking
                </Link>
              </li>
              <li>
                <Link href="/car-rentals" className="text-white hover:underline">
                  Car Rentals
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-12 flex flex-col my-4">
            <h3 className="font-normal text-[1.2em] mb-2 text-[#F97A1E]">
              Contact Info
            </h3>
            <p className="text-white text-sm">
              Email: info@pacificinternationalservices.com
            </p>
            <p className="text-white text-sm">
              Address: 1603, 16th Floor, Tower C, ADCP Tower, Behind City Season
              Hotel Likhnaysir Street, Al Danah, Abu Dhabi
            </p>
            <p className="text-white text-sm">
              Phone: +971-26266038
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
