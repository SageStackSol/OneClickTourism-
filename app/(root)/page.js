"use client";
import React, { useEffect } from "react";

function page() {
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
      <div className='h-screen bg-[url("/hero-image.png")] bg-cover bg-center flex flex-col items-center justify-between'>
        <div className="w-[60%] h-full flex flex-col items-center justify-center gap-5 mt-12">
          <h1 className=" mb-0 text-center leading-none">
            <span className="text-[5em] font-bold text-white ">
              Your Dream Vacation
            </span>{" "}
            {/* <br /> */}
            <span className="text-[3em] font-semibold text-[#FA7C28] text-center">
              Just One Click Away
            </span>
          </h1>

          <div className="w-[60%]">
            <p className="text-white text-center text-[1.2em]">
              Discover breathtaking destinations, create unforgettable memories,
              and experience the world with our expertly crafted travel packages
              tailored just for you.
            </p>
          </div>

          <div className="flex justify-evenly w-[100%]">
            <button className="bg-gradient-to-r from-[#089CE0] to-[#16DBE4] text-white rounded-lg px-6 py-3">
              Book Your Destination
            </button>{" "}
            <button className="text-white rounded-lg px-6 py-3 bg-white/40 ">
              Plan your Trip
            </button>
          </div>
          {/* <div className="flex justify-between w-[100%] mt-12">
            <div className="text-white rounded-lg px-6 py-3 bg-white/40 text-center w-[25%]">
              <span className="font-bold text-[2em]">500+</span>
              <br />
              Destinations
            </div>{" "}
            <div className="text-white rounded-lg px-6 py-3 bg-white/40 text-center w-[25%]">
              <span className="font-bold text-[2em]">10K+</span>
              <br />
              Happy Customers
            </div>
            <div className="text-white rounded-lg px-6 py-3 bg-white/40 text-center w-[25%]">
              <span className="font-bold text-[2em]">15+</span>
              <br />
              Years Experience
            </div>
          </div> */}
          {/* <div className="secondDivAni pl-[100vw] flex gap-12 align-middle">
            <div className="text-white rounded-lg px-6 py-3 bg-white/40 text-center font-semibold text-nowrap">
              500+ Destinations
            </div>
            <div className="text-white rounded-lg px-6 py-3 bg-white/40 text-center font-semibold text-nowrap">
              10K+ Happy Customers
            </div>
            <div className="text-white rounded-lg px-6 py-3 bg-white/40 text-center font-semibold text-nowrap">
              15+ Years Experience
            </div>
            <div className="text-white rounded-lg px-6 py-3 bg-white/40 text-center font-semibold text-nowrap">
              500+ Destinations
            </div>
            <div className="text-white rounded-lg px-6 py-3 bg-white/40 text-center font-semibold text-nowrap">
              10K+ Happy Customers
            </div>
            <div className="text-white rounded-lg px-6 py-3 bg-white/40 text-center font-semibold text-nowrap">
              15+ Years Experience
            </div>
          </div> */}
        </div>
        {/* marquee */}

        <div className="marquee mt-20">
          <div className="marquee-content" id="marquee">
            <span>
              {" "}
              <div className="text-white rounded-lg px-6 py-3 bg-white/40 text-center font-semibold text-nowrap">
                500+ Destinations
              </div>
            </span>
            <span>
              <div className="text-white rounded-lg px-6 py-3 bg-white/40 text-center font-semibold text-nowrap">
                10K+ Happy Customers
              </div>
            </span>
            <span>
              {" "}
              <div className="text-white rounded-lg px-6 py-3 bg-white/40 text-center font-semibold text-nowrap">
                15+ Years Experience
              </div>
            </span>
          </div>
        </div>
      </div>

      {/* below hero section */}

      <div className="py-20 px-40">
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
      </div>
      {/* why choose us */}
      <div className="px-40 ">
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
      </div>
      {/* travel solutions */}
      <div className="px-40">
        <h4 className="text-4xl font-semibold text-center">
          Complete <span className="text-[#0497E0]">Travel Solutions</span>
        </h4>
        <p className="text-[#827F7F] text-center my-4 mx-36 text-xl">
          From visa processing to luxury tours and worldwide destinations
          everything you need for your perfect journey.
        </p>
        <div className="grid grid-cols-12 gap-12 py-16">
          {travelSolutions.map((item, index) => {
            return (
              <div key={index} className="col-span-3 px-6 py-3">
                <img className="w-20 mx-auto" src={item.image} />
                <h5 className="text-center my-4 text-lg font-semibold text-[#1E1D4C]">
                  {item.title}
                </h5>
                <p className="text-center my-4 text-base text-[#5E6282]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* explore the world  */}
      <div className="px-40">
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
      </div>
      {/* contact us  */}
      <div className="bg-gradient-to-r from-[#089CE0] to-[#16DBE4] text-white text-center py-12">
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
      </div>
    </>
  );
}

export default page;
