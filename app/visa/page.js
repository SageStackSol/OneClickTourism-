import React from "react";

function page() {
  const info = [
    {
      image: "./flight(30).png",
      duration: "30 Days Visit Visa",
      price: 339,
    },
    {
      image: "./giantwheel.png",
      duration: "90 Days Visit Visa",
      price: 739,
    },
    {
      image: "./flightMonth.png",
      duration: "1 month inside country visa",
      price: 949,
    },
    {
      image: "./packed.png",
      duration: "3 month inside country visa",
      price: 1249,
    },
  ];
  return (
    <>
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
          <div className="lg:col-span-4 md:col-span-4 col-span-12 bg-[#BEACA2] flex flex-col justify-between items-center h-56 rounded-3xl px-8 py-4 text-xl">
            <p className="font-black ">15 Days Visa</p>
            <p className="text-center">
              Perfect for a short getaway or business trip.
            </p>
            <button className="bg-black text-white font-bold px-6 py-2 rounded-full">
              Book Now
            </button>
          </div>

          <div className="lg:col-span-4 md:col-span-4 col-span-12 bg-[#FEF9B7] flex flex-col justify-between items-center h-56 rounded-3xl px-8 py-4 text-xl">
            <p className="font-black ">30 Days Visa</p>
            <p className="text-center">
              Ideal for vacations, family visits, or extended business trips.
            </p>
            <button className="bg-black text-white font-bold px-6 py-2 rounded-full">
              Book Now
            </button>
          </div>

          <div className="lg:col-span-4 md:col-span-4 col-span-12 bg-[#CDF1E3] flex flex-col justify-between items-center h-56 rounded-3xl px-8 py-4 text-xl">
            <p className="font-black ">60 Days Visa</p>
            <p className="text-center">
              Best for long visits, work projects, or extended holidays.
            </p>
            <button className="bg-black text-white font-bold px-6 py-2 rounded-full">
              Book Now
            </button>
          </div>
        </div>
        {/* {
            info.map((item,index)=>{
              return  <div key={index} className='flex w-[100%] justify-between items-center text-lg font-bold border border-[#827F7F] rounded-xl pr-16 bg-[#827f7f1b] my-6'>
    <img className=' rounded-l-xl w-[30%] h-48' src={item.image}/>
    <p>{item.duration}</p>
    <div className='text-center'>
        <p>AED {item.price}*</p>
         <p>Book Now!!!</p>

    </div>

</div>
            })
        } */}
      </div>
    </>
  );
}

export default page;
