import React from "react";

function page() {
  return (
    <>
      <div className="px-40 py-20">
        <h1 className="text-5xl font-extrabold leading-normal text-center">
          Everything You Need for the <br />
          <span className="text-[#0497E0]">Perfect Journey</span>
        </h1>
        <p className="text-center text-base px-44 my-4">
          From planning to execution, we handle every detail of your trip so you
          can focus on creating memories.
        </p>

        <div className=" grid grid-cols-12 gap-6">
          <div className="col-span-6 border border-[#827F7F] px-6 py-3 rounded-xl bg-[#827f7f27] text-base">
            <b>Flight Booking</b>
            <p className="my-3">
              Find the best deals on flights worldwide with our exclusive
              partnerships and real-time pricing.
            </p>
            <ul className=" list-disc pl-4 ">
              <li>Best Price Guarantee</li>
              <li>24/7 Support</li>
              <li>Flexible Booking</li>
            </ul>
          </div>
          <div className="col-span-6 border border-[#827F7F] px-6 py-3 rounded-xl bg-[#827f7f27] text-base">
            <b>Hotel Reservations</b>
            <p className="my-3">
              From luxury resorts to cozy boutique hotels, we have
              accommodations for every budget and style.
            </p>
            <ul className=" list-disc pl-4 ">
              <li>Verified Reviews</li>
              <li>Instant Confirmation</li>
              <li>Special Rates</li>
            </ul>
          </div>
          <div className="col-span-6 border border-[#827F7F] px-6 py-3 rounded-xl bg-[#827f7f27] text-base">
            <b>Travel Insurance</b>
            <p className="my-3">
              Travel with peace of mind with comprehensive coverage for medical, trip, and baggage protection.
            </p>
            <ul className=" list-disc pl-4 ">
              <li>Medical Coverage</li>
              <li>Trip Protection</li>
              <li>Emergency Support</li>
            </ul>
          </div>
               <div className="col-span-6 border border-[#827F7F] px-6 py-3 rounded-xl bg-[#827f7f27] text-base">
            <b>Trip Planning</b>
            <p className="my-3">
             Personalized itineraries created by travel experts based on your preferences and interests.
            </p>
            <ul className=" list-disc pl-4 ">
              <li>Custom Itineraries</li>
              <li>Local Insights</li>
              <li>Budget Planning</li>
            </ul>
          </div>
       
           <div className="col-span-12 bg-gradient-to-r from-[#089CE0] to-[#16DBE4] text-white text-center py-12 rounded-lg border border-[#827F7F]">
        <h1 className="text-[3em] font-bold m-0">Ready to Start Your Adventure?</h1>
        <p className="mb-2">
         Let our travel experts create a personalized itinerary that matches your dreams and budget.
        </p>
      
        <button className="bg-[#FA7C28] px-4 py-2 rounded-lg mx-auto flex items-center ">
          <img src="./query_builder.png" className="w-8"/> <span>Get Free Consultation</span>
        </button>
      </div>
        </div>
      </div>
    </>
  );
}

export default page;
