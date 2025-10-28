"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import WhatWeDo from "../components/WhatWeDo";
import WhyChooseUs from "../components/WhyChooseUs";
import { Great_Vibes } from "next/font/google";
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

function Page() {
  const [aboutUsHeroImages, setAboutUsHeroImages] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/about-us");
        const data = await res.json();

        setAboutUsHeroImages(data[0].aboutUsHeroImages);
        // setFilteredInbounds(data);
        console.log(data[0].aboutUsHeroImages);
        // console.log(homeData.length)
      } catch (error) {
        console.error("Failed to load inbound items", error);
      }
      // finally {
      //   // setLoading(false);
      // }
    };
    fetchData();
  }, []);

  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === aboutUsHeroImages.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [aboutUsHeroImages.length]);
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
      <div
        style={{
          backgroundImage: `url(${aboutUsHeroImages[currentImage]})`,
        }}
        className=" bg-center bg-cover transition-all duration-1000 ease-in-out h-screen py-44 lg:px-10 md:px-10 px-4"
      >
        <h1 className="lg:text-7xl md:text-7xl text-3xl font-black leading-none text-white lg:mb-4 md:mb-4">
          Not just a Journey, but a Story
        </h1>
        <p className="lg:text-xl md:text-xl text-base text-white">
          Experience the rush of the desert, the beauty of the sea, and the
          magic of a city that never sleeps.
        </p>
      </div>

      {/* about us  bg-[#C7B5A2]*/}

      <div
        style={{ background: "url('/about-us-bg.jpg') center/cover no-repeat" }}
        className=" lg:py-20 lg:px-10 md:py-20 md:px-10 py-8"
      >
        <div className="flex w-[100%] items-center gap-2 lg:px-10 md:px-10 px-4">
          <h2 className="lg:text-5xl md:text-5xl text-2xl font-bold pr-4">
            <span className={`${greatVibes.className} `}> Our Story</span>{" "}
          </h2>
          <div className="w-3 h-3 bg-black rounded-full"></div>
          <hr className="lg:w-[80%] md:w-[80%] w-[50%] border-[#F97A1E] border-[.1em]" />
        </div>
        <p className="text-xl font-bold lg:mt-8 md:mt-8 mt-4 px-8">
          Founded in Dubai, our journey began with a simple belief — travel
          should be effortless, inspiring, and unforgettable. We set out to
          create experiences that go beyond tickets and tours, offering
          travellers a seamless way to explore Dubai and destinations across the
          world.
        </p>
        <p className="text-xl font-bold lg:mt-8 md:mt-8 mt-4 px-8">
          From the golden sands of the desert to iconic skylines and hidden
          cultural gems, we craft journeys that are easy, convenient, and
          tailored to every traveler’s dream. Our website is designed to be the
          first step of that adventure — intuitive, welcoming, and filled with
          choices that transform plans into lasting memories.
        </p>
        <p className="text-xl font-bold lg:mt-8 md:mt-8 mt-4 px-8">
          Today, we are more than a travel company. We are storytellers,
          experience makers, and trusted companions who bring the world closer
          to you. With us, every journey becomes more than a trip — it becomes a
          story worth cherishing forever.
        </p>
        <div className="flex justify-center lg:mt-16 md:mt-16 mt-4">
          <Link href="/contact-us">
            <button className="px-8 py-2 text-2xl bg-[#F97A1E] rounded-3xl">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>
      {/* mission and vision  */}
      <div className="py-20 px-20 lg:grid md:grid hidden grid-cols-12 items-center ">
        <div className="col-span-5 h-52 bg-[#C7541B] flex justify-center items-center rounded-3xl border-2 border-black">
          <h2 className="text-black text-7xl font-black ">
            <span className={greatVibes.className}>Our Mission </span>{" "}
          </h2>
        </div>
        <div className="col-span-7 flex justify-center items-center px-8 bg-[#F5DDD4] h-40 relative rounded-r-3xl">
          <div className="absolute inset-0 bg-[url('/mission.png')]  bg-contain  bg-no-repeat bg-center  opacity-40"></div>
          <p className="">
            To deliver enriching, memorable, and innovative travel experiences
            that showcase the natural beauty, cultural heritage, and modern
            wonders of the UAE, welcoming visitors from around the world while
            prioritizing sustainability and community engagement in every
            journey.
          </p>
        </div>
        <div className="col-span-7 relative flex justify-center items-center px-8 bg-[#2da39961] h-40 rounded-l-3xl">
          <div className="absolute inset-0 bg-[url('/vision.png')]  bg-contain  bg-no-repeat bg-center  opacity-30"></div>
          <p>
            To establish the UAE as a leading global destination celebrated for
            its diversity, sustainability, and hospitality, inspiring travelers
            to explore its unique blend of tradition, innovation, and adventure
            for generations to come.
          </p>
        </div>
        <div className="col-span-5 h-52 bg-[#2DA39A] flex justify-center items-center rounded-3xl border-2 border-black">
          <h2 className="text-black text-7xl font-black ">
            <span className={greatVibes.className}> Our Vision</span>
          </h2>
        </div>
      </div>
      {/* what do we do */}
      <div className="text-[#2D464C]  bg-gray-100 lg:py-20 md:py-20 py-8 lg:px-40 md:px-40 px-4 text-center">
        <h2 className="text-5xl font-bold mb-8">
          What we <span className="text-[#F97A1E]">Offer </span>{" "}
        </h2>
        <WhatWeDo />
      </div>
      {/* why choose us */}
      <div className="lg:py-20 md:py-20 py-8 lg:px-40 md:px-40 px-4 text-[#2D464C] text-center">
        <h2 className="text-5xl font-bold mb-8">
          Why Choose <span className="text-[#F97A1E]">Us </span>{" "}
        </h2>
        <WhyChooseUs />
      </div>
      {/* Our Team  */}
      <div className="lg:py-20 lg:px-10 md:py-20 md:px-10 py-8 px-4 bg-[url('/whiteTexture.jpg')] bg-cover bg-center ">
        {/* <div className="flex w-[100%] items-center gap-2 lg:px-10 md:px-10 px-4">
          <hr className="lg:w-[80%] md:w-[80%] w-[50%] border-[#F97A1E] border-[.1em]" />
          <div className="w-3 h-3 bg-black rounded-full"></div>

          <h2 className={`${greatVibes.className} lg:text-5xl md:text-5xl text-2xl font-bold pr-4`}>
       Our Team
          </h2>
          </div> */}

        <div className="grid grid-cols-12 border border-gray-400 rounded-lg mb-2 gap-4 p-4">
          <div className="lg:col-span-7 md:col-span-7 col-span-12 flex flex-col items-center justify-center">
            <h3
              className={`${greatVibes.className} text-[#F97A1E] text-center lg:text-5xl md:text-5xl text-2xl font-bold`}
            >
              {" "}
              Our Team{" "}
            </h3>
            <p>
              When you travel with us, you partner with proven expertise. Our
              team is made up of seasoned travel professionals whose deep
              expertise in the field—from complex logistics to local secrets
              enables us to craft tailor-made travel solutions that exceed your
              expectations. We don't just solve problems; we anticipate them,
              providing seamless and effortless trips. Your personalized
              experience starts with a thorough consultation, where we match
              your dreams with the best possible destination and itinerary. From
              this initial idea, we provide complete, end-to-end support:
              handling all visas, transfers, and accommodations, and offering a
              24-hour emergency hotline for total peace of mind while you're
              traveling.Explore our wide range of thoughtfully curated travel
              collections. Whether your tastes incline toward adventurous
              mountain safaris, luxurious cultural immersion, or peaceful beach
              escapes, our diverse range of unique package tours ensures you
              have the perfect itinerary…
            </p>
          </div>
          <div className="lg:col-span-5 md:col-span-5 col-span-12">
            <img src="/respect.png" />
          </div>
        </div>

        <div className="grid grid-cols-12 border border-gray-400 rounded-lg gap-4 mb-2 p-4">
          <div className="lg:col-span-7 md:col-span-7 col-span-12">
            <img src="/frames.png" />
          </div>
          <div className="lg:col-span-5 md:col-span-5 col-span-12 flex flex-col items-center justify-center">
            <h3
              className={`${greatVibes.className} text-[#F97A1E] text-center lg:text-5xl md:text-5xl text-2xl font-bold`}
            >
              Customized Holiday Packages 
            </h3>
            <p>
              Stop dreaming and start traveling. Our expert consultants design
              vacations built entirely around you. We offer both flexible,
              curated packages and completely bespoke itineraries, ensuring your
              journey perfectly matches your specific requirements.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 border border-gray-400 rounded-lg mb-2 gap-4 p-4">
          <div className="lg:col-span-7 md:col-span-7 col-span-12 flex flex-col items-center justify-center">
            <h3
              className={`${greatVibes.className} text-[#F97A1E] text-center lg:text-5xl md:text-5xl text-2xl font-bold`}
            >
              Credibility
            </h3>
            <p>
              Stop dreaming and start traveling. Our expert consultants design
              vacations built entirely around you. We offer both flexible,
              curated packages and completely bespoke itineraries, ensuring your
              journey perfectly matches your specific requirements. Your peace
              of mind is guaranteed: We are fully permitted by local authorities
              and adhere to the highest standards as members of leading travel
              trade associations.
            </p>
          </div>
          <div className="lg:col-span-5 md:col-span-5 col-span-12">
            <img className="" src="/handshake-businessmen.jpg" />
          </div>
        </div>

        <div className="grid grid-cols-12 border border-gray-400 rounded-lg gap-4 mb-2 p-4">
          <div className="lg:col-span-7 md:col-span-7 col-span-12">
            <img className="" src="/skilledEmployees.jpg" />
          </div>
          <div className="lg:col-span-5 md:col-span-5 col-span-12 flex flex-col items-center justify-center">
            <h3
              className={`${greatVibes.className} text-[#F97A1E] text-center lg:text-5xl md:text-5xl text-2xl font-bold`}
            >
              Skilled and Professional Staff
            </h3>
            <p>
              We’ve developed remarkable travel experiences for thousands of
              clients from all around the world since our inception, which is
              due to the caliber of our workforce.Our employees are
              knowledgeable and enthusiastic about their work.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
