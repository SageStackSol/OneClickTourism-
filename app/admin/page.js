"use client"
import React, { useState } from "react";
import Link from "next/link";

function Page() {
  const [login, setLogin] = useState(false);
    const [destinationType, setDestinationType] = useState("inbound");
  
  return (
    <>
    {/* login false */}
      {/* <div className="h-screen w-screen flex justify-center items-center">
        <div className=" border rounded p-10">
            <h1 className="text-center text-lg font-bold mb-4">Admin Login</h1>
            <input className=" border my-2 px-2 py-1" placeholder="Name"/><br />
            <input className=" border my-2 px-2 py-1" placeholder="password"/><br/>
            <button className="bg-[#F97A1E] text-white px-4 py-1 w-full my-2 rounded">Submit</button>
        </div>
      </div> */}
      {/* login true  */}
      <div className="py-12">
 <div className="lg:flex md:flex block justify-evenly w-screen my-12">
          <button
            onClick={() => setDestinationType("inbound")}
            className={`lg:w-[16vw] md:w-[16vw] w-[100%] text-[1.2em] font-bold ${
              destinationType === "inbound"
                ? "bg-[#F97A1E] text-white"
                : "bg-white text-[#2D464C]"
            } px-8 py-2 rounded-lg my-2 mx-auto shadow-lg shadow-gray-400`}
          >
            Inbound
          </button>
          <button
            onClick={() => setDestinationType("destinations")}
            className={`lg:w-[16vw] md:w-[16vw] w-[100%] text-[1.2em] font-bold ${
              destinationType === "destinations"
                ? "bg-[#F97A1E] text-white"
                : "bg-white text-[#2D464C]"
            } px-8 py-2 rounded-lg my-2 mx-auto shadow-lg shadow-gray-400`}
          >
            Destinations
          </button>
        </div>
        {destinationType === "inbound" ? (
            <div className="grid grid-cols-12 my-20 items-center">
          
              <div className="lg:col-span-4 md:col-span-4 col-span-12">
                <p>
                  We provide reliable inbound services to handle customer
                  inquiries, support requests, and order management with care
                  and efficiency. Our customer-first approach ensures timely
                  responses, smooth experiences, and stronger brand loyalty.
                </p>
                <Link href="/inbound">
                  <button className="bg-[#F97A1E] text-[1.2em] font-bold text-white px-8 py-2 rounded-3xl my-2 mx-auto">
                    Explore More
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-12 my-20 items-center">
             
              <div className="lg:col-span-4 md:col-span-4 col-span-12">
                <p>
                  We offer reliable customer support services for international
                  tours, managing inquiries, bookings, and travel assistance
                  with care and efficiency. Our customer-first approach ensures
                  timely responses, smooth experiences, and lasting traveler
                  loyalty.
                </p>
                <Link href="/destinations">
                  <button className="bg-[#F97A1E] text-[1.2em] font-bold text-white px-8 py-2 rounded-3xl my-2 mx-auto">
                    Explore More
                  </button>
                </Link>
              </div>
            </div>
          )}
      </div>
    </>
  );
}

export default Page;
