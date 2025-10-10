"use client";
import React, { useState, useEffect, useRef } from "react";
// import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Navbar() {
  const pathname = usePathname();
  console.log(pathname);
  const [serviceMenuStatus, setServiceMenuStatus] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const serviceRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerHeight = window.innerHeight * 0.1; // 10vh
      if (scrollY > triggerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("click", (e) => {
      if (e.target !== serviceRef.current) {
        setServiceMenuStatus(false);
      }
    });
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // const serviceActive =
  // pathname === "/services-offered" || "/inbound" || "/visa" || "/destination";

  // console.log(serviceActive);
  return (
    <>
      {/* <div className=" h-[4em] flex items-center justify-between px-12 py-4 w-screen fixed bg-white/50 backdrop-blur-sm">
        <Link href={"/"}>
          <div className="flex">
            <img src="/logo.png" alt="logo" className="w-12" />
            <p className="">
              <span className=" font-bold text-black">One Click</span>
              <br />
              Tourism Services
            </p>
          </div>
        </Link>

        <ul className="flex gap-8 font-semibold">
          <Link href={"/"}>
            <li
              className={`${
                pathname === "/" ? "text-[#0497E0]" : "text-black"
              }`}
            >
              Home
            </li>
          </Link>
          <li
            onClick={() => {
              setServiceMenuStatus(!serviceMenuStatus);
            }}
            className={`relative flex items-center cursor-pointer 
              ${
              pathname === "/services-offered" || pathname === "/inbound" || pathname === "/visa" || pathname === "/destination"
                ? "text-[#0497E0]"
                : "text-black"
            }
            `}
          >
            Services{" "}
            <img
              src="./dropdown.svg"
              className={`relative w-4 ${
                serviceMenuStatus ? "rotate-180" : ""
              } duration-300`}
            />
            {serviceMenuStatus ? (
              <>
                <div className="fixed top-16 bg-white/50 px-4 py-2 my-1 rounded-md backdrop-blur-md">
                  <ul>
                    <Link href={"/services-offered"}>
                      <li
                        className={`${
                          pathname === "/services-offered"
                            ? "text-[#0497E0]"
                            : "text-black"
                        }`}
                      >
                        Services Offered
                      </li>
                    </Link>
                    <Link href={"/inbound"}>
                      <li
                        className={`${
                          pathname === "/inbound"
                            ? "text-[#0497E0]"
                            : "text-black"
                        }`}
                      >
                        Inbound
                      </li>
                    </Link>
                    <Link href={"/visa"}>
                      <li
                        className={`${
                          pathname === "/visa" ? "text-[#0497E0]" : "text-black"
                        }`}
                      >
                        Visa
                      </li>
                    </Link>
                    <Link href={"/destination"}>
                      <li
                        className={`${
                          pathname === "/destination"
                            ? "text-[#0497E0]"
                            : "text-black"
                        }`}
                      >
                        Destination
                      </li>
                    </Link>
                  </ul>
                </div>
              </>
            ) : (
              <></>
            )}
          </li>

          <li
            className={`${
              pathname === "/destination" ? "text-[#0497E0]" : "text-black"
            }`}
          >
            Destination
          </li>

          <Link href={"/about-us"}>
            <li
              className={`${
                pathname === "/about-us" ? "text-[#0497E0]" : "text-black"
              }`}
            >
              About
            </li>
          </Link>
          <Link href={"/contact-us"}>
            <li
              className={`${
                pathname === "/contact-us" ? "text-[#0497E0]" : "text-black"
              }`}
            >
              Contact Us
            </li>
          </Link>
        </ul>
        <button className=" bg-gradient-to-r from-[#089CE0] to-[#16DBE4] text-white px-8 py-2 rounded-md font-semibold">
          Book Now
        </button>
      </div> */}

      <div
        className={` z-[1000] h-[4em] flex items-center justify-between lg:px-12 md:px-12 px-2 py-6 w-screen fixed  transition-all duration-300 ${
          scrolled ? "bg-white/50 backdrop-blur-md " : "bg-transparent"
        }`}
      >
        <Link href={"/"}>
          <div className="flex">
            {/* <img src="/logo.png" alt="logo" className="w-12" /> */}
            {/* <p className=" text-3xl font-bold"> */}
              {/* <span className=" font-bold text-black">One Click</span>
              <br />
              Tourism Services */}
              {/* Logo */}
            {/* </p> */}
            <img onClick={()=>{setOpen(false)}} src="./logoPI.png" className="w-28" />
          </div>
        </Link>

        <ul className="lg:flex gap-12 text-lg font-semibold pr-6 md:flex hidden">
          <Link href={"/"}>
            <li
              className={`${
                pathname === "/" ? "text-[#F97A1E]" : "text-black"
              }`}
            >
              Home
            </li>
          </Link>
          <li
            onClick={() => {
              setServiceMenuStatus(!serviceMenuStatus);
            }}
            ref={serviceRef}
            className={`relative flex items-center cursor-pointer 
              ${
                pathname === "/services-offered" ||
                pathname === "/inbound" ||
                pathname === "/visa" ||
                pathname === "/destination" ||
                pathname === "/flight-bookings" ||
                pathname === "/car-rentals"
                  ? "text-[#F97A1E]"
                  : "text-black"
              }
            `}
          >
            Services{" "}
            <img
              src="./dropdown.svg"
              className={`relative w-4  ${
                serviceMenuStatus ? "rotate-180" : ""
              } duration-300`}
            />
            {serviceMenuStatus ? (
              <>
                <div className="fixed top-16 bg-white/50 px-4 py-2 my-1 rounded-md backdrop-blur-md">
                  <ul>
                    <Link href={"/services-offered"}>
                      <li
                        className={`${
                          pathname === "/services-offered"
                            ? "text-[#F97A1E]"
                            : "text-black"
                        }`}
                      >
                        Services Offered
                      </li>
                    </Link>
                    <Link href={"/inbound"}>
                      <li
                        className={`${
                          pathname === "/inbound"
                            ? "text-[#F97A1E]"
                            : "text-black"
                        }`}
                      >
                        Inbound
                      </li>
                    </Link>
                    <Link href={"/visa"}>
                      <li
                        className={`${
                          pathname === "/visa" ? "text-[#F97A1E]" : "text-black"
                        }`}
                      >
                        Visa
                      </li>
                    </Link>
                    <Link href={"/destination"}>
                      <li
                        className={`${
                          pathname === "/destination"
                            ? "text-[#F97A1E]"
                            : "text-black"
                        }`}
                      >
                        Destination
                      </li>
                    </Link>
                    <Link href={"/flight-bookings"}>
                      <li
                        className={`${
                          pathname === "/flight-bookings"
                            ? "text-[#F97A1E]"
                            : "text-black"
                        }`}
                      >
                        Flight Bookings
                      </li>
                    </Link>

                    <Link href={"/car-rentals"}>
                      <li
                        className={`${
                          pathname === "/car-rentals"
                            ? "text-[#F97A1E]"
                            : "text-black"
                        }`}
                      >
                        Car Rentals
                      </li>
                    </Link>
                  </ul>
                </div>
              </>
            ) : (
              <></>
            )}
          </li>

          {/* <li
            className={`${
              pathname === "/destination" ? "text-[#F97A1E]" : "text-black"
            }`}
          >
            Destination
          </li> */}

          <Link href={"/about-us"}>
            <li
              className={` ${
                pathname === "/about-us" ? "text-[#F97A1E]" : "text-black"
              }`}
            >
              About Us
            </li>
          </Link>
          <Link href={"/contact-us"}>
            <li
              className={` ${
                pathname === "/contact-us" ? "text-[#F97A1E]" : "text-black"
              }`}
            >
              Contact Us
            </li>
          </Link>
        </ul>
        <Link href={"/enquiry"}>
          <button className=" bg-gradient-to-r bg-[#F97A1E] text-white px-8 py-2 rounded-3xl font-semibold lg:flex md:flex hidden">
            Book Now
          </button>
        </Link>
        {/* Hamburger / X Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? (
            <XMarkIcon className="h-8 w-8 text-black" />
          ) : (
            <Bars3Icon className="h-8 w-8 text-black" />
          )}
        </button>
        {/* Mobile Menu */}
        {open && (
          <div className="absolute top-16 right-4  shadow-lg p-4 rounded-md md:hidden bg-white/50 backdrop-blur-lg">
            <ul className="space-y-1">
              <li>Services</li>
              <ul className="pl-2">
                <Link href={"/services-offered"}>
                  <li
                    onClick={() => setOpen(!open)}
                    className={`${
                      pathname === "/services-offered"
                        ? "text-[#F97A1E]"
                        : "text-black"
                    }`}
                  >
                    Services Offered
                  </li>
                </Link>
                <Link href={"/inbound"}>
                  <li
                    onClick={() => setOpen(!open)}
                    className={`${
                      pathname === "/inbound" ? "text-[#F97A1E]" : "text-black"
                    }`}
                  >
                    Inbound
                  </li>
                </Link>
                <Link href={"/visa"}>
                  <li
                    onClick={() => setOpen(!open)}
                    className={`${
                      pathname === "/visa" ? "text-[#F97A1E]" : "text-black"
                    }`}
                  >
                    Visa
                  </li>
                </Link>
                <Link href={"/destination"}>
                  <li
                    onClick={() => setOpen(!open)}
                    className={`${
                      pathname === "/destination"
                        ? "text-[#F97A1E]"
                        : "text-black"
                    }`}
                  >
                    Destination
                  </li>
                </Link>
                <Link href={"/flight-bookings"}>
                  <li
                    onClick={() => setOpen(!open)}
                    className={`${
                      pathname === "/flight-bookings"
                        ? "text-[#F97A1E]"
                        : "text-black"
                    }`}
                  >
                    Flight Bookings
                  </li>
                </Link>

                <Link href={"/car-rentals"}>
                  <li
                    onClick={() => setOpen(!open)}
                    className={`${
                      pathname === "/car-rentals"
                        ? "text-[#F97A1E]"
                        : "text-black"
                    }`}
                  >
                    Car Rentals
                  </li>
                </Link>
              </ul>
              <Link href={"/about-us"}>
                <li
                  onClick={() => setOpen(!open)}
                  className={` ${
                    pathname === "/about-us" ? "text-[#F97A1E]" : "text-black"
                  }`}
                >
                  About Us
                </li>
              </Link>
              <Link href={"/contact-us"}>
                <li
                  onClick={() => setOpen(!open)}
                  className={` ${
                    pathname === "/contact-us" ? "text-[#F97A1E]" : "text-black"
                  }`}
                >
                  Contact Us
                </li>
              </Link>
            </ul>
            <Link href={"/enquiry"}>
              <button
                onClick={() => setOpen(!open)}
                className=" bg-gradient-to-r bg-[#F97A1E] text-white px-8 py-2 rounded-3xl font-semibold"
              >
                Book Now
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
