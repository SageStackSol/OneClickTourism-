"use client";
import React from "react";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();

  const handleBookNow = (days) => {
    router.push(`/enquiry?service=visa&days=${days}`);
  };

  return (
    <div className="lg:py-20 md:py-20 py-16 lg:px-40 md:px-40 px-4 text-[#2D464C] ">
      <h1 className="lg:text-5xl md:text-5xl text-3xl font-extrabold leading-normal text-center">
        Everything You Need for the <br />
        <span className="text-[#F97A1E]">Perfect Journey</span>
      </h1>
      <p className="text-center text-base lg:px-44 md:px-40 my-4">
        From planning to execution, we handle every detail of your trip so you
        can focus on creating memories.
      </p>

      <div className="grid grid-cols-12 gap-4 text-black mt-8">
        {/* 15 Days Visa */}
        <div className="lg:col-span-4 md:col-span-4 col-span-12 bg-[#BEACA2] flex flex-col justify-between items-center h-56 rounded-3xl px-8 py-4 text-xl">
          <p className="font-black ">15 Days Visa</p>
          <p className="text-center">
            Perfect for a short getaway or business trip.
          </p>
          <button
            onClick={() => handleBookNow(15)}
            className="bg-black text-white font-bold px-6 py-2 rounded-full"
          >
            Book Now
          </button>
        </div>

        {/* 30 Days Visa */}
        <div className="lg:col-span-4 md:col-span-4 col-span-12 bg-[#FEF9B7] flex flex-col justify-between items-center h-56 rounded-3xl px-8 py-4 text-xl">
          <p className="font-black ">30 Days Visa</p>
          <p className="text-center">
            Ideal for vacations, family visits, or extended business trips.
          </p>
          <button
            onClick={() => handleBookNow(30)}
            className="bg-black text-white font-bold px-6 py-2 rounded-full"
          >
            Book Now
          </button>
        </div>

        {/* 60 Days Visa */}
        <div className="lg:col-span-4 md:col-span-4 col-span-12 bg-[#CDF1E3] flex flex-col justify-between items-center h-56 rounded-3xl px-8 py-4 text-xl">
          <p className="font-black ">60 Days Visa</p>
          <p className="text-center">
            Best for long visits, work projects, or extended holidays.
          </p>
          <button
            onClick={() => handleBookNow(60)}
            className="bg-black text-white font-bold px-6 py-2 rounded-full"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
