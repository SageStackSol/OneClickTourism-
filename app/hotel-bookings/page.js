"use client";
import React, { useState } from "react";

function Page() {
  const [hotels, setHotels] = useState([
    { name: "hotel1", img: "/hotelWWD.jpg" },
    { name: "hotel2", img: "/hotelWWD.jpg" },
    { name: "hotel3", img: "/hotelWWD.jpg" },
    { name: "hotel4", img: "/hotelWWD.jpg" },
    { name: "hotel5", img: "/hotelWWD.jpg" },
  ]);
  //   setHotels([
  //     { name: "hotel1", img: "/hotelWWD.jpg" },
  //     { name: "hotel2", img: "/hotelWWD.jpg" },
  //     { name: "hotel3", img: "/hotelWWD.jpg" },
  //     { name: "hotel4", img: "/hotelWWD.jpg" },
  //     { name: "hotel5", img: "/hotelWWD.jpg" },
  //   ]);
  return (
    <>
      <div className="grid grid-cols-12 lg:gap-6 md:gap-2 gap-2 lg:py-20 md:py-20 py-16 lg:px-40 md:px-12 px-4 ">
        <h1 className="text-[#2D464C] lg:text-7xl md:text-7xl text-3xl font-black leading-none text-center lg:mb-4 md:mb-4 col-span-12">
          Hotels
        </h1>
        {hotels.length > 0 &&
          hotels.map((item, index) => {
           return <div key={index} className="bg-white shadow-lg border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center  lg:col-span-4 md:col-span-4 col-span-12">
              <img src={item.img} className="rounded-lg h-44" />
              <p className=" my-2 text-xl font-bold">{item.name}</p>
              <button className="cursor-pointer bg-[#2D464C] text-white px-8 py-2 rounded-sm">
                Book Now
              </button>
            </div>;
          })}
      </div>
    </>
  );
}

export default Page;
