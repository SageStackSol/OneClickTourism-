"use client"; // if you're in Next.js 13+ with App Router

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Navigation} from "swiper/modules";

export default function BelowHeroImage() {
 const belowHeroImage = [
    { image: "/belowHero.png" },
    { image: "/belowHero1.jpg" },
    { image: "/belowHero2.jpg" },
    { image: "/belowHero3.jpg" },
    { image: "/belowHero4.jpg" },
    { image: "/belowHero5.jpg" },
    { image: "/belowHero6.jpg" },
    { image: "/belowHero7.jpg" },
    { image: "/belowHero8.jpg" },
    { image: "/belowHero9.jpg" },
    { image: "/belowHero10.jpg" },
    { image: "/belowHero11.jpg" },

  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Swiper
         effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
    //        breakpoints={{
    //     1200: { slidesPerView: 3 },
    //     992:  { slidesPerView: 2 },
    //     600:  { slidesPerView: 2 },
    //   }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0, // no tilt
          stretch: 0, // no stretch
          depth: 200, // distance between front & back
          modifier: 2.5, // intensity of 3D effect
          slideShadows: false,
        }}
        // pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper "
      >
        {belowHeroImage.map((item,index)=>{
            return( <SwiperSlide>
            {/* <img
            key={index}
                      src={item.image}
                      
                    //   height={400}
                    //   alt="Travel illustration"
                      className="h-[70vh] w-full rounded-lg shadow-slate-600 shadow-[10px_10px_15px_rgba(0,0,0,0.5)]"
                    /> */}
                    <div   style={{ backgroundImage: `url(${item.image})` }} className=" h-96 bg-center bg-cover  shadow-lg rounded-lg">

                    </div>
        </SwiperSlide>)
        })}
       
      
      </Swiper>
    </div>
  );
}