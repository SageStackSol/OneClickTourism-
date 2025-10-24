// // "use client";
// // import React, { useState } from "react";

// // function Page() {
// //   const [bmw, setBmw] = useState(false);
// //   const [lamborghini, setLamborghini] = useState(false);
// //   const [benz, setBenz] = useState(false);
// //   const [porsche, setPorsche] = useState(false);
// //   const [ferrari, setFerrari] = useState(false);
// //   const [rr, setRr] = useState(false);
// //   const [audi, setAudi] = useState(false);

// //   return (
// //     <>
// //   <div className="lg:py-20 md:py-20 py-16 lg:px-40 md:px-40 px-4 lg:grid md:grid grid grid-cols-12 ">
// //     <h1 className="text-[#2D464C] lg:text-7xl md:text-7xl text-3xl font-black leading-none text-center lg:mb-8 md:mb-8 col-span-12">
// //         Car Rentals
// //       </h1>
// //       <div
// //         onClick={() => {
// //           setBmw(!bmw);
// //           setBenz(false);
// //           setLamborghini(false);
// //           setPorsche(false);
// //           setFerrari(false);
// //           setRr(false);
// //           setAudi(false);
// //         }}
// //         className={`lg:col-span-4 md:col-span-4 col-span-12 mx-2  p-4 mt-2 transition-all duration-100 ease-in-out ${
// //           bmw ? "bg-[#F97A1E] rounded-t-3xl" : "bg-[#D9D9D9] rounded-3xl"
// //         }`}
// //       >
// //         <img src="./bmw.png" />
// //       </div>

// //       <div
// //         onClick={() => {
// //           setBmw(false);
// //           setBenz(false);
// //           setLamborghini(!lamborghini);
// //           setPorsche(false);
// //           setFerrari(false);
// //           setRr(false);
// //           setAudi(false);
// //         }}
// //         className={`lg:col-span-4 md:col-span-4 col-span-12 mx-2  p-4 ${
// //           lamborghini
// //             ? "bg-[#F97A1E] rounded-t-3xl"
// //             : "bg-[#D9D9D9] rounded-3xl"
// //         }`}
// //       >
// //         <img src="./lamborghini.png" />
// //       </div>

// //       <div
// //         onClick={() => {
// //           setBmw(false);
// //           setBenz(!benz);
// //           setLamborghini(false);
// //           setPorsche(false);
// //           setFerrari(false);
// //           setRr(false);
// //           setAudi(false);
// //         }}
// //         className={`lg:col-span-4 md:col-span-4 col-span-12 mx-2  p-4 ${
// //           benz ? "bg-[#F97A1E] rounded-t-3xl" : "bg-[#D9D9D9] rounded-3xl"
// //         }`}
// //       >
// //         <img src="./benz.png" />
// //       </div>
// //       {/* {bmw && ( */}
// //       <div className="col-span-12">

    
// //         <div className={`" bg-[#F97A1E] overflow-hidden grid grid-cols-12 gap-4 rounded-b-3xl mx-2 rounded-r-3xl transition-all duration-1000 ease-in-out ${bmw ?"max-h-full opacity-100 p-4 w-[100%] " : "max-h-0 opacity-0"}"`}>
// //           <img src="./bmw-coupe.png" className=" col-span-6" />
// //            <div className="col-span-6 font-bold flex items-center ">
// //            <div>
// //   <p className="text-lg my-4">
// //               BMW is a German manufacturer of premium automobiles, known for
// //               producing vehicles with a focus on sportiness, luxury, and
// //               advanced technology
// //             </p>
// //              <div className="flex items-center mb-10">
// //               <p>Models: </p>
// //               <ul className="flex gap-2 mx-2">
// //                 <li className="bg-orange-300 px-4 py-1 rounded-2xl">SUV</li>
// //                 <li className="bg-orange-300 px-4 py-1 rounded-2xl">Sedan</li>
// //                 <li className="bg-orange-300 px-4 py-1 rounded-2xl">Hacthback</li>
// //               </ul>
// //             </div>
// //             <button className="px-6 py-2 bg-black text-white rounded-full w-[30vw]">
// //               Ride Now
// //             </button>

// //            </div>
          
// //           </div>
// //         </div>
// //           </div>
// //       {/* )} */}
// //       {lamborghini && (
// //         <div className="col-span-12 bg-[#F97A1E] p-4 grid grid-cols-12 gap-4 rounded-3xl">
// //           <img src="./bmw-coupe.png" className=" col-span-6" />
// //           <div className="col-span-6 font-bold flex items-center ">
// //            <div>
// //   <p className="text-lg my-4">
// //               BMW is a German manufacturer of premium automobiles, known for
// //               producing vehicles with a focus on sportiness, luxury, and
// //               advanced technology
// //             </p>
// //              <div className="flex items-center mb-10">
// //               <p>Models: </p>
// //               <ul className="flex gap-2 mx-2">
// //                 <li className="bg-orange-300 px-4 py-1 rounded-2xl">SUV</li>
// //                 <li className="bg-orange-300 px-4 py-1 rounded-2xl">Sedan</li>
// //                 <li className="bg-orange-300 px-4 py-1 rounded-2xl">Hacthback</li>
// //               </ul>
// //             </div>
// //             <button className="px-6 py-2 bg-black text-white rounded-full w-[30vw]">
// //               Ride Now
// //             </button>

// //            </div>
          
// //           </div>
// //         </div>
// //       )}

// //       {benz && (
// //         <div className="col-span-12 bg-[#F97A1E] p-4 grid grid-cols-12 gap-4  mx-2 rounded-b-3xl rounded-l-3xl">
// //           <img src="./bmw-coupe.png" className=" col-span-6" />
// //           <div className="col-span-6 font-bold flex flex-col justify-evenly items-center">
// //             <div className="flex justify-center items-center">
// //               <ul className="flex gap-4">
// //                 <li>SUV</li>
// //                 <li>Sedan</li>
// //                 <li>Hacthback</li>
// //               </ul>
// //             </div>
// //             <p className="text-lg text-center">
// //               BMW is a German manufacturer of premium automobiles, known for
// //               producing vehicles with a focus on sportiness, luxury, and
// //               advanced technology
// //             </p>
// //             <button className="px-6 py-2 bg-black text-white rounded-full w-[30vw]">
// //               Ride Now
// //             </button>
// //           </div>
// //         </div>
// //       )}

// //       <div
// //         onClick={() => {
// //           setBmw(false);
// //           setBenz(false);
// //           setLamborghini(false);
// //           setPorsche(!porsche);
// //           setFerrari(false);
// //           setRr(false);
// //           setAudi(false);
// //         }}
// //         className={`lg:col-span-4 md:col-span-4 col-span-12 mx-2  p-4 mt-2 ${
// //           porsche ? "bg-[#F97A1E] rounded-t-3xl" : "bg-[#D9D9D9] rounded-3xl"
// //         }`}
// //       >
// //         <img src="./porsche.png" />
// //       </div>
// //       <div
// //         onClick={() => {
// //           setBmw(false);
// //           setBenz(false);
// //           setLamborghini(false);
// //           setPorsche(false);
// //           setFerrari(!ferrari);
// //           setRr(false);
// //           setAudi(false);
// //         }}
// //         className={`lg:col-span-4 md:col-span-4 col-span-12 mx-2  p-4 mt-2 ${
// //           ferrari ? "bg-[#F97A1E] rounded-t-3xl" : "bg-[#D9D9D9] rounded-3xl"
// //         }`}
// //       >
// //         <img src="./ferrari.png" />
// //       </div>
// //       <div
// //         onClick={() => {
// //           setBmw(false);
// //           setBenz(false);
// //           setLamborghini(false);
// //           setPorsche(false);
// //           setFerrari(false);
// //           setRr(!rr);
// //           setAudi(false);
// //         }}
// //         className={`lg:col-span-4 md:col-span-4 col-span-12 mx-2  p-4 mt-2 ${
// //           rr ? "bg-[#F97A1E] rounded-t-3xl" : "bg-[#D9D9D9] rounded-3xl"
// //         }`}
// //       >
// //         <img src="./rr.png" />
// //       </div>

// //       {porsche && (
// //         <div className="col-span-12 bg-[#F97A1E] p-4 grid grid-cols-12 gap-4 rounded-b-3xl mx-2 rounded-r-3xl">
// //           <img src="./bmw-coupe.png" className=" col-span-6" />
// //           <div className="col-span-6 font-bold flex flex-col justify-evenly items-center">
// //             <div className="flex justify-center items-center">
// //               <ul className="flex gap-4">
// //                 <li>SUV</li>
// //                 <li>Sedan</li>
// //                 <li>Hacthback</li>
// //               </ul>
// //             </div>
// //             <p className="text-lg text-center">
// //               BMW is a German manufacturer of premium automobiles, known for
// //               producing vehicles with a focus on sportiness, luxury, and
// //               advanced technology
// //             </p>
// //             <button className="px-6 py-2 bg-black text-white rounded-full w-[30vw]">
// //               Ride Now
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //       {ferrari && (
// //         <div className="col-span-12 bg-[#F97A1E] p-4 grid grid-cols-12 gap-4 rounded-3xl">
// //           <img src="./bmw-coupe.png" className=" col-span-6" />
// //           <div className="col-span-6 font-bold flex flex-col justify-evenly items-center">
// //             <div className="flex justify-center items-center">
// //               <ul className="flex gap-4">
// //                 <li>SUV</li>
// //                 <li>Sedan</li>
// //                 <li>Hacthback</li>
// //               </ul>
// //             </div>
// //             <p className="text-lg text-center">
// //               BMW is a German manufacturer of premium automobiles, known for
// //               producing vehicles with a focus on sportiness, luxury, and
// //               advanced technology
// //             </p>
// //             <button className="px-6 py-2 bg-black text-white rounded-full w-[30vw]">
// //               Ride Now
// //             </button>
// //           </div>
// //         </div>
// //       )}

// //       {rr && (
// //         <div className="col-span-12 bg-[#F97A1E] p-4 grid grid-cols-12 gap-4  mx-2 rounded-b-3xl rounded-l-3xl">
// //           <img src="./bmw-coupe.png" className=" col-span-6" />
// //           <div className="col-span-6 font-bold flex flex-col justify-evenly items-center">
// //             <div className="flex justify-center items-center">
// //               <ul className="flex gap-4">
// //                 <li>SUV</li>
// //                 <li>Sedan</li>
// //                 <li>Hacthback</li>
// //               </ul>
// //             </div>
// //             <p className="text-lg text-center">
// //               BMW is a German manufacturer of premium automobiles, known for
// //               producing vehicles with a focus on sportiness, luxury, and
// //               advanced technology
// //             </p>
// //             <button className="px-6 py-2 bg-black text-white rounded-full w-[30vw]">
// //               Ride Now
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //       <div
// //         onClick={() => {
// //           setBmw(false);
// //           setBenz(false);
// //           setLamborghini(false);
// //           setPorsche(false);
// //           setFerrari(false);
// //           setRr(false);
// //           setAudi(!audi);
// //         }}
// //         className={`lg:col-span-4 md:col-span-4 col-span-12 mx-2  p-4 mt-2 ${
// //           audi ? "bg-[#F97A1E] rounded-t-3xl" : "bg-[#D9D9D9] rounded-3xl"
// //         }`}
// //       >
// //         <img src="./audi.png" />
// //       </div>
// //       {audi && (
// //         <div className="col-span-12 bg-[#F97A1E] p-4 grid grid-cols-12 gap-4 rounded-b-3xl mx-2 rounded-r-3xl">
// //           <img src="./bmw-coupe.png" className=" col-span-6" />
// //           <div className="col-span-6 font-bold flex flex-col justify-evenly items-center">
// //             <div className="flex justify-center items-center">
// //               <ul className="flex gap-4">
// //                 <li>SUV</li>
// //                 <li>Sedan</li>
// //                 <li>Hacthback</li>
// //               </ul>
// //             </div>
// //             <p className="text-lg text-center">
// //               BMW is a German manufacturer of premium automobiles, known for
// //               producing vehicles with a focus on sportiness, luxury, and
// //               advanced technology
// //             </p>
// //             <button className="px-6 py-2 bg-black text-white rounded-full w-[30vw]">
// //               Ride Now
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </div>

// //     </>
  
// //   );
// // }

// // export default Page;



// // // {/* mobile view */}
// // //       <div className="lg:hidden md:hidden py-16 grid grid-cols-1 gap-2">

// // //          <div
// // //         onClick={() => {
// // //           setBmw(!bmw);
// // //           setBenz(false);
// // //           setLamborghini(false);
// // //           setPorsche(false);
// // //           setFerrari(false);
// // //           setRr(false);
// // //           setAudi(false);
// // //         }}
// // //         className={`lg:col-span-4 md:col-span-4 col-span-12 mx-2  p-4 mt-2 ${
// // //           bmw ? "bg-[#F97A1E] rounded-t-3xl" : "bg-[#D9D9D9] rounded-3xl"
// // //         }`}
// // //       >
// // //         <img src="./bmw.png" />
// // //       </div>
// // //        <div
// // //         onClick={() => {
// // //           setBmw(false);
// // //           setBenz(false);
// // //           setLamborghini(!lamborghini);
// // //           setPorsche(false);
// // //           setFerrari(false);
// // //           setRr(false);
// // //           setAudi(false);
// // //         }}
// // //         className={`lg:col-span-4 md:col-span-4 col-span-12 mx-2  p-4 ${
// // //           lamborghini
// // //             ? "bg-[#F97A1E] rounded-3xl"
// // //             : "bg-[#D9D9D9] rounded-3xl"
// // //         }`}
// // //       >
// // //         <img src="./lamborghini.png" />
// // //       </div>

// // //       <div
// // //         onClick={() => {
// // //           setBmw(false);
// // //           setBenz(!benz);
// // //           setLamborghini(false);
// // //           setPorsche(false);
// // //           setFerrari(false);
// // //           setRr(false);
// // //           setAudi(false);
// // //         }}
// // //         className={`lg:col-span-4 md:col-span-4 col-span-12 mx-2  p-4 ${
// // //           benz ? "bg-[#F97A1E] rounded-3xl" : "bg-[#D9D9D9] rounded-3xl"
// // //         }`}
// // //       >
// // //         <img src="./benz.png" />
// // //       </div>
// // //          <div
// // //         onClick={() => {
// // //           setBmw(false);
// // //           setBenz(false);
// // //           setLamborghini(false);
// // //           setPorsche(!porsche);
// // //           setFerrari(false);
// // //           setRr(false);
// // //           setAudi(false);
// // //         }}
// // //         className={`lg:col-span-4 md:col-span-4 col-span-12 mx-2  p-4 mt-2 ${
// // //           porsche ? "bg-[#F97A1E] rounded-3xl" : "bg-[#D9D9D9] rounded-3xl"
// // //         }`}
// // //       >
// // //         <img src="./porsche.png" />
// // //       </div>
// // //       <div
// // //         onClick={() => {
// // //           setBmw(false);
// // //           setBenz(false);
// // //           setLamborghini(false);
// // //           setPorsche(false);
// // //           setFerrari(!ferrari);
// // //           setRr(false);
// // //           setAudi(false);
// // //         }}
// // //         className={`lg:col-span-4 md:col-span-4 col-span-12 mx-2  p-4 mt-2 ${
// // //           ferrari ? "bg-[#F97A1E] rounded-3xl" : "bg-[#D9D9D9] rounded-3xl"
// // //         }`}
// // //       >
// // //         <img src="./ferrari.png" />
// // //       </div>
// // //       <div
// // //         onClick={() => {
// // //           setBmw(false);
// // //           setBenz(false);
// // //           setLamborghini(false);
// // //           setPorsche(false);
// // //           setFerrari(false);
// // //           setRr(!rr);
// // //           setAudi(false);
// // //         }}
// // //         className={`lg:col-span-4 md:col-span-4 col-span-12 mx-2  p-4 mt-2 ${
// // //           rr ? "bg-[#F97A1E] rounded-3xl" : "bg-[#D9D9D9] rounded-3xl"
// // //         }`}
// // //       >
// // //         <img src="./rr.png" />
// // //       </div>
// // //        <div
// // //         onClick={() => {
// // //           setBmw(false);
// // //           setBenz(false);
// // //           setLamborghini(false);
// // //           setPorsche(false);
// // //           setFerrari(false);
// // //           setRr(false);
// // //           setAudi(!audi);
// // //         }}
// // //         className={`lg:col-span-4 md:col-span-4 col-span-12 mx-2  p-4 mt-2 ${
// // //           audi ? "bg-[#F97A1E] rounded-3xl" : "bg-[#D9D9D9] rounded-3xl"
// // //         }`}
// // //       >
// // //         <img src="./audi.png" />
// // //       </div>
// // //       </div>
// "use client";
// import React, { useState, useEffect } from "react";

// function Page() {
//   // const [carBrands, setCarBrands] = useState([]);
//   const [selectedBrand, setSelectedBrand] = useState(null);
// // const carBrands = [
// //   {
// //     id: "bmw",
// //     name: "BMW",
// //     logo: "/bmw.png",
// //     carImage: "/bmw-coupe.png",
// //     description:
// //       "BMW is a German manufacturer of premium automobiles, known for producing vehicles with a focus on sportiness, luxury, and advanced technology.",
// //     models: ["SUV", "Sedan", "Hatchback"]
// //   },
// //   {
// //     id: "lamborghini",
// //     name: "Lamborghini",
// //     logo: "/lamborghini.png",
// //     carImage: "/lamborghini.png",
// //     description:
// //       "Lamborghini is an Italian manufacturer famous for high-performance sports cars with extreme styling.",
// //     models: ["Sport", "Hypercar"]
// //   },
// // ];

//  const carBrands = [
//   {
//     id: "bmw",
//     name: "BMW",
//     logo: "/bmw.png",
//     carImage: "/bmw-coupe.png",
//     description:
//       "BMW is a German manufacturer of premium automobiles, known for producing vehicles with a focus on sportiness, luxury, and advanced technology.",
//     models: ["SUV", "Sedan", "Coupe", "Hatchback"]
//   },
//   {
//     id: "audi",
//     name: "Audi",
//     logo: "/audi.png",
//     carImage: "/audi-r8.png",
//     description:
//       "Audi is renowned for its signature Quattro all-wheel-drive system and a lineup that blends performance, comfort, and technology.",
//     models: ["Sedan", "Coupe", "SUV"]
//   },
//   {
//     id: "lamborghini",
//     name: "Lamborghini",
//     logo: "/lamborghini.png",
//     carImage: "/lamborghini.png",
//     description:
//       "Lamborghini is an Italian manufacturer famous for high-performance supercars featuring aggressive styling and powerful engines.",
//     models: ["Supercar", "Hypercar", "SUV"]
//   },
//   {
//     id: "mercedes",
//     name: "Mercedes-Benz",
//     logo: "/mercedes.png",
//     carImage: "/mercedes-s-class.png",
//     description:
//       "Mercedes-Benz builds luxury automobiles known for their comfort, cutting-edge safety, and premium craftsmanship.",
//     models: ["Sedan", "SUV", "Coupe", "Convertible"]
//   },
//   {
//     id: "porsche",
//     name: "Porsche",
//     logo: "/porsche.png",
//     carImage: "/porsche-911.png",
//     description:
//       "Porsche creates precision-engineered sports cars that deliver exceptional handling and performance.",
//     models: ["Coupe", "SUV", "Convertible"]
//   },
//   {
//     id: "tesla",
//     name: "Tesla",
//     logo: "/tesla.png",
//     carImage: "/tesla-model-s.png",
//     description:
//       "Tesla leads the electric revolution with high-tech EVs offering long range, advanced self-driving tech, and instant acceleration.",
//     models: ["Sedan", "SUV"]
//   }
// ];


//   // useEffect(() => {
//   //   // Simulate data fetch from backend API
//   //   async function fetchData() {
//   //     const res = await fetch("/api/cars"); // example endpoint
//   //     const data = await res.json();
//   //     setCarBrands(data);
//   //   }
//   //   fetchData();
//   // }, []);



//   return (
//     <div className="lg:py-20 px-4 lg:px-40 grid grid-cols-12">
//       <h1 className="col-span-12 text-[#2D464C] text-4xl lg:text-7xl font-black text-center mb-8">
//         Car Rentals
//       </h1>

//       {/* Logos Grid */}
//       {carBrands.map((brand) => (
//         <div
//           key={brand.id}
//           onClick={() =>
//             setSelectedBrand(selectedBrand === brand.id ? null : brand.id)
//           }
//           className={`lg:col-span-4 col-span-12 mx-2 p-4 mt-2 transition-all ${
//             selectedBrand === brand.id
//               ? "bg-[#F97A1E] rounded-t-3xl"
//               : "bg-[#D9D9D9] rounded-3xl"
//           }`}
//         >
//           <img src={brand.logo} className="w-full" />
//         </div>
//       ))}

//       {/* Selected Brand Details */}
//       {selectedBrand && (
//         <div className="col-span-12 bg-[#F97A1E] p-4 grid grid-cols-12 gap-4 rounded-b-3xl mx-2 transition-all">
//           {carBrands
//             .filter((brand) => brand.id === selectedBrand)
//             .map((brand) => (
//               <React.Fragment key={brand.id}>
//                 <img src={brand.carImage} className="col-span-6" />

//                 <div className="col-span-6 font-bold flex flex-col justify-center">
//                   <p className="text-lg my-4">{brand.description}</p>

//                   <div className="flex items-center mb-10">
//                     <p>Models:</p>
//                     <ul className="flex gap-2 mx-2">
//                       {brand.models.map((model, i) => (
//                         <li
//                           key={i}
//                           className="bg-orange-300 px-4 py-1 rounded-2xl"
//                         >
//                           {model}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   <button className="px-6 py-2 bg-black text-white rounded-full w-[30vw]">
//                     Ride Now
//                   </button>
//                 </div>
//               </React.Fragment>
//             ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Page;
"use client";
import React, { useState, useEffect } from "react";

function Page() {
  const [carBrands, setCarBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
//  const carBrands = [
//    {
//      id: "bmw",
//      name: "BMW",
//      logo: "/bmw.png",
//      carImage: "/bmw-coupe.png",
//      description:
//        "BMW is a German manufacturer of premium automobiles, known for producing vehicles with a focus on sportiness, luxury, and advanced technology.",
//      models: ["SUV", "Sedan", "Coupe", "Hatchback"]
//    },
//    {
//      id: "audi",
//      name: "Audi",
//      logo: "/audi.png",
//      carImage: "/audi-r8.png",
//      description:
//        "Audi is renowned for its signature Quattro all-wheel-drive system and a lineup that blends performance, comfort, and technology.",
//      models: ["Sedan", "Coupe", "SUV"]
//    },
//    {
//      id: "lamborghini",
//      name: "Lamborghini",
//      logo: "/lamborghini.png",
//      carImage: "/lamborghini.png",
//      description:
//        "Lamborghini is an Italian manufacturer famous for high-performance supercars featuring aggressive styling and powerful engines.",
//      models: ["Supercar", "Hypercar", "SUV"]
//    },
//    {
//      id: "mercedes",
//      name: "Mercedes-Benz",
//      logo: "/mercedes.png",
//      carImage: "/mercedes-s-class.png",
//      description:
//        "Mercedes-Benz builds luxury automobiles known for their comfort, cutting-edge safety, and premium craftsmanship.",
//      models: ["Sedan", "SUV", "Coupe", "Convertible"]
//    },
//    {
//      id: "porsche",
//      name: "Porsche",
//      logo: "/porsche.png",
//      carImage: "/porsche-911.png",
//      description:
//        "Porsche creates precision-engineered sports cars that deliver exceptional handling and performance.",
//      models: ["Coupe", "SUV", "Convertible"]
//    },
//    {
//      id: "tesla",
//      name: "Tesla",
//      logo: "/tesla.png",
//      carImage: "/tesla-model-s.png",
//      description:
//        "Tesla leads the electric revolution with high-tech EVs offering long range, advanced self-driving tech, and instant acceleration.",
//      models: ["Sedan", "SUV"]
//    }
//  ];

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/cars");
      const data = await res.json();
      setCarBrands(data);
      console.log(data)
    }
    fetchData();
  }, []);

  return (
    <div className="lg:py-20 px-4 lg:px-40 grid grid-cols-12 ">
      <h1 className="col-span-12 text-[#2D464C] text-4xl lg:text-7xl font-black text-center mb-8">
        Car Rentals
      </h1>

      {carBrands.map((brand) => (
        <React.Fragment key={brand._id}>
          {/* {console.log(brand)} */}
          {/* Brand Logo Card */}
          <div
            onClick={() =>
              setSelectedBrand(selectedBrand === brand._id ? null : brand._id)
            }
            className={`lg:col-span-4 col-span-12 mx-2 p-4 mt-2 cursor-pointer transition-all ${
              selectedBrand === brand._id
                ? "bg-[#F97A1E] rounded-t-3xl"
                : "bg-[#D9D9D9] rounded-3xl"
            }`}
          >
            <img src={brand.logo.url} className="w-full " />
          </div>

          {/* Details for selected brand */}
          {selectedBrand === brand._id && (
            <div className="col-span-12 bg-[#F97A1E] p-4 grid grid-cols-12 gap-4 rounded-b-3xl mx-2 transition-all">
              <img src={brand.image.url} className="col-span-6 h-72" />

              <div className="col-span-6 font-bold flex flex-col justify-center">
                <p className="text-lg my-4">{brand.description}</p>

                <div className="flex items-center mb-10">
                  <p>Models:</p>
                  <ul className="flex gap-2 mx-2">
                    {brand.models.map((model, i) => (
                      <li
                        key={i}
                        className="bg-orange-300 px-4 py-1 rounded-2xl"
                      >
                        {model}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="px-6 py-2 bg-black text-white rounded-full w-[30vw]">
                  Ride Now
                </button>
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Page;
