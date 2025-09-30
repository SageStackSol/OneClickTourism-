"use client";
import React, { useEffect, useState } from "react";
import WhatWeDo from "../components/WhatWeDo";
import WhyChooseUs from "../components/WhyChooseUs";
import InboundCarousal from "../components/InboundCarousal";
import Link from "next/link";

function page() {
  const [destinationType, setDestinationType] = useState("inbound");

  const chooseUs = [
    {
      image: "./dollar.png",
      title: "Competitive Prices",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
    {
      image: "./secure.png",
      title: "Secure Booking",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
    {
      image: "./experience.png",
      title: "Seamless Experience",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
  ];

  const travelSolutions = [
    {
      image: "./weather.png",
      title: "Calculated Weather",
      description:
        "Built Wicket longer admire do barton vanity itself do in it.",
    },
    {
      image: "./flight.png",
      title: "Best Flights",
      description:
        "Engrossed listening. Park gate sell they west hard for the.",
    },
    {
      image: "./events.png",
      title: "Local Events",
      description:
        "Barton vanity itself do in it. Preferd to men it engrossed listening.",
    },
    {
      image: "./customization.png",
      title: "Customization",
      description:
        "We deliver outsourced aviation services for military customers",
    },
  ];

  const world = [
    {
      image: "./rome.png",
      place: "Rome, Italty",
      price: "AED 329",
      duration: 10,
    },
    {
      image: "./london.png",
      place: "London, UK",
      price: "AED 729",
      duration: 12,
    },
    {
      image: "./egypt.png",
      place: "Egypt, Africa",
      price: "AED 939",
      duration: 28,
    },
  ];
  useEffect(() => {
    const marquee = document.getElementById("marquee");
    if (marquee) {
      marquee.innerHTML += marquee.innerHTML;
    }
  }, []);
  return (
    <>
      {/* hero section  */}
      <div className='h-screen bg-[url("/hero-finalBg.jpg")] bg-cover flex items-end justify-center '>
        <div className=" pb-16">
          <h1 className="text-7xl font-black text-center leading-none text-white">
            Not just a <span className="text-[#F97A1E]">Journey</span>, but a{" "}
            <span className="text-[#F97A1E]">Story</span>
          </h1>
          <p className="text-white text-center text-[1.8em] mt-2">
            Experience the rush of the desert, the beauty of the sea, and the
            magic of a city that never sleeps.
          </p>{" "}
          <div className=" flex justify-center">
            <button className=" bg-gradient-to-r bg-[#F97A1E] text-[1.2em] font-bold text-white px-8 py-2 rounded-3xl my-2 mx-auto">
              Story Begins
            </button>
          </div>
        </div>
      </div>

      {/* below hero section */}

      {/* <div className="py-20 px-40">
        <h2 className="font-semibold text-[4em] text-center text-transparent bg-gradient-to-r from-[#089CE0] to-[#16DBE4] bg-clip-text">
          "Every Trip, a Story Worth Telling."
        </h2>
        <p className="text-center my-8">
          Turn your dream vacation into reality – we’ll take care of every
          detail, and you just enjoy the magic!
        </p>
        <b>
          We craft vacations where every detail flows effortlessly, leaving you
          free to simply enjoy the journey.
        </b>
        <p className="mb-8">
          From booking your flights and arranging smooth, worry-free airport
          transfers to curating captivating city tours across Dubai and the
          U.A.E.’s breathtaking Emirates, we design travel experiences that fit
          your family perfectly. Whether you’re wandering the vibrant streets of
          Dubai or venturing into the golden silence of the desert, every moment
          is designed to be enriching, memorable, and truly yours.
        </p>

        <b>Every destination holds a secret, and every moment tells a story.</b>
        <p className="mb-8">
          Our passion is taking you to places where dreams awaken and memories
          are etched forever. From iconic landmarks to hidden treasures far from
          the crowds, we ensure each step of your journey is filled with
          discovery and wonder.
        </p>

        <b>Your adventure begins the moment you say yes.</b>
        <p className="mb-8">
          Let us turn your travel dreams into reality with experiences as unique
          as you are. Discover new horizons. Create stories you’ll cherish for a
          lifetime. The world is waiting — your next chapter starts now.
        </p>
      </div> */}
      <div className="py-20 px-40 text-[#2D464C] grid grid-cols-12 my-12 ">
        <div className=" col-span-6">
          <h2 className="font-semibold text-4xl mb-8">
            "Every Trip, a Story Worth Telling."
          </h2>
          <p className=" text-xl my-4">
            Every destination holds a secret, and every moment tells a story.
            Our passion is taking you to places where dreams awaken and memories
            are etched forever. From iconic landmarks to hidden treasures far
            from the crowds, we ensure each step of your journey is filled with
            discovery and wonder.
          </p>

          <p className="text-xl">
            Your adventure begins the moment you say yes. Let us turn your
            travel dreams into reality with experiences as unique as you are.
            Discover new horizons. Create stories you’ll cherish for a lifetime.
            The world is waiting — your next chapter starts now.
          </p>
        </div>
        <div className="flex justify-center items-center col-span-6 ">
          <img
            src="./belowHero.png"
            className=" h-96 rounded-lg shadow-slate-600 shadow-[10px_10px_15px_rgba(0,0,0,0.5)] "
          />
        </div>
      </div>
      {/* what do we do */}
      <div className="text-[#2D464C] bg-gray-100 py-20 px-40 text-center">
        <h2 className="text-5xl font-bold mb-8">
          What we <span className="text-[#F97A1E]">Offer </span>{" "}
        </h2>
        <WhatWeDo />
      </div>

      {/* why choose us */}
      {/* <div className="px-40 ">
        <h4 className="text-3xl font-semibold text-center text-[#1A1A1A]">
          WHY CHOOSE US?
        </h4>
        <div className="grid grid-cols-12 gap-12 py-16">
          {chooseUs.map((item, index) => {
            return (
              <div key={index} className="col-span-4">
                <img className="w-12 mx-auto" src={item.image} />
                <h5 className="text-center my-4 text-lg font-semibold text-[#1A1A1A]">
                  {item.title}
                </h5>
                <p className="text-center my-4 text-base text-[#191919]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div> */}

      <div className="px-40 py-20 text-[#2D464C] text-center">
        <h2 className="text-5xl font-bold mb-8">
          What we <span className="text-[#F97A1E]">Offer </span>{" "}
        </h2>
        <WhyChooseUs />
      </div>

      {/* most popular destinations  */}
      <div
        className="flex flex-col justify-center items-center pt-20 text-[#2D464C] text-center stamp bg-[url('/stamp.jpg')]"
        style={{ background: "url('/stamp.jpg') center/cover no-repeat" }}
      >
        <div className="bg-white p-12 rounded-lg w-[90vw]">
          <h2 className="text-5xl font-bold mb-8">
            Most Popular <span className="text-[#F97A1E]">Destinations </span>{" "}
          </h2>
          {destinationType === "inbound" ? (
            <div className="grid grid-cols-12 my-20">
              <div className="col-span-8 ">
                <InboundCarousal />
              </div>
              <div className="col-span-4">
                <p>
                  We provide reliable inbound services to handle customer
                  inquiries, support requests, and order management with care
                  and efficiency. Our customer-first approach ensures timely
                  responses, smooth experiences, and stronger brand loyalty.
                </p>
                <Link href="/inbound">
                 <button className=" bg-gradient-to-r bg-[#F97A1E] text-[1.2em] font-bold text-white px-8 py-2 rounded-3xl my-2 mx-auto">
                  Explore More
                </button>
                </Link>
               
              </div>
            </div>
          ) : (
            <div>need data for destination</div>
          )}
        </div>
        <div className=" flex justify-evenly w-[50vw] my-12">
          <button
            onClick={() => {
              setDestinationType("inbound");
            }}
            className={` w-[16vw] bg-gradient-to-r  text-[1.2em] font-bold ${
              destinationType === "inbound"
                ? "bg-[#F97A1E] text-white "
                : "bg-white text-[#2D464C]"
            } px-8 py-2 rounded-lg my-2 mx-auto shadow-lg shadow-gray-400`}
          >
            Inbound
          </button>
          <button
            onClick={() => {
              setDestinationType("destinations");
            }}
            className={`w-[16vw] bg-gradient-to-r  text-[1.2em] font-bold ${
              destinationType === "destinations"
                ? "bg-[#F97A1E] text-white "
                : "bg-white text-[#2D464C]"
            } px-8 py-2 rounded-lg my-2 mx-auto shadow-lg shadow-gray-400`}
          >
            Destinations
          </button>
        </div>
      </div>

      {/* travel solutions */}
      <div className="px-40 py-20 text-[#2D464C] grid grid-cols-12">
        <div className="col-span-6">
          <h2 className="text-5xl font-bold leading-normal mb-8">
            Your Journey, Our Visa Travel Without Barriers
          </h2>
          <p className=" mb-6">
            Visa Assistance Made Simple Tired of the paperwork, long embassy
            queues, and confusing requiremennts? We take the stress out of
            travel by offering fast, reliable, and professional visa oisa
            assistance for travelers worldwide. Whether it's for tourism,
            business, or family visits -we ensure your visa process is smooth,
            secure, and worry-free.
          </p>
          <p>
             No stress, No delays: Just your passport, ready to fly:
          </p>
        </div>
        <div className="col-span-6 h-full  flex items-end justify-center bg-[url('/setup.png')] bg-cover rounded-lg mx-4">
 {/* <button className=" bg-gradient-to-r bg-[#F97A1E] text-[1.2em] font-bold text-white px-8 py-2 rounded-3xl my-2 mx-auto">
                  Explore More
                </button> */}
        </div>
      </div>
      {/* explore the world  */}
      {/* <div className="px-40">
        <h4 className="text-4xl font-semibold text-center">
          Explore the <span className="text-[#F97A1E]">World</span>
        </h4>
        <p className="text-[#827F7F] text-center my-4 mx-36 text-xl">
          From European capitals to tropical paradises, discover our curated
          collection of dream destinations. Each with personalized packages
          tailored to your preferences.
        </p>
        <div className="grid grid-cols-12 gap-8 py-16">
          {world.map((item, index) => {
            return (
              <div
                className="col-span-4 rounded-xl shadow-md font-extralight"
                key={index}
              >
                <img className="h-80 w-[100%] rounded-t-xl" src={item.image} />
                <div className="p-4 text-[#5E6282]">
                  <div className="flex justify-between text-lg">
                    <p>{item.place}</p>
                    <p>{item.price}</p>
                  </div>
                  <div className="flex gap-1 items-center my-2 text-sm">
                    <img src="./navigation.png" className="w-4 h-4 " />{" "}
                    {item.duration} Days Trip
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}
      {/* contact us  */}
      {/* <div className="bg-gradient-to-r from-[#089CE0] to-[#16DBE4] text-white text-center py-12">
        <h1 className="text-[3em] font-bold m-0">Never Miss a Great Deal !</h1>
        <p className="mb-2">
          Subscribe to our newsletter and get exclusive travel deals,
          destination guides, and travel tips delivered to your inbox.
        </p>
        <input
          className=" bg-white/20 px-4 py-2 rounded-lg placeholder:text-white"
          placeholder="Enter your email"
        />
        <button className="bg-[#FA7C28] px-4 py-2 rounded-lg mx-2">
          Subscribe
        </button>
      </div> */}
    </>
  );
}

export default page;
