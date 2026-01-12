// "use client";
// import { useState, useEffect } from "react";
// // import { useRouter } from "next/navigation";
// import { useRouter } from "next/navigation";

// export default function FlipCards() {
//   // const router = useRouter();
//   const router = useRouter();

//   const [flipped, setFlipped] = useState({});
//   const [destinations, setDestinations] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch all inbound items
//   useEffect(() => {
//     const fetchDestinations = async () => {
//       try {
//         const res = await fetch("/api/destination");
//         const data = await res.json();
//         setDestinations(data);
//         console.log(data);
//       } catch (error) {
//         console.error("Failed to load destination items", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchDestinations();
//   }, []);

//   const handleFlip = (id) => {
//     setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
//   };

//   return (
//     <>
//       <div
//         style={{
//           background: "url('/destinationsBg.jpg') center/cover no-repeat",
//         }}
//         className="h-screen w-screen bg-cover bg-center flex flex-col-reverse"
//       >
//         <div className="bg-black/50 text-white p-10 gap-20">
//           <h1 className="lg:text-7xl md:text-7xl text-4xl font-bold">
//             Explore the World Beyond Borders
//           </h1>
//           <p className="text-lg">
//             Discover breathtaking destinations across continents — from tropical
//             islands to iconic cities, we bring the world closer to you with
//             curated international tours and seamless travel experiences.
//           </p>
//         </div>
//       </div>

//       <div className="lg:py-20 md:py-20 py-16 lg:px-20 md:px-20 px-4 text-[#2D464C] -z-0">
//         <h1 className="lg:text-7xl md:text-7xl text-3xl font-extrabold   text-center">
//           Explore the Dubai&apos;s Most <br />
//           <span className="text-[#F97A1E]">Beautiful Destinations</span>
//         </h1>
//         <p className="text-center text-base lg:px-44 md:px-40 my-4">
//           From tropical paradises to cultural capitals, discover hand-picked
//           destinations that offer unforgettable experiences.
//         </p>

//         {/* <div className="grid grid-cols-4 h-screen py-12 gap-6"> */}
//         {/* <div className="lg:col-span-1 md:col-span-1 sm:block hidden sticky h-screen">
//             <div className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] px-4 pb-8 pt-4 rounded-lg">
//               <h2 className="text-center text-lg font-bold mb-6">Categories</h2>
//               <div className="flex gap-2 flex-wrap">
//                 <button className=" bg-orange-100 px-3 py-1 rounded-2xl">
//                   Desert Experience
//                 </button>
//                 <button className=" bg-orange-100 px-3 py-1 rounded-2xl">
//                   Water Adventures
//                 </button>
//                 <button className=" bg-orange-100 px-3 py-1 rounded-2xl">
//                   City Tour
//                 </button>
//                 <button className=" bg-orange-100 px-3 py-1 rounded-2xl">
//                   Attraction & Landmark
//                 </button>
//                 <button className=" bg-orange-100 px-3 py-1 rounded-2xl">
//                   Adventure & Thrill
//                 </button>
//                 <button className=" bg-orange-100 px-3 py-1 rounded-2xl">
//                   Wild Life & Nature
//                 </button>
//               </div>
//             </div>
//           </div> */}
//         <div className=" grid grid-cols-4 gap-6 my-8">
//           {destinations.map((item, index) => (
//             // <div
//             //   key={index}
//             //   className="w-[100%] h-80 perspective lg:col-span-1 md:col-span-1 col-span-4 "
//             //   onClick={() => {
//             //     handleFlip(item._id);
//             //     console.log(index);
//             //   }}
//             // >
//             //   <div
//             //     style={{
//             //       backgroundImage: `url(${item.image}) `,
//             //       backgroundSize: "cover",
//             //       borderRadius: "12px",
//             //     }}
//             //     className={`relative w-[100%] h-80 transition-transform duration-700 preserve-3d ${
//             //       flipped[item._id] ? "rotate-y-180" : ""
//             //     }`}
//             //   >
//             //     {/* Front */}
//             //     <div
//             //       className={`absolute inset-0 rounded-xl backface-hidden flex justify-center items-end text-white font-bold text-xl`}
//             //     >
//             //       {/* {item.front} */}
//             //       {/* <img className="w-[100%] h-80" src={item.front.image}/> */}
//             //       <p className="pb-4">{item.name}</p>
//             //     </div>

//             //     {/* Back */}
//             //     <div className="absolute inset-0 flex flex-col items-center justify-between rounded-xl  text-[#2D464C] bg-white shadow-xl backface-hidden rotate-y-180 p-4">
//             //       {/* {item.back} */}
//             //       <div className="w-full">
//             //         <h4 className="text-xl font-bold text-center">
//             //           {item.name}
//             //         </h4>
//             //         <p className="text-left w-full line-clamp-5">
//             //           {item.description}
//             //         </p>
//             //         <div className="flex flex-wrap justify-start w-full gap-1 mb-2">
//             //           {item.tags &&
//             //             item.tags.map((tag, i) => (
//             //               <span
//             //                 key={i}
//             //                 className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
//             //               >
//             //                 {tag}
//             //               </span>
//             //             ))}
//             //         </div>
//             //         <p className="text-left w-full">
//             //           <b>Price:</b> ₹{item.price}
//             //         </p>
//             //       </div>
//             //       <button
//             //         onClick={(e) => {
//             //           e.stopPropagation();
//             //           // router.push(`/enquiry/${item._id}`);
//             //           router.push(`/enquiry/${item._id}`);
//             //         }}
//             //         className="mt-3  text-white px-3 py-2 rounded text-sm w-[60%] bg-black"
//             //       >
//             //         Book Now
//             //       </button>
//             //     </div>
//             //   </div>
//             // </div>
//             <div
//               key={index}
//               className="w-[100%] h-80 perspective lg:col-span-1 md:col-span-1 col-span-4"
//               onClick={() => {
//                 handleFlip(item._id);
//                 console.log(index);
//               }}
//             >
//               <div
//                 style={{
//                   // backgroundImage: `url(${item.image}) `,
//                   backgroundSize: "cover",
//                   borderRadius: "12px",
//                 }}
//                 className={`relative w-[100%] h-80 transition-transform duration-700 border border-gray-200 shadow-[0_4px_10px_rgba(0,0,0,0.05)] cursor-pointer preserve-3d ${
//                   flipped[item._id] ? "rotate-y-180" : ""
//                 }`}
//               >
//                 {/* Front */}
//                 <div
//                   className={`absolute inset-0 rounded-xl backface-hidden  text-white font-bold text-xl`}
//                 >
//                   {/* {item.front} */}
//                   {/* <img className="w-[100%] h-80" src={item.front.image}/> */}
//                   <img
//                     className="w-full h-[88%] p-2 rounded-3xl"
//                     src={item.image}
//                   />
//                   <p className="pb-4 text-center text-[#2D464C]">{item.name}</p>
//                 </div>

//                 {/* Back */}
//                 <div className="absolute inset-0 flex flex-col items-center justify-between rounded-xl  text-[#2D464C] bg-white shadow-xl backface-hidden rotate-y-180 p-4">
//                   {/* {item.back} */}
//                   <div className="w-full">
//                     <h4 className="text-xl font-bold text-center">
//                       {item.name}
//                     </h4>
//                     <p className="text-left w-full line-clamp-5">
//                       {item.description}
//                     </p>
//                     <div className="flex flex-wrap justify-start w-full gap-1 mb-2">
//                       {item.tags &&
//                         item.tags.map((tag, i) => (
//                           <span
//                             key={i}
//                             className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
//                           >
//                             {tag}
//                           </span>
//                         ))}
//                     </div>
//                     <p className="text-left w-full">
//                       <b>Price:</b> ₹{item.price}
//                     </p>
//                   </div>
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       // router.push(`/enquiry/${item._id}`);
//                       router.push(`/enquiry/${item._id}`);
//                     }}
//                     className="mt-3  text-white px-3 py-2 rounded text-sm w-[60%] bg-black"
//                   >
//                     Book Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         {/* </div> */}
//       </div>
//     </>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function FlipCards() {
  const router = useRouter();

  const [flipped, setFlipped] = useState({});
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch all destination items
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const res = await fetch("/api/destination");
        const data = await res.json();
        setDestinations(data);
      } catch (error) {
        console.error("Failed to load destination items", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDestinations();
  }, []);

  const handleFlip = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Filter destinations by search term
  const filteredDestinations = destinations.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* HERO SECTION */}
      <div
        style={{
          background: "url('/destinationsBg.jpg') center/cover no-repeat",
        }}
        className="h-screen w-screen bg-cover bg-center flex flex-col-reverse"
      >
        <div className="bg-black/50 text-white p-10 gap-20">
          <h1 className="lg:text-7xl md:text-7xl text-4xl font-bold">
            Explore the World Beyond Borders
          </h1>
          <p className="text-lg">
            Discover breathtaking destinations across continents — from tropical
            islands to iconic cities, we bring the world closer to you with
            curated international tours and seamless travel experiences.
          </p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="lg:py-20 md:py-20 py-16 lg:px-20 md:px-20 px-4 text-[#2D464C]">
        <h1 className="lg:text-7xl md:text-7xl text-3xl font-extrabold text-center">
          Explore the World’s Most <br />
          <span className="text-[#F97A1E]">Beautiful Destinations</span>
        </h1>
        <p className="text-center text-base lg:px-44 md:px-40 my-4">
          From tropical paradises to cultural capitals, discover hand-picked
          destinations that offer unforgettable experiences.
        </p>

        {/* SEARCH BAR */}
        <div className="w-full max-w-lg mx-auto my-8">
          <input
            type="text"
            placeholder="Search destinations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-[#F97A1E] outline-none"
          />
        </div>

        {/* LOADING STATE */}
        {loading ? (
          <p className="text-center text-gray-500 py-10">
            Loading destinations...
          </p>
        ) : (
          <div className="grid grid-cols-4 gap-6 my-8">
            {filteredDestinations.length > 0 ? (
              filteredDestinations.map((item, index) => (
                <div
                  key={index}
                  className="w-[100%] h-80 perspective lg:col-span-1 md:col-span-2 col-span-4"
                  onClick={() => handleFlip(item._id)}
                >
                  <div
                    className={`relative w-[100%] h-80 transition-transform duration-700 border border-gray-200 shadow-[0_4px_10px_rgba(0,0,0,0.05)] rounded-3xl cursor-pointer preserve-3d ${
                      flipped[item._id] ? "rotate-y-180" : ""
                    }`}
                  >
                    {/* FRONT SIDE */}
                    <div className="absolute inset-0 rounded-xl backface-hidden text-white font-bold text-xl">
                      <img
                        className="w-full h-[88%] p-2 rounded-3xl"
                        src={item.image}
                        alt={item.name}
                      />
                      <p className="pb-4 text-center text-[#2D464C]">
                        {item.name}
                      </p>
                    </div>

                    {/* BACK SIDE */}
                    <div className="absolute inset-0 flex flex-col items-center justify-between rounded-xl text-[#2D464C] bg-white shadow-xl backface-hidden rotate-y-180 p-4">
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
                          <b>Price:</b> AED {item.price}
                        </p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(
                            `/enquiry?service=Destinations&destination=${encodeURIComponent(
                              item._id
                            )}`
                          );
                        }}
                        className="mt-3 text-white px-3 py-2 rounded text-sm w-[60%] bg-black"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-4 text-center text-gray-500">
                No destinations found.
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
