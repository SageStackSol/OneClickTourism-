import React from "react";
import Link from "next/link";

function page() {
  return (
    <>
      {/* <div className="px-40 grid grid-cols-12 items-center min-h-screen gap-4">
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
      </div> */}
      {/* aboutUs Hero */}
      <div className=" bg-[url('/aboutUsHeroCrop.png')] bg-cover bg-center h-screen py-44 px-10">
        <h1 className="text-7xl font-black leading-none text-white mb-4">
          Not just a Journey, but a Story
        </h1>
        <p className="text-xl text-white">
          Experience the rush of the desert, the beauty of the sea, and the
          magic of a city that never sleeps.
        </p>
      </div>
      {/* about us  */}
      <div className="bg-[#C7B5A2] py-20 px-10">
        <div className="flex flex-row-reverse w-[100%] items-center gap-2">
          <hr className="w-[60%] border-[#F97A1E] border-[.1em]" />
          <div className="w-3 h-3 bg-black rounded-full"></div>
        </div>
        <p className="text-xl mt-8 px-8">
          Founded in Dubai, our journey began with a simple belief — travel
          should be effortless, inspiring, and unforgettable. We set out to
          create experiences that go beyond tickets and tours, offering
          travellers a seamless way to explore Dubai and destinations across the
          world.
        </p>
        <p className="text-xl mt-8 px-8">
          From the golden sands of the desert to iconic skylines and hidden
          cultural gems, we craft journeys that are easy, convenient, and
          tailored to every traveler’s dream. Our website is designed to be the
          first step of that adventure — intuitive, welcoming, and filled with
          choices that transform plans into lasting memories.
        </p>
        <p className="text-xl mt-8 px-8">
          Today, we are more than a travel company. We are storytellers,
          experience makers, and trusted companions who bring the world closer
          to you. With us, every journey becomes more than a trip — it becomes a
          story worth cherishing forever.
        </p>
        <div className="flex justify-center mt-16">
          <Link href="/contact-us">
           <button className="px-8 py-2 text-2xl bg-[#FFA100] rounded-3xl">
            Get in Touch
          </button>
          </Link>
         
        </div>
      </div>
      {/* mission and vision  */}
      <div className="py-20 px-20 grid grid-cols-12 items-center">
        <div className="col-span-5 h-52 bg-[#C7541B] flex justify-center items-center rounded-3xl">
          <h2 className="text-white text-4xl font-black ">Our Mission</h2>
        </div>
        <div className="col-span-7 flex justify-center items-center px-8 bg-[#F5DDD4] h-40 rounded-r-3xl">
          <p>
            To deliver enriching, memorable, and innovative travel experiences
            that showcase the natural beauty, cultural heritage, and modern
            wonders of the UAE, welcoming visitors from around the world while
            prioritizing sustainability and community engagement in every
            journey.
          </p>
        </div>
        <div className="col-span-7 flex justify-center items-center px-8 bg-[#F5DDD4] h-40 rounded-l-3xl">
          <p>
            To establish the UAE as a leading global destination celebrated for
            its diversity, sustainability, and hospitality, inspiring travelers
            to explore its unique blend of tradition, innovation, and adventure
            for generations to come.
          </p>
        </div>
         <div className="col-span-5 h-52 bg-[#2DA39A] flex justify-center items-center rounded-3xl">
          <h2 className="text-white text-4xl font-black ">Our vision</h2>
        </div>
      </div>
    </>
  );
}

export default page;
