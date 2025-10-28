// "use client";
// import React, { useState, useEffect } from "react";

// function Page() {
//   const [carBrands, setCarBrands] = useState([]);
//   const [selectedBrand, setSelectedBrand] = useState(null);
// //  const carBrands = [
// //    {
// //      id: "bmw",
// //      name: "BMW",
// //      logo: "/bmw.png",
// //      carImage: "/bmw-coupe.png",
// //      description:
// //        "BMW is a German manufacturer of premium automobiles, known for producing vehicles with a focus on sportiness, luxury, and advanced technology.",
// //      models: ["SUV", "Sedan", "Coupe", "Hatchback"]
// //    },
// //    {
// //      id: "audi",
// //      name: "Audi",
// //      logo: "/audi.png",
// //      carImage: "/audi-r8.png",
// //      description:
// //        "Audi is renowned for its signature Quattro all-wheel-drive system and a lineup that blends performance, comfort, and technology.",
// //      models: ["Sedan", "Coupe", "SUV"]
// //    },
// //    {
// //      id: "lamborghini",
// //      name: "Lamborghini",
// //      logo: "/lamborghini.png",
// //      carImage: "/lamborghini.png",
// //      description:
// //        "Lamborghini is an Italian manufacturer famous for high-performance supercars featuring aggressive styling and powerful engines.",
// //      models: ["Supercar", "Hypercar", "SUV"]
// //    },
// //    {
// //      id: "mercedes",
// //      name: "Mercedes-Benz",
// //      logo: "/mercedes.png",
// //      carImage: "/mercedes-s-class.png",
// //      description:
// //        "Mercedes-Benz builds luxury automobiles known for their comfort, cutting-edge safety, and premium craftsmanship.",
// //      models: ["Sedan", "SUV", "Coupe", "Convertible"]
// //    },
// //    {
// //      id: "porsche",
// //      name: "Porsche",
// //      logo: "/porsche.png",
// //      carImage: "/porsche-911.png",
// //      description:
// //        "Porsche creates precision-engineered sports cars that deliver exceptional handling and performance.",
// //      models: ["Coupe", "SUV", "Convertible"]
// //    },
// //    {
// //      id: "tesla",
// //      name: "Tesla",
// //      logo: "/tesla.png",
// //      carImage: "/tesla-model-s.png",
// //      description:
// //        "Tesla leads the electric revolution with high-tech EVs offering long range, advanced self-driving tech, and instant acceleration.",
// //      models: ["Sedan", "SUV"]
// //    }
// //  ];

//   useEffect(() => {
//     async function fetchData() {
//       const res = await fetch("/api/cars");
//       const data = await res.json();
//       setCarBrands(data);
//       console.log(data)
//     }
//     fetchData();
//   }, []);

//   return (
//     <div className="lg:py-20 px-4 lg:px-40 grid grid-cols-12 ">
//       <h1 className="col-span-12 text-[#2D464C] text-4xl lg:text-7xl font-black text-center mb-8">
//         Car Rentals
//       </h1>

//       {carBrands.map((brand) => (
//         <React.Fragment key={brand._id}>
//           {/* {console.log(brand)} */}
//           {/* Brand Logo Card */}
//           <div
//             onClick={() =>
//               setSelectedBrand(selectedBrand === brand._id ? null : brand._id)
//             }
//             className={`lg:col-span-4 col-span-12 mx-2 p-4 mt-2 cursor-pointer transition-all ${
//               selectedBrand === brand._id
//                 ? "bg-[#F97A1E] rounded-t-3xl"
//                 : "bg-[#D9D9D9] rounded-3xl"
//             }`}
//           >
//             <img src={brand.logo.url} className="w-full " />
//           </div>

//           {/* Details for selected brand */}
//           {selectedBrand === brand._id && (
//             <div className="col-span-12 bg-[#F97A1E] p-4 grid grid-cols-12 gap-4 rounded-b-3xl mx-2 transition-all">
//               <img src={brand.image.url} className="col-span-6 h-72" />

//               <div className="col-span-6 font-bold flex flex-col justify-center">
//                 <p className="text-lg my-4">{brand.description}</p>

//                 <div className="flex items-center mb-10">
//                   <p>Models:</p>
//                   <ul className="flex gap-2 mx-2">
//                     {brand.models.map((model, i) => (
//                       <li
//                         key={i}
//                         className="bg-orange-300 px-4 py-1 rounded-2xl"
//                       >
//                         {model}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <button className="px-6 py-2 bg-black text-white rounded-full w-[30vw]">
//                   Ride Now
//                 </button>
//               </div>
//             </div>
//           )}
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }

// export default Page;

"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function Page() {
  const [carBrands, setCarBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/cars");
      const data = await res.json();
      setCarBrands(data);
    }
    fetchData();
  }, []);

  const handleRideNow = (brandName) => {
    // Navigate to enquiry page with preselected fields
    router.push(
      `/enquiry?service=Car%20Rentals&brand=${encodeURIComponent(brandName)}`
    );
  };

  return (
    <div className="py-12 px-4 lg:px-40">
      <h1 className="text-[#2D464C] text-4xl sm:text-5xl lg:text-7xl font-black text-center mb-8">
        Car Rentals
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        {carBrands.map((brand) => (
          <React.Fragment key={brand._id}>
            {/* Brand Logo Card */}
            <div
              onClick={() =>
                setSelectedBrand(selectedBrand === brand._id ? null : brand._id)
              }
              className={`mx-2 p-4 mt-2 cursor-pointer transition-all duration-300 ${
                selectedBrand === brand._id
                  ? "bg-[#F97A1E] rounded-t-3xl"
                  : "bg-[#D9D9D9] rounded-3xl"
              }`}
            >
              <img
                src={brand.logo.url}
                className="w-full h-24 sm:h-32 object-contain"
                alt={brand.name}
              />
            </div>

            {/* Details for selected brand */}
            {selectedBrand === brand._id && (
              <div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-[#F97A1E] p-4 grid grid-cols-1 sm:grid-cols-12 gap-4 rounded-b-3xl mx-2 transition-all duration-1000">
                <img
                  src={brand.image.url}
                  className="col-span-1 sm:col-span-6 w-full h-48 sm:h-64 object-cover rounded"
                  alt={brand.name}
                />
                <div className="col-span-1 sm:col-span-6 font-bold flex flex-col justify-center mt-4 sm:mt-0">
                  <p className="text-md sm:text-lg lg:text-xl my-2 sm:my-4">
                    {brand.description}
                  </p>

                  <div className="flex flex-wrap items-center mb-4 sm:mb-6">
                    <p className="mr-2">Models:</p>
                    <ul className="flex flex-wrap gap-2">
                      {brand.models.map((model, i) => (
                        <li
                          key={i}
                          className="bg-orange-300 px-3 py-1 rounded-2xl text-sm sm:text-base"
                        >
                          {model}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleRideNow(brand.name)}
                    className="px-6 py-2 bg-black text-white rounded-full w-full sm:w-auto text-center"
                  >
                    Ride Now
                  </button>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Page;

