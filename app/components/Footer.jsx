import React from "react";

function Footer() {
  return (
    <>
      <div className=" bg-[#0497E0] text-white">
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
                <li className="mb-1">About Us</li>
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
      </div>
    </>
  );
}

export default Footer;
