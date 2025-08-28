"use client";
import React, { useState } from "react";
// import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Navbar() {
  const pathname = usePathname();
  console.log(pathname);
  const [serviceMenuStatus, setServiceMenuStatus] = useState(false);
  // const serviceActive =
    // pathname === "/services-offered" || "/inbound" || "/visa" || "/destination";

  // console.log(serviceActive);
  return (
    <>
      <div className=" h-[4em] flex items-center justify-between px-12 py-4 w-screen fixed bg-white/50 backdrop-blur-sm">
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
              pathname === "/services"
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

          {/* <li
            className={`${
              pathname === "/destination" ? "text-[#0497E0]" : "text-black"
            }`}
          >
            Destination
          </li> */}

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
      </div>
    </>
  );
}

export default Navbar;
