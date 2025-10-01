import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <>
      {/* <div className=" bg-[#0497E0] text-white">
        <div className="grid grid-cols-12 p-8">
          <div className="col-span-3">
            <div className="flex">
              <img src="/logo.png" alt="logo" className="w-12" />
              <p className="text-black">
                <span className=" font-bold ">One Click</span>
                <br />
                Tourism Services
              </p>
            </div>
            <p className="mt-4">
              Your trusted partner in creating unforgettable travel experiences.
              Discover the world with confidence and comfort.
            </p>
          </div>
          <div className="col-span-3 flex flex-col items-center ">
            <div>
              <h3 className="font-semibold text-[1.2em] mb-2">Quick Links</h3>
              <ul>
                <li className="mb-1 text-white">About Us</li>
                <li className="mb-1">Services</li>
                <li className="mb-1">Destinations</li>
                <li className="mb-1">Contact</li>
              </ul>
            </div>
          </div>
          <div className="col-span-3 flex flex-col items-center">
            <div>
              <h3 className="font-semibold text-[1.2em] mb-2">Our Services</h3>
              <ul>
                <li className="mb-1">Flight Bookings</li>
                <li className="mb-1">Hotel reservations</li>
                <li className="mb-1">Car Rentals</li>
                <li className="mb-1">Tour Packages</li>
              </ul>
            </div>
          </div>
          <div className="col-span-3 flex flex-col items-center">
            <div>
              <h3 className="font-semibold text-[1.2em] mb-2">Contact Info</h3>
              <ul>
                <li className="mb-1">
                  123 Travel Street, Tourism City, TC 12345
                </li>
                <li className="mb-1">+1 (555) 123-4567</li>
                <li className="mb-1">info@oneclicktourismservices.com</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-white w-screen" />
        <div className="p-8 flex justify-between">
          <p>© 2024 One Click Tourism Services. All rights reserved.</p>
          <div className="flex gap-8">
            <p>Privacy Policy</p>
            <p>Terms of service</p>
            <p>Cookie Policy</p>
          </div>
        </div>
      </div> */}
      <div className="bg-[#7B7B78] lg:px-20 lg:py-10 md:lg-20 md:py-10 px-4 py-2">
        <h2 className="text-5xl font-bold leading-normal mb-8 lg:text-left md:text-left text-center">Get in Touch</h2>
        <input className="bg-[#D9D9D9] lg:w-[32vw] md:w-[32vw] w-full h-9 rounded-md focus:outline-none mr-8" />
        <button className="px-8 py-2 bg-gradient-to-r from-[#FFA203] to-[#FDE8BF] mx-auto w-full lg:my-0 md:my-0 my-2 rounded-full">
          Submit
        </button>
        <hr className="my-4" />
        <div className="grid grid-cols-12 gap-12">
          <div className="lg:col-span-5 md:col-span-5 col-span-12 bg-[#D9D9D9] h-full"></div>
          <div className="col-span-7 grid grid-cols-12">
            <div className="col-span-6 flex flex-col  ">
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

                <li className="mb-1 text-white">Destinations</li>
                    <Link href={"/contact-us"}>

                <li className="mb-1 text-white">Contact Us</li></Link>
              </ul>
            </div>
            <div className="col-span-6 flex flex-col  ">
              <h3 className="font-semibold text-[1.2em] mb-2 text-[#F97A1E]">
                Our Services
              </h3>
              <ul>
                <li className="mb-1 text-white">Flight Booking</li>
                <li className="mb-1 text-white">Hotel Booking</li>
                <li className="mb-1 text-white">Car Rentals</li>
                <li className="mb-1 text-white">Tour Packages</li>
              </ul>
            </div>
            <div className="col-span-12 flex flex-col my-4 ">
              <h3 className="font-semibold text-[1.2em] mb-2 text-[#F97A1E]">
                Contact Info
              </h3>
              <p className="text-white"><span className="font-extrabold">Email:  </span>pacificinternationaltourism@gmail.com</p>
              <p className="text-white">Address:</p>
              <p className="text-white">Phone:</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

// bg-gradient-to-r from-amber-200 to-yellow-500
