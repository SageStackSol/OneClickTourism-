// import React, { useState } from "react";

// const data = [
//   {
//     title: "Card 1",
//     description: "This is the first card",
//     color: "bg-red-300",
//   },
//   {
//     title: "Card 2",
//     description: "This is the second card",
//     color: "bg-blue-300",
//   },
//   {
//     title: "Card 3",
//     description: "This is the third card",
//     color: "bg-green-300",
//   },
//   {
//     title: "Card 4",
//     description: "This is the fourth card",
//     color: "bg-yellow-300",
//   },
// ];

// export default function Example() {
//   const [cards, setCards] = useState(data);

//   const bringToFront = (index) => {
//     const newCards = [...cards];
//     const selected = newCards.splice(index, 1)[0]; // remove clicked
//     newCards.push(selected); // push to top
//     setCards(newCards);
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="relative w-80 h-96">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             onClick={() => bringToFront(index)}
//             className={`absolute w-full h-full rounded-2xl shadow-xl p-6 text-white cursor-pointer transition-all duration-500 ${card.color}`}
//             style={{
//               transform: `translateY(${index * 10}px) scale(${1 - index * 0.05})`,
//               zIndex: index,
//             }}
//           >
//             <h2 className="text-2xl font-bold">{card.title}</h2>
//             <p className="mt-2">{card.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import React from "react";

// const data = [
//   { title: "One", color: "bg-red-400" },
//   { title: "Two", color: "bg-blue-400" },
//   { title: "Three", color: "bg-green-400" },
//   { title: "Four", color: "bg-yellow-400" },
//   { title: "Five", color: "bg-purple-400" },
//   { title: "Six", color: "bg-pink-400" },
// ];

// export default function Example() {
//   const radius = 120; // distance from center
//   const centerX = 150;
//   const centerY = 150;

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="relative w-[300px] h-[300px] rounded-full bg-white shadow-lg flex items-center justify-center">
//         <h2 className="absolute text-lg font-bold text-gray-700">
//           Center
//         </h2>
//         {data.map((item, index) => {
//           const angle = (index / data.length) * 2 * Math.PI;
//           const x = centerX + radius * Math.cos(angle) - 40;
//           const y = centerY + radius * Math.sin(angle) - 40;

//           return (
//             <div
//               key={index}
//               className={`absolute w-20 h-20 rounded-full flex items-center justify-center text-white font-bold shadow-lg ${item.color} cursor-pointer hover:scale-110 transition-transform`}
//               style={{ left: `${x}px`, top: `${y}px` }}
//             >
//               {item.title}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

"use client";
import React from "react";
import { motion } from "framer-motion";
import { BarChart3, Users, Globe2 } from "lucide-react";

const stats = [
  {
    title: "Inbound Experiences",
    description: "Discover Dubai like never before with curated local adventures.",
    image: "./dubaiWWD.jpg" 
  },
   {
    title: "Global Destinations",
    description: "Explore the destinations worldwide with personalized itineraries.",
    image: "./destinationWWD.jpg" 
  },
  {
    title: "Visa Assistance",
    description: "Hassle-free visa support for smooth travel planning.",
    image: "./visaWWD.jpg" 
  },{
    title: "Flight Bookings",
    description: "Hassle-free visa support for smooth travel planning.",
    image: "./flightWWD.jpg" 
  },{
    title: "Hotel Bookings",
    description: "Hassle-free visa support for smooth travel planning.",
    image: "./hotelWWD.jpg" 
  },
 
];

export default function WhatWeDo() {
  return (
    <div className=" flex items-center justify-center  lg:p-8 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center cursor-pointer"
          >
           <img src={item.image} className="rounded-lg"/>
            <p className=" mt-2 text-3xl font-bold">{item.title}</p>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
