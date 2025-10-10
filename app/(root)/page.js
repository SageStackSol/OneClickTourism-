"use client";
import React, { useEffect, useState } from "react";
import WhatWeDo from "../components/WhatWeDo";
import WhyChooseUs from "../components/WhyChooseUs";
import InboundCarousal from "../components/InboundCarousal";
import Link from "next/link";
import Image from "next/image"; // ✅ use next/image for optimization

function Page() {
  const [destinationType, setDestinationType] = useState("inbound");

  const chooseUs = [
    {
      image: "/dollar.png",
      title: "Competitive Prices",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
    {
      image: "/secure.png",
      title: "Secure Booking",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
    {
      image: "/experience.png",
      title: "Seamless Experience",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
  ];

  const travelSolutions = [
    {
      image: "/weather.png",
      title: "Calculated Weather",
      description: "Built Wicket longer admire do barton vanity itself do in it.",
    },
    {
      image: "/flight.png",
      title: "Best Flights",
      description: "Engrossed listening. Park gate sell they west hard for the.",
    },
    {
      image: "/events.png",
      title: "Local Events",
      description: "Barton vanity itself do in it. Preferred to men it engrossed listening.",
    },
    {
      image: "/customization.png",
      title: "Customization",
      description: "We deliver outsourced aviation services for military customers",
    },
  ];

  const world = [
    {
      image: "/rome.png",
      place: "Rome, Italy",
      price: "AED 329",
      duration: 10,
    },
    {
      image: "/london.png",
      place: "London, UK",
      price: "AED 729",
      duration: 12,
    },
    {
      image: "/egypt.png",
      place: "Egypt, Africa",
      price: "AED 939",
      duration: 28,
    },
  ];

  useEffect(() => {
    const marquee = document.getElementById("marquee");
    if (marquee) marquee.innerHTML += marquee.innerHTML;
  }, []);

  return (
    <>
      {/* hero section  */}
      <div className='h-screen bg-[url("/hero-finalBg.jpg")] bg-cover flex items-end justify-center'>
        <div className="pb-16 lg:px-0 md:px-0 px-4">
          <h1 className="lg:text-7xl md:text-7xl text-4xl font-black text-center leading-none text-white">
            Not just a <span className="text-[#F97A1E]">Journey</span>, but a{" "}
            <span className="text-[#F97A1E]">Story</span>
          </h1>
          <p className="text-white text-center lg:text-[1.8em] md:text-[1.8em] text-[1em] mt-2">
            Experience the rush of the desert, the beauty of the sea, and the
            magic of a city that never sleeps.
          </p>
          <div className="flex justify-center">
            <button className="bg-[#F97A1E] text-[1.2em] font-bold text-white px-8 py-2 rounded-3xl my-2 mx-auto">
              Story Begins
            </button>
          </div>
        </div>
      </div>

      {/* section below hero */}
      <div className="lg:py-20 md:py-20 py-8 lg:px-40 md:px-40 px-4 text-[#2D464C] grid grid-cols-12 my-12">
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <h2 className="font-semibold text-4xl mb-8">
            &quot;Every Trip, a Story Worth Telling.&quot;
          </h2>
          <p className="text-xl my-4">
            Every destination holds a secret, and every moment tells a story.
            Our passion is taking you to places where dreams awaken and memories
            are etched forever. From iconic landmarks to hidden treasures far
            from the crowds, we ensure each step of your journey is filled with
            discovery and wonder.
          </p>
          <p className="text-xl">
            Your adventure begins the moment you say yes. Let us turn your
            travel dreams into reality with experiences as unique as you are.
            Discover new horizons. Create stories you&apos;ll cherish for a
            lifetime. The world is waiting — your next chapter starts now.
          </p>
        </div>
        <div className="flex justify-center items-center lg:col-span-6 md:col-span-6 col-span-12">
          <Image
            src="/belowHero.png"
            width={400}
            height={400}
            alt="Travel illustration"
            className="h-96 rounded-lg shadow-slate-600 shadow-[10px_10px_15px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>

      {/* what we offer */}
      <div className="text-[#2D464C] bg-gray-100 lg:py-20 md:py-20 py-8 lg:px-40 md:px-40 px-4 text-center">
        <h2 className="text-5xl font-bold mb-8">
          What we <span className="text-[#F97A1E]">Offer</span>
        </h2>
        <WhatWeDo />
      </div>

      {/* why choose us */}
      <div className="lg:py-20 md:py-20 py-8 lg:px-40 md:px-40 px-4 text-[#2D464C] text-center">
        <h2 className="text-5xl font-bold mb-8">
          Why <span className="text-[#F97A1E]">Choose Us</span>
        </h2>
        <WhyChooseUs />
      </div>

      {/* most popular destinations */}
      <div
        className="flex flex-col justify-center items-center pt-20 text-[#2D464C] text-center"
        style={{ background: "url('/stamp.jpg') center/cover no-repeat" }}
      >
        <div className="bg-white lg:p-12 md:p-12 p-4 rounded-lg w-[90vw]">
          <h2 className="text-5xl font-bold lg:mb-8 md:mb-8">
            Most Popular <span className="text-[#F97A1E]">Destinations</span>
          </h2>
          {destinationType === "inbound" ? (
            <div className="grid grid-cols-12 my-20 items-center">
              <div className="lg:col-span-8 md:col-span-8 col-span-12">
                <InboundCarousal />
              </div>
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
            <div>Need data for destination</div>
          )}
        </div>

        <div className="lg:flex md:flex block justify-evenly w-[50vw] my-12">
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
      </div>

      {/* travel solutions */}
      <div className="lg:py-20 md:py-20 py-8 lg:px-40 md:px-40 px-4 text-[#2D464C] grid grid-cols-12">
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <h2 className="text-5xl font-bold leading-normal mb-8">
            Your Journey, Our Visa — Travel Without Barriers
          </h2>
          <p className="mb-6">
            Visa Assistance Made Simple. Tired of the paperwork, long embassy
            queues, and confusing requirements? We take the stress out of travel
            by offering fast, reliable, and professional visa assistance for
            travelers worldwide. Whether it&apos;s for tourism, business, or
            family visits — we ensure your visa process is smooth, secure, and
            worry-free.
          </p>
          <p>No stress, no delays: just your passport, ready to fly.</p>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12 lg:h-full md:h-full h-64 flex items-end justify-center bg-[url('/setup.png')] bg-cover rounded-lg lg:mx-4 md:mx-4"></div>
        <div className="col-span-12 grid grid-cols-12 mt-12"> 
          <div className="lg:col-span-3 md:col-span-3 col-span-6 flex flex-col items-center justify-center">
            <img className="w-8 " src="./tick.jpg"/>
            <p className="text-lg font-bold">Quick Visa Approvals</p>
          </div>

           <div className="lg:col-span-3 md:col-span-3 col-span-6 flex flex-col items-center justify-center">
            <img className="w-12 " src="./laptop.jpg"/>
            <p className="text-lg font-bold">Hassle-Free Process</p>
          </div>

           <div className="lg:col-span-3 md:col-span-3 col-span-6 flex flex-col items-center justify-center">
            <img className="w-12 " src="./globe.png"/>
            <p className="text-lg font-bold">Global Coverage</p>
          </div>

           <div className="lg:col-span-3 md:col-span-3 col-span-6 flex flex-col items-center justify-center">
            <img className="w-8 " src="./mic.png"/>
            <p className="text-lg font-bold">24/7 Expert Support</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
