"use client"
import React from "react";
// import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Navbar() {
  const pathname = usePathname();
  console.log(pathname)
  return (
    <>
      <div className=" h-[4em] flex items-center justify-between px-12 py-4 w-screen fixed bg-white">
          <Link href={'/'}>
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
          <Link href={'/'}>
<li className={`${pathname==='/'? "text-[#0497E0]":"text-black"}`}>Home</li>
          
          </Link>
<li className={`${pathname==='/services'? "text-[#0497E0]":"text-black"}`}>Services</li>
<li className={`${pathname==='/destination'? "text-[#0497E0]":"text-black"}`}>Destination</li>
<li className={`${pathname==='/about'? "text-[#0497E0]":"text-black"}`}>About</li>
<Link href={'/contact-us'}>
<li className={`${pathname==='/contact-us'? "text-[#0497E0]":"text-black"}`}>Contact Us</li>


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
