import React from "react";

function page() {
  return (
    <>
      <div className="px-40 grid grid-cols-12 items-center min-h-screen gap-4">
        <div className="col-span-6 ">
          <h1 className="text-5xl font-extrabold leading-normal">
            Your Trusted Partner in{" "}
            <span className="text-[#0497E0]">Creating Memories</span>
          </h1>

          <p className="text-sm my-10">
            For over 15 years, One Click Tourism Services has been dedicated to
            transforming travel dreams into reality. We believe that every
            journey should be extraordinary, and every traveler deserves
            personalized attention and care.
          </p>
          <p className="text-sm my-10">
            Our team of passionate travel experts works tirelessly to curate
            unique experiences, negotiate exclusive deals, and provide
            unparalleled support throughout your journey. From spontaneous
            getaways to elaborate luxury expeditions, we handle every detail
            with precision and care.
          </p>
          <div className="flex justify-between">
            <button className=" bg-gradient-to-r from-[#089CE0] to-[#16DBE4] text-white px-8 py-2 rounded-md">
              Start Planning your trip
            </button>
            <button className="border border-black px-8 py-2 rounded-md">
              Read Our Story
            </button>
          </div>
        </div>
        <div className="col-span-6 grid grid-cols-12 gap-4">
          <div className="col-span-6 border border-[#827F7F] h-40 rounded-xl bg-[#827f7f27] flex flex-col justify-center items-center text-xl">
            <b>15+</b>
            <p>Years Experience</p>
          </div>
          <div className="col-span-6 border border-[#827F7F] h-40 rounded-xl bg-[#827f7f27] flex flex-col justify-center items-center text-xl">
            <b>500+</b>
            <p>Destinations</p>
          </div>
          <div className="col-span-6 border border-[#827F7F] h-40 rounded-xl bg-[#827f7f27] flex flex-col justify-center items-center text-xl">
            <b>10K+</b>
            <p>Happy Travelers</p>
          </div>
          <div className="col-span-6 border border-[#827F7F] h-40 rounded-xl bg-[#827f7f27] flex flex-col justify-center items-center text-xl">
            <b>50+</b>
            <p>Travel Awards</p>
          </div>
          <div className="col-span-12 bg-gradient-to-t from-[#56B5EC] to-[#FFFFFF]  border border-[#61BAED] rounded-xl text-white px-4 py-6">
            <h4 className="text-xl font-extrabold">Our Mission</h4>
            <p className="text-sm font-light">
              "To make travel accessible, enjoyable, and meaningful for
              everyone. We strive to create connections between people, places,
              and cultures while ensuring every journey is safe, comfortable,
              and unforgettable."
            </p>
            <p className="text-sm font-extrabold my-2">
              - One click Tourism Services
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
