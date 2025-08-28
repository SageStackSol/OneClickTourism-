import React from 'react'

function page() {
    const inboundPlaces = [
         {
      image: "./redDunes.jpeg",
      place: "Dubai Red Dunes",
      price: "AED 329",
      duration: 10,
    },
     {
      image: "./dubaiBuilding.jpeg",
      place: "Dubai",
      price: "AED 729",
      duration: 12,
    },
     {
      image: "./jetski.jpeg",
      place: "Dubai jetski",
      price: "AED 939",
      duration: 28,
    },
    {
      image: "./bridge.jpeg",
      place: "Dubai Red Dunes",
      price: "AED 329",
      duration: 10,
    },
     {
      image: "./dubai.png",
      place: "Dubai ",
      price: "AED 739",
      duration: 12,
    },
     {
      image: "./buildings.jpeg",
      place: "Dubai Jetski",
      price: "AED 939",
      duration: 28,
    }
    ]
  return (
    <>
    <div className='px-40 py-20'>

         <h1 className="text-5xl font-extrabold leading-normal text-center">
       Explore the World's Most <br />
          <span className="text-[#18E5E6]">Beautiful Destinations</span>
        </h1>
        <p className="text-center text-base px-44 my-4">
         From tropical paradises to cultural capitals, discover hand-picked destinations that offer unforgettable experiences.
        </p>
  <div className="grid grid-cols-12 gap-8 py-16">
          {inboundPlaces.map((item, index) => {
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
    
    </>
  )
}

export default page