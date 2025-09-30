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

"use client";
import { useState } from "react";

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
  const [flipped, setFlipped] = useState({});

  const handleFlip = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="px-40 py-20 text-[#2D464C] -z-0">
      <h1 className="text-5xl font-extrabold leading-normal  text-center">
        Explore the Dubai's Most <br />
        <span className="text-[#F97A1E]">Beautiful Destinations</span>
      </h1>
      <p className="text-center text-base px-44 my-4">
        From tropical paradises to cultural capitals, discover hand-picked
        destinations that offer unforgettable experiences.
      </p>

      <div className="grid grid-cols-3 gap-6 p-6">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="w-[100%] h-80 perspective"
            onClick={() => handleFlip(card.id)}
          >
            <div
              style={{
                backgroundImage: `url(${card.front.image}) `,
                backgroundSize: "cover",
                borderRadius: "12px",
              }}
              className={`relative w-[100%] h-80 transition-transform duration-700 preserve-3d ${
                flipped[card.id] ? "rotate-y-180" : ""
              }`}
            >
              {/* Front */}
              <div
                className={`absolute inset-0 rounded-xl backface-hidden flex justify-center items-end text-white font-bold text-xl`}
              >
                {/* {card.front} */}
                {/* <img className="w-[100%] h-80" src={card.front.image}/> */}
                <p className="pb-4">{card.front.name}</p>
              </div>

              {/* Back */}
              <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-red-500 text-white backface-hidden rotate-y-180">
                {/* {card.back} */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
