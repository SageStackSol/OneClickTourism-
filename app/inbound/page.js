"use client";
import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
import { useRouter } from "next/navigation";

const cardsData = [
  {
    id: 1,
    front: { image: "./al_ain.jpg", name: "Al Ain" },
    back: { price: "AED 329", duration: 10 },
  },
  {
    id: 2,
    front: { image: "./FujairahEastCoast.jpg", name: "Fujairah East Coast" },
    back: { price: "AED 329", duration: 10 },
  },
  {
    id: 3,
    front: { image: "./dubaiCityTour.jpg", name: "Dubai City Tour" },
    back: { price: "AED 329", duration: 10 },
  },
  {
    id: 4,
    front: { image: "./dubai_tour.jpg", name: "Dubai Tour" },
    back: { price: "AED 329", duration: 10 },
  },
  {
    id: 5,
    front: { image: "./abu_dhabi.jpg", name: "Abu Dhabi" },
    back: { price: "AED 329", duration: 10 },
  },
  {
    id: 6,
    front: { image: "./sharjah.jpg", name: "Sharjah" },
    back: { price: "AED 329", duration: 10 },
  },
];

export default function FlipCards() {
  // const router = useRouter();
  const router = useRouter();

  const [flipped, setFlipped] = useState({});
  const [inbounds, setInbounds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState(
    ["Desert Experience","Wild life & Nature"]
  );


  // Fetch all inbound items
  useEffect(() => {
    const fetchInbounds = async () => {
      try {
        const res = await fetch("/api/inbound");
        const data = await res.json();
        setInbounds(data);
        console.log(data);
  console.log(inbounds);

      } catch (error) {
        console.error("Failed to load inbound items", error);
      } finally {
        setLoading(false);
      }
    };
    fetchInbounds();
  }, []);


  useEffect(() => {
  
  let filteredInbounds = selectedTag
  ? inbounds.filter((item) => item.tags.includes(selectedTag))
  : inbounds;
     console.log(filteredInbounds);
   
  },[inbounds]);



  const handleFlip = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <div
        style={{ background: "url('/inbound-bg.png') center/cover no-repeat" }}
        className="h-screen w-screen bg-cover bg-center flex flex-col-reverse"
      >
        <div className="bg-black/50 text-white lg:flex md:flex p-10 gap-20">
          <h1 className="lg:text-7xl md:text-7xl text-4xl font-bold">Dubai</h1>
          <p className="text-lg">
            Did you know? Dubai is home to the world’s largest flower garden,
            the Dubai Miracle Garden, with over 150 million blooming flowers
            arranged in incredible designs including life-sized airplanes
            covered entirely in flowers!
          </p>
        </div>
      </div>

      <div className="lg:py-20 md:py-20 py-16 lg:px-20 md:px-20 px-4 text-[#2D464C] -z-0">
        <h1 className="lg:text-7xl md:text-7xl text-3xl font-extrabold   text-center">
          Explore the Dubai&apos;s Most <br />
          <span className="text-[#F97A1E]">Beautiful Destinations</span>
        </h1>
        <p className="text-center text-base lg:px-44 md:px-40 my-4">
          From tropical paradises to cultural capitals, discover hand-picked
          destinations that offer unforgettable experiences.
        </p>

        <div className="grid grid-cols-4 h-screen py-12 gap-6">
          <div className="lg:col-span-1 md:col-span-1 sm:block hidden sticky h-screen">
            <div className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] px-4 pb-8 pt-4 rounded-lg">
              <h2 className="text-center text-lg font-bold mb-6">Categories</h2>
              <div className="flex gap-2 flex-wrap">
                <button className=" bg-orange-100 px-3 py-1 rounded-2xl">
                  Desert Experience
                </button>
                <button className=" bg-orange-100 px-3 py-1 rounded-2xl">
                  Water Adventures
                </button>
                <button className=" bg-orange-100 px-3 py-1 rounded-2xl">
                  City Tour
                </button>
                <button className=" bg-orange-100 px-3 py-1 rounded-2xl">
                  Attraction & Landmark
                </button>
                <button className=" bg-orange-100 px-3 py-1 rounded-2xl">
                  Adventure & Thrill
                </button>
                <button className=" bg-orange-100 px-3 py-1 rounded-2xl">
                  Wild Life & Nature
                </button>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 md:col-span-3 col-span-4 grid grid-cols-3 gap-6 h-screen overflow-y-scroll">
            {inbounds.length>0 && inbounds.map((item, index) => (
              <div
                key={index}
                className="w-[100%] h-80 perspective lg:col-span-1 md:col-span-1 col-span-3"
                onClick={() => {
                  handleFlip(item._id);
                  console.log(index);
                }}
              >
                <div
                  style={{
                    backgroundImage: `url(${item.image}) `,
                    backgroundSize: "cover",
                    borderRadius: "12px",
                  }}
                  className={`relative w-[100%] h-80 transition-transform duration-700 preserve-3d ${
                    flipped[item._id] ? "rotate-y-180" : ""
                  }`}
                >
                  {/* Front */}
                  <div
                    className={`absolute inset-0 rounded-xl backface-hidden flex justify-center items-end text-white font-bold text-xl`}
                  >
                    {/* {item.front} */}
                    {/* <img className="w-[100%] h-80" src={item.front.image}/> */}
                    <p className="pb-4">{item.name}</p>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 flex flex-col items-center justify-between rounded-xl  text-[#2D464C] bg-white shadow-xl backface-hidden rotate-y-180 p-4">
                    {/* {item.back} */}
                    <div className="w-full">
                      <h4 className="text-xl font-bold text-center">
                        {item.name}
                      </h4>
                      <p className="text-left w-full line-clamp-5">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap justify-start w-full gap-1 mb-2">
                        {item.tags &&
                          item.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                      </div>
                      <p className="text-left w-full">
                        <b>Price:</b> ₹{item.price}
                      </p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        // router.push(`/enquiry/${item._id}`);
                        router.push(`/enquiry/${item._id}`);
                      }}
                      className="mt-3  text-white px-3 py-2 rounded text-sm w-[60%] bg-black"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
// import React from 'react'

// function page() {
//     const inboundPlaces = [
//          {
//       image: "./redDunes.jpeg",
//       place: "Dubai Red Dunes",
//       price: "AED 329",
//       duration: 10,
//     },
//      {
//       image: "./dubaiBuilding.jpeg",
//       place: "Dubai",
//       price: "AED 729",
//       duration: 12,
//     },
//      {
//       image: "./jetski.jpeg",
//       place: "Dubai jetski",
//       price: "AED 939",
//       duration: 28,
//     },
//     {
//       image: "./bridge.jpeg",
//       place: "Dubai Red Dunes",
//       price: "AED 329",
//       duration: 10,
//     },
//      {
//       image: "./dubai.png",
//       place: "Dubai ",
//       price: "AED 739",
//       duration: 12,
//     },
//      {
//       image: "./buildings.jpeg",
//       place: "Dubai Jetski",
//       price: "AED 939",
//       duration: 28,
//     }
//     ]
//   return (
//     <>
//     <div className='px-40 py-20'>

//          <h1 className="text-5xl font-extrabold leading-normal text-center">
//        Explore the World's Most <br />
//           <span className="text-[#18E5E6]">Beautiful Destinations</span>
//         </h1>
//         <p className="text-center text-base px-44 my-4">
//          From tropical paradises to cultural capitals, discover hand-picked destinations that offer unforgettable experiences.
//         </p>
//   <div className="grid grid-cols-12 gap-8 py-16">
//           {inboundPlaces.map((item, index) => {
//             return (
//               <div
//                 className="col-span-4 rounded-xl shadow-md font-extralight"
//                 key={index}
//               >
//                 <img className="h-80 w-[100%] rounded-t-xl" src={item.image} />
//                 <div className="p-4 text-[#5E6282]">
//                   <div className="flex justify-between text-lg">
//                     <p>{item.place}</p>
//                     <p>{item.price}</p>
//                   </div>
//                   <div className="flex gap-1 items-center my-2 text-sm">
//                     <img src="./navigation.png" className="w-4 h-4 " />{" "}
//                     {item.duration} Days Trip
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//     </div>

//     </>
//   )
// }

// export default page
