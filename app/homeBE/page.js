"use client";
import { useState, useEffect } from "react";

export default function EditHomePage() {
  const [heading, setHeading] = useState("");
  const [tagline, setTagline] = useState("");
  const [heroFiles, setHeroFiles] = useState([]);
  const [belowHeroFiles, setBelowHeroFiles] = useState([]);

  console.log(heading, tagline, heroFiles, belowHeroFiles);

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  const handleUpload = async () => {
    if (!heading || !tagline) {
      alert("Please enter heading and tagline");
      return;
    }

    const heroBase64 = await Promise.all(heroFiles.map(toBase64));
    const belowHeroBase64 = await Promise.all(belowHeroFiles.map(toBase64));

    const res = await fetch("/api/home", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        heading,
        tagline,
        heroImages: heroBase64,
        belowHeroImages: belowHeroBase64,
      }),
    });

    const result = await res.json();
    // setData(result.data);
    console.log(result);
  };
  //   const [data, setData] = useState(null);
  //   const [heading, setHeading] = useState("");
  //   const [tagline, setTagline] = useState("");
  //   const [heroImages, setHeroImages] = useState([]);
  //   const [belowHeroImages, setBelowHeroImages] = useState([]);
  //   const [loading, setLoading] = useState(false);

  //   // ✅ Fetch existing record
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const res = await fetch("/api/home");
  //       const json = await res.json();
  //       console.log(json[0])
  //       if (json && json.length > 0) {
  //         const home = json[0]; // assuming one record
  //         setData(home);
  //         setHeading(home.heading);
  //         setTagline(home.tagline);
  //         setHeroImages(home.heroImages);
  //         setBelowHeroImages(home.belowHeroImages);
  //       }
  //     };
  //     fetchData();
  //   }, []);
  // console.log(data)
  //   // ✅ Convert selected files to base64
  //   const convertToBase64 = (files) =>
  //     Promise.all(
  //       Array.from(files).map(
  //         (file) =>
  //           new Promise((resolve, reject) => {
  //             const reader = new FileReader();
  //             reader.readAsDataURL(file);
  //             reader.onload = () => resolve(reader.result);
  //             reader.onerror = (err) => reject(err);
  //           })
  //       )
  //     );

  //   // ✅ Handle image changes
  //   const handleHeroChange = async (e) => {
  //     const base64Arr = await convertToBase64(e.target.files);
  //     setHeroImages(base64Arr);
  //   };

  //   const handleBelowHeroChange = async (e) => {
  //     const base64Arr = await convertToBase64(e.target.files);
  //     setBelowHeroImages(base64Arr);
  //   };

  //   // ✅ Handle update submit
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     if (!data?._id) return alert("No record to update!");

  //     setLoading(true);
  //     try {
  //       const res = await fetch(`/api/home/${data._id}`, {
  //         method: "PUT",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({ heading, tagline, heroImages, belowHeroImages }),
  //       });

  //       const json = await res.json();
  //       if (res.ok) {
  //         alert("Home content updated successfully!");
  //         setData(json.data);
  //       } else {
  //         alert(json.error || "Update failed!");
  //       }
  //     } catch (err) {
  //       console.error(err);
  //       alert("Something went wrong");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  // console.log(data)
  //   if (!data) return <p className="text-center mt-10">Loading...</p>;

  return (
    <>
      {/*      <div className="max-w-3xl mx-auto mt-10 p-6 border rounded-xl shadow-sm bg-white">
       <h1 className="text-2xl font-bold mb-6 text-center">Edit Home Section</h1>
 <h1>{data.heading}</h1>
       <form onSubmit={handleSubmit} className="space-y-5">
         <div>
           <label className="block font-semibold mb-2">Heading</label>
           <input
             type="text"
             className="border p-2 rounded w-full"
             value={heading}
             onChange={(e) => setHeading(e.target.value)}
           />
         </div>

         <div>
           <label className="block font-semibold mb-2">Tagline</label>
           <input
             type="text"
             className="border p-2 rounded w-full"
             value={tagline}
             onChange={(e) => setTagline(e.target.value)}
           />
         </div>

         <div>
           <label className="block font-semibold mb-2">Hero Section Images</label>
           <input type="file" multiple onChange={handleHeroChange} />
           <div className="flex flex-wrap gap-3 mt-3">
             {heroImages.map((img, i) => (
               <img key={i} src={img} alt="" className="w-24 h-24 object-cover rounded" />
             ))}
           </div>
         </div>

         <div>
           <label className="block font-semibold mb-2">Below Hero Images</label>
           <input type="file" multiple onChange={handleBelowHeroChange} />
           <div className="flex flex-wrap gap-3 mt-3">
             {belowHeroImages.map((img, i) => (
               <img key={i} src={img} alt="" className="w-24 h-24 object-cover rounded" />
             ))}
           </div>
         </div>

         <button
           disabled={loading}
           className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full mt-4"
         >
           {loading ? "Updating..." : "Save Changes"}
         </button>
       </form>
     </div> */}
      {/* hero post html code  */}
      <div className="py-40">
        <input
          onChange={(e) => {
            setHeading(e.target.value);
          }}
          placeholder="heading"
        />
        <input
          onChange={(e) => {
            setTagline(e.target.value);
          }}
          placeholder="tagline"
        />
        <input
          multiple
          onChange={(e) => setHeroFiles(Array.from(e.target.files))}
          type="file"
        />{" "}
        hero
        <input
          multiple
          onChange={(e) => setBelowHeroFiles(Array.from(e.target.files))}
          type="file"
        />
        belowHero
        <button
          onClick={handleUpload}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Upload & Save
        </button>
      </div>
    </>
  );
}
