import React from "react";

function page() {
  return (
    <div className="grid grid-cols-12 gap-6 lg:py-20 md:py-20 py-16 lg:px-40 md:px-40 px-4 ">
      <h1 className="text-[#2D464C] lg:text-7xl md:text-7xl text-3xl font-black leading-none text-center lg:mb-4 md:mb-4 col-span-12">
        Flights
      </h1>
      <div className="lg:col-span-4 md:col-span-4 col-span-12">
        <div className="p-4 bg-[#D9D9D9] rounded-3xl">
          <img src="./economy.png" className="w-full" />
        </div>
        <div className="bg-[#E05429] text-white text-center font-bold rounded-3xl p-2 border-t-2 border-black border-dashed">
          <p className="text-lg my-2">Economy</p>
          <button className="bg-black px-6 py-2 rounded-xl">Book Now</button>
        </div>
      </div>

      <div className="lg:col-span-4 md:col-span-4 col-span-12">
        <div className="p-4 bg-[#D9D9D9] rounded-3xl">
          <img src="./business-class.png" className="w-full" />
        </div>
        <div className="bg-[#E05429] text-white text-center font-bold rounded-3xl p-2 border-t-2 border-black border-dashed">
          <p className="text-lg my-2">Business Class</p>
          <button className="bg-black px-6 py-2 rounded-xl">Book Now</button>
        </div>
      </div>

        <div className="lg:col-span-4 md:col-span-4 col-span-12">
        <div className="p-4 bg-[#D9D9D9] rounded-3xl">
          <img src="./business-class.png" className="w-full" />
        </div>
        <div className="bg-[#E05429] text-white text-center font-bold rounded-3xl p-2 border-t-2 border-black border-dashed">
          <p className="text-lg my-2">Business Class</p>
          <button className="bg-black px-6 py-2 rounded-xl">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default page;
