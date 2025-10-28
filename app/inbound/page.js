

// "use client";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

// export default function FlipCards() {
//   const router = useRouter();

//   const [flipped, setFlipped] = useState({});
//   const [inbounds, setInbounds] = useState([]);
//   const [filteredInbounds, setFilteredInbounds] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedTags, setSelectedTags] = useState([]); // ✅ multiple tags
//   const [categoriesMenuStatus,seCategoriesMenuStatus] = useState(false)

//   const categoryTags = [
//     "Desert Experience",
//     "Water Adventures",
//     "City Tour",
//     "Attraction & Landmark",
//     "Adventure & Thrill",
//     "Wild Life & Nature",
//   ];
//     const timeTags = [
//    "Half Day",
//    "Full Day",
//    "overnight"

//   ];
//    const experienceTags = [
//    "Budget",
//    "Premium",
//    "Luxury"

//   ];


//   // Fetch all inbound items
//   useEffect(() => {
//     const fetchInbounds = async () => {
//       try {
//         const res = await fetch("/api/inbound");
//         const data = await res.json();
//         setInbounds(data);
//         console.log(data);
//         setFilteredInbounds(data); // initially all shown
//       } catch (error) {
//         console.error("Failed to load inbound items", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchInbounds();
//   }, []);

//   // ✅ Filter whenever tags or data changes
//   useEffect(() => {
//     if (selectedTags.length === 0) {
//       setFilteredInbounds(inbounds);
//     } else {
//       const filtered = inbounds.filter((item) =>
//         selectedTags.every((tag) => item.tags.includes(tag))
//       );
//       setFilteredInbounds(filtered);
//     }
//   }, [selectedTags, inbounds]);

//   const toggleTag = (tag) => {
//     setSelectedTags(
//       (prev) =>
//         prev.includes(tag)
//           ? prev.filter((t) => t !== tag) // remove if already selected
//           : [...prev, tag] // add if not selected
//     );
//   };

//   const handleFlip = (id) => {
//     setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
//   };

//   return (
//     <>
//       <div
//         style={{ background: "url('/inbound-bg.png') center/cover no-repeat" }}
//         className="h-screen w-screen bg-cover bg-center flex flex-col-reverse"
//       >
//         <div className="bg-black/50 text-white lg:flex md:flex p-10 gap-20">
//           <h1 className="lg:text-7xl md:text-7xl text-4xl font-bold">Dubai</h1>
//           <p className="text-lg">
//             Did you know? Dubai is home to the world’s largest flower garden,
//             the Dubai Miracle Garden, with over 150 million blooming flowers
//             arranged in incredible designs including life-sized airplanes
//             covered entirely in flowers!{" "}
//           </p>
//         </div>
//       </div>

//       <div className="lg:py-20 md:py-20 py-16 lg:px-20 md:px-20 px-4 text-[#2D464C] -z-0 lg:mb-0 md:mb-0 mb-32">
//         <h1 className="lg:text-7xl md:text-7xl text-3xl font-extrabold text-center">
//           Explore Dubai&apos;s Most <br />
//           <span className="text-[#F97A1E]">Beautiful Destinations</span>
//         </h1>

//         {/* --- TAG FILTER SIDEBAR --- */}
//         <div className="grid grid-cols-4 h-screen py-12 gap-6">
//           <div className="lg:col-span-1 md:col-span-1 sm:block hidden sticky h-screen">
//                 {/* --- SEARCH BAR --- */}
// <div className="mb-2">
//   <input
//     type="text"
//     placeholder="Search destinations..."
//     onChange={(e) => {
//       const searchTerm = e.target.value.toLowerCase();
//       if (!searchTerm) {
//         setFilteredInbounds(
//           selectedTags.length === 0
//             ? inbounds
//             : inbounds.filter((item) =>
//                 selectedTags.every((tag) => item.tags.includes(tag))
//               )
//         );
//         return;
//       }

//       // filter by name + active tags
//       const filtered = inbounds.filter((item) => {
//         const matchesName = item.name.toLowerCase().includes(searchTerm);
//         const matchesTags =
//           selectedTags.length === 0 ||
//           selectedTags.every((tag) => item.tags.includes(tag));
//         return matchesName && matchesTags;
//       });

//       setFilteredInbounds(filtered);
//     }}
//     className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-[#F97A1E] outline-none"
//   />
// </div>
//             <div className="bg-white border border-gray-200 px-4 pb-8 pt-4 mb-2 rounded-lg">
//               <h2 className="text-center text-lg font-bold mb-6">Categories</h2>
//               <div className="flex gap-2 flex-wrap">
//                 {categoryTags.map((tag, index) => (
//                   <button
//                     key={index}
//                     onClick={() => toggleTag(tag)}
//                     className={`px-3 py-1 rounded-2xl border ${
//                       selectedTags.includes(tag)
//                         ? "bg-[#F97A1E] text-white border-[#F97A1E]"
//                         : "bg-orange-100 text-black border-transparent"
//                     }`}
//                   >
//                     {tag}
//                   </button>
//                 ))}
//               </div>
//             </div>

//              <div className="bg-white border border-gray-200 px-4 pb-8 pt-4 mb-2 rounded-lg">
//               <h2 className="text-center text-lg font-bold mb-6">Time-Based</h2>
//               <div className="flex gap-2 flex-wrap">
//                 {timeTags.map((tag, index) => (
//                   <button
//                     key={index}
//                     onClick={() => toggleTag(tag)}
//                     className={`px-3 py-1 rounded-2xl border ${
//                       selectedTags.includes(tag)
//                         ? "bg-[#F97A1E] text-white border-[#F97A1E]"
//                         : "bg-orange-100 text-black border-transparent"
//                     }`}
//                   >
//                     {tag}
//                   </button>
//                 ))}
//               </div>
//             </div>

//              <div className="bg-white border border-gray-200 px-4 pb-8 pt-4 rounded-lg">
//               <h2 className="text-center text-lg font-bold mb-6">Experience Type</h2>
//               <div className="flex gap-2 flex-wrap">
//                 {experienceTags.map((tag, index) => (
//                   <button
//                     key={index}
//                     onClick={() => toggleTag(tag)}
//                     className={`px-3 py-1 rounded-2xl border ${
//                       selectedTags.includes(tag)
//                         ? "bg-[#F97A1E] text-white border-[#F97A1E]"
//                         : "bg-orange-100 text-black border-transparent"
//                     }`}
//                   >
//                     {tag}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="lg:hidden md:hidden col-span-4 p-2 border border-gray-200 rounded-lg">
//             <div>
//   <input
//     type="text"
//     placeholder="Search destinations..."
//     onChange={(e) => {
//       const searchTerm = e.target.value.toLowerCase();
//       if (!searchTerm) {
//         setFilteredInbounds(
//           selectedTags.length === 0
//             ? inbounds
//             : inbounds.filter((item) =>
//                 selectedTags.every((tag) => item.tags.includes(tag))
//               )
//         );
//         return;
//       }

//       // filter by name + active tags
//       const filtered = inbounds.filter((item) => {
//         const matchesName = item.name.toLowerCase().includes(searchTerm);
//         const matchesTags =
//           selectedTags.length === 0 ||
//           selectedTags.every((tag) => item.tags.includes(tag));
//         return matchesName && matchesTags;
//       });

//       setFilteredInbounds(filtered);
//     }}
//     className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-[#F97A1E] outline-none"
//   />
// </div>
//             <div onClick={()=>{seCategoriesMenuStatus(!categoriesMenuStatus)}} className="flex justify-between items-center">
//               <h2 className=" text-lg font-bold">Categories</h2>
//               <img className={` w-4   ${
//                 categoriesMenuStatus ? "rotate-180" : ""
//               } duration-300`} src="/categoriesDropdown.png" />
//             </div>
//             {categoriesMenuStatus && <div className={`transition-all duration-500 ease-in-out pt-6 flex gap-2 flex-wrap${
//           categoriesMenuStatus ? " opacity-100 scale-100" : " opacity-0 scale-95"
//         } `}>
//                 {categoryTags.map((tag, index) => (
//                   <button
//                     key={index}
//                     onClick={() => toggleTag(tag)}
//                     className={`px-3 py-1 rounded-2xl border ${
//                       selectedTags.includes(tag)
//                         ? "bg-[#F97A1E] text-white border-[#F97A1E]"
//                         : "bg-orange-100 text-black border-transparent"
//                     }`}
//                   >
//                     {tag}
//                   </button>
//                 ))}
//                 <hr className="w-full"/>
// {timeTags.map((tag, index) => (
//                   <button
//                     key={index}
//                     onClick={() => toggleTag(tag)}
//                     className={`px-3 py-1 rounded-2xl border ${
//                       selectedTags.includes(tag)
//                         ? "bg-[#F97A1E] text-white border-[#F97A1E]"
//                         : "bg-orange-100 text-black border-transparent"
//                     }`}
//                   >
//                     {tag}
//                   </button>
//                 ))}
//                 <hr className="w-full"/>

//                 {experienceTags.map((tag, index) => (
//                   <button
//                     key={index}
//                     onClick={() => toggleTag(tag)}
//                     className={`px-3 py-1 rounded-2xl border ${
//                       selectedTags.includes(tag)
//                         ? "bg-[#F97A1E] text-white border-[#F97A1E]"
//                         : "bg-orange-100 text-black border-transparent"
//                     }`}
//                   >
//                     {tag}
//                   </button>
//                 ))}

//               </div>}
//           </div>
//           {/* --- CARD GRID --- */}
      

//           <div className="lg:col-span-3 md:col-span-3 col-span-4 grid grid-cols-3 gap-6 h-screen overflow-y-scroll  ">
//             {filteredInbounds.length > 0 ? (
//               filteredInbounds.map((item, index) => (
//                 <div
//                   key={index}
//                   className="w-[100%] h-80 perspective lg:col-span-1 md:col-span-1 col-span-3"
//                   onClick={() => handleFlip(item._id)}
//                 >
//                   <div
//                     className={`relative w-[100%] h-80 transition-transform duration-700 border border-gray-200 shadow-[0_4px_10px_rgba(0,0,0,0.05)] rounded-3xl cursor-pointer preserve-3d ${
//                       flipped[item._id] ? "rotate-y-180" : ""
//                     }`}
//                   >
//                     {/* Front */}
//                     <div className="absolute inset-0 rounded-xl backface-hidden text-white font-bold text-xl">
//                       <img
//                         className="w-full h-[88%] p-2 rounded-3xl"
//                         src={item.image}
//                       />
//                       <p className="pb-4 text-center text-[#2D464C]">
//                         {item.name}
//                       </p>
//                     </div>

//                     {/* Back */}
//                     <div className="absolute inset-0 flex flex-col items-center justify-between rounded-xl text-[#2D464C] bg-white shadow-xl backface-hidden rotate-y-180 p-4">
//                       <div className="w-full">
//                         <h4 className="text-xl font-bold text-center">
//                           {item.name}
//                         </h4>
//                         <p className="text-left w-full line-clamp-5">
//                           {item.description}
//                         </p>
//                         <div className="flex flex-wrap justify-start w-full gap-1 mb-2">
//                           {item.tags &&
//                             item.tags.map((tag, i) => (
//                               <span
//                                 key={i}
//                                 className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
//                               >
//                                 {tag}
//                               </span>
//                             ))}
//                         </div>
//                         <p className="text-left w-full">
//                           <b>Price:</b> ₹{item.price}
//                         </p>
//                       </div>
//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           router.push(`/enquiry/${item._id}`);
//                         }}
//                         className="mt-3 text-white px-3 py-2 rounded text-sm w-[60%] bg-black"
//                       >
//                         Book Now
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p className="col-span-3 text-center text-gray-500">
//                 No destinations match the selected filters.
//               </p>
//             )}
//           </div>
//         </div>
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
  const [inbounds, setInbounds] = useState([]);
  const [filteredInbounds, setFilteredInbounds] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Separate states for each tag type
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [selectedExperiences, setSelectedExperiences] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoriesMenuStatus, setCategoriesMenuStatus] = useState(false);

  const categoryTags = [
    "Desert Experience",
    "Water Adventures",
    "City Tour",
    "Attraction & Landmark",
    "Adventure & Thrill",
    "Wild Life & Nature",
  ];
  const timeTags = ["Half Day", "Full Day", "Overnight"];
  const experienceTags = ["Budget", "Premium", "Luxury"];

  // ✅ Fetch inbound data
  useEffect(() => {
    const fetchInbounds = async () => {
      try {
        const res = await fetch("/api/inbound");
        const data = await res.json();
        const normalized = data.map((item) => ({
          ...item,
          tags: Array.isArray(item.tags) ? item.tags : [],
        }));
        setInbounds(normalized);
        console.log(normalized)
        setFilteredInbounds(normalized);
      } catch (error) {
        console.error("Failed to load inbound items", error);
      } finally {
        setLoading(false);
      }
    };
    fetchInbounds();
  }, []);

  // ✅ Helper to toggle tags for each type
  const toggleTag = (tag, type) => {
    const map = {
      category: [selectedCategories, setSelectedCategories],
      time: [selectedTimes, setSelectedTimes],
      experience: [selectedExperiences, setSelectedExperiences],
    };

    const [selected, setSelected] = map[type];
    setSelected((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

useEffect(() => {
  // const filtered = inbounds.filter((item) => {
  //   // Normalize arrays
  //   const itemCategories = (item.categoryTags || []).map(t => t.toLowerCase());
  //   const itemTimes = (item.timeTags || []).map(t => t.toLowerCase());
  //   const itemExperiences = (item.experienceTags || []).map(t => t.toLowerCase());

  //   const categoryMatch =
  //     selectedCategories.length === 0 ||
  //     selectedCategories.every(tag => itemCategories.includes(tag.toLowerCase()));

  //   const timeMatch =
  //     selectedTimes.length === 0 ||
  //     selectedTimes.every(tag => itemTimes.includes(tag.toLowerCase()));

  //   const experienceMatch =
  //     selectedExperiences.length === 0 ||
  //     selectedExperiences.every(tag => itemExperiences.includes(tag.toLowerCase()));

  //   return categoryMatch && timeMatch && experienceMatch;
  // });
const filtered = inbounds.filter((item) => {
  const itemName = item.name?.toLowerCase() || "";
  const itemDesc = item.description?.toLowerCase() || "";
  const searchMatch =
    searchTerm.trim() === "" ||
    itemName.includes(searchTerm.toLowerCase()) ||
    itemDesc.includes(searchTerm.toLowerCase());

  const itemCategories = (item.categoryTags || []).map(t => t.toLowerCase());
  const itemTimes = (item.timeTags || []).map(t => t.toLowerCase());
  const itemExperiences = (item.experienceTags || []).map(t => t.toLowerCase());

  const categoryMatch =
    selectedCategories.length === 0 ||
    selectedCategories.every(tag => itemCategories.includes(tag.toLowerCase()));

  const timeMatch =
    selectedTimes.length === 0 ||
    selectedTimes.every(tag => itemTimes.includes(tag.toLowerCase()));

  const experienceMatch =
    selectedExperiences.length === 0 ||
    selectedExperiences.every(tag => itemExperiences.includes(tag.toLowerCase()));

  return searchMatch && categoryMatch && timeMatch && experienceMatch;
});

  setFilteredInbounds(filtered);
}, [inbounds, selectedCategories, selectedTimes, selectedExperiences, searchTerm]);




  const handleFlip = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };


  // ✅ UI
  return (
    <>
      {/* Hero Section */}
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

      {/* Main Section */}
      <div className="lg:py-20 md:py-20 py-16 lg:px-20 md:px-20 px-4 text-[#2D464C] -z-0 lg:mb-0 md:mb-0 mb-32">
        <h1 className="lg:text-7xl md:text-7xl text-3xl font-extrabold text-center">
          Explore Dubai&apos;s Most <br />
          <span className="text-[#F97A1E]">Beautiful Destinations</span>
        </h1>

        <div className="grid grid-cols-4 h-screen py-12 gap-6">
          {/* --- SIDEBAR --- */}
          <div className="lg:col-span-1 md:col-span-1 sm:block hidden sticky h-screen">
            {/* Search */}
            <div className="mb-2">
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-[#F97A1E] outline-none"
              />
            </div>

            {/* Category Tags */}
            <div className="bg-white border border-gray-200 px-4 pb-8 pt-4 mb-2 rounded-lg">
              <h2 className="text-center text-lg font-bold mb-6">Categories</h2>
              <div className="flex gap-2 flex-wrap">
                {categoryTags.map((tag, index) => (
                  <button
                    key={index}
                    onClick={() => toggleTag(tag, "category")}
                    className={`px-3 py-1 rounded-2xl border ${
                      selectedCategories.includes(tag)
                        ? "bg-[#F97A1E] text-white border-[#F97A1E]"
                        : "bg-orange-100 text-black border-transparent"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Tags */}
            <div className="bg-white border border-gray-200 px-4 pb-8 pt-4 mb-2 rounded-lg">
              <h2 className="text-center text-lg font-bold mb-6">Time-Based</h2>
              <div className="flex gap-2 flex-wrap">
                {timeTags.map((tag, index) => (
                  <button
                    key={index}
                    onClick={() => toggleTag(tag, "time")}
                    className={`px-3 py-1 rounded-2xl border ${
                      selectedTimes.includes(tag)
                        ? "bg-[#F97A1E] text-white border-[#F97A1E]"
                        : "bg-orange-100 text-black border-transparent"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Experience Tags */}
            <div className="bg-white border border-gray-200 px-4 pb-8 pt-4 rounded-lg">
              <h2 className="text-center text-lg font-bold mb-6">Experience Type</h2>
              <div className="flex gap-2 flex-wrap">
                {experienceTags.map((tag, index) => (
                  <button
                    key={index}
                    onClick={() => toggleTag(tag, "experience")}
                    className={`px-3 py-1 rounded-2xl border ${
                      selectedExperiences.includes(tag)
                        ? "bg-[#F97A1E] text-white border-[#F97A1E]"
                        : "bg-orange-100 text-black border-transparent"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>


          </div>

{/* mobile view */}
<div  className="lg:hidden md:hidden col-span-4 border border-gray-200 p-2 rounded-lg h-full">
<div onClick={()=>{setCategoriesMenuStatus(!categoriesMenuStatus)}} className="flex justify-between items-center"> <h2 className=" text-lg font-bold">Categories</h2> <img className={` w-4 ${ categoriesMenuStatus ? "rotate-180" : "" } duration-300`} src="/categoriesDropdown.png" /> </div>
{categoriesMenuStatus && <div className={`transition-all duration-500 ease-in-out pt-6 flex gap-2 flex-wrap${ categoriesMenuStatus ? " opacity-100 scale-100" : " opacity-0 scale-95" }` }> 
<div className="mb-2 w-full">
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-[#F97A1E] outline-none"
              />
            </div>

             <h2 className="text-center text-lg font-bold mb-6">Categories</h2>
              <div className="flex gap-2 flex-wrap mb-3">
                {categoryTags.map((tag, index) => (
                  <button
                    key={index}
                    onClick={() => toggleTag(tag, "category")}
                    className={`px-3 py-1 rounded-2xl border ${
                      selectedCategories.includes(tag)
                        ? "bg-[#F97A1E] text-white border-[#F97A1E]"
                        : "bg-orange-100 text-black border-transparent"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <hr />
              <h2 className="text-center text-lg font-bold mb-6">Time-Based</h2>
              <div className="flex gap-2 flex-wrap mb-3">
                {timeTags.map((tag, index) => (
                  <button
                    key={index}
                    onClick={() => toggleTag(tag, "time")}
                    className={`px-3 py-1 rounded-2xl border ${
                      selectedTimes.includes(tag)
                        ? "bg-[#F97A1E] text-white border-[#F97A1E]"
                        : "bg-orange-100 text-black border-transparent"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <hr />
               <h2 className="text-center text-lg font-bold mb-6">Experience Type</h2>
              <div className="flex gap-2 flex-wrap mb-3">
                {experienceTags.map((tag, index) => (
                  <button
                    key={index}
                    onClick={() => toggleTag(tag, "experience")}
                    className={`px-3 py-1 rounded-2xl border ${
                      selectedExperiences.includes(tag)
                        ? "bg-[#F97A1E] text-white border-[#F97A1E]"
                        : "bg-orange-100 text-black border-transparent"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

</div> 
}



</div>
          {/* --- DESTINATIONS GRID --- */}
          <div className="lg:col-span-3 md:col-span-3 col-span-4 grid grid-cols-3 gap-6 lg:h-screen md:h-screen h-full overflow-y-scroll">
            {filteredInbounds.length > 0 ? (
              filteredInbounds.map((item, index) => (
                <div
                  key={index}
                  className="w-[100%] h-80 perspective lg:col-span-1 md:col-span-1 col-span-3"
                  onClick={() => handleFlip(item._id)}
                >
                  <div
                    className={`relative w-[100%] h-80 transition-transform duration-700 border border-gray-200 shadow-[0_4px_10px_rgba(0,0,0,0.05)] rounded-3xl cursor-pointer preserve-3d ${
                      flipped[item._id] ? "rotate-y-180" : ""
                    }`}
                  >
                    {/* Front */}
                    <div className="absolute inset-0 rounded-xl backface-hidden text-white font-bold text-xl">
                      <img
                        className="w-full h-[88%] p-2 rounded-3xl"
                        src={item.image}
                      />
                      <p className="pb-4 text-center text-[#2D464C]">
                        {item.name}
                      </p>
                    </div>

                    {/* Back */}
                    <div className="absolute inset-0 flex flex-col items-center justify-between rounded-xl text-[#2D464C] bg-white shadow-xl backface-hidden rotate-y-180 p-4">
                      <div className="w-full">
                        <h4 className="text-xl font-bold text-center">
                          {item.name}
                        </h4>
                        <p className="text-left w-full line-clamp-5">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap justify-start w-full gap-1 mb-2">
                          {item.tags?.map((tag, i) => (
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
                          router.push(
                            `/enquiry?service=Inbound&destination=${encodeURIComponent(item._id)}`
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
              <p className="col-span-3 text-center text-gray-500">
                No destinations match the selected filters.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
