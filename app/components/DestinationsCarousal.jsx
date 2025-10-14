"use client"; // if you're in Next.js 13+ with App Router

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Navigation} from "swiper/modules";

export default function DestinationsCarousel() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Swiper
         effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        // slidesPerView={3}
           breakpoints={{
        1200: { slidesPerView: 3 },
        992:  { slidesPerView: 2 },
        600:  { slidesPerView: 2 },
      }}
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
        <SwiperSlide>
          <img src="./colosseumItaly.jpg" alt="Slide 1" className="rounded-xl w-full h-96" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./eiffelTowerFrance.jpg" alt="Slide 2" className="rounded-xl w-full h-96" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./greatWallOfChina.jpg" alt="Slide 3" className="rounded-xl w-full h-96" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./london.jpg" alt="Slide 3" className="rounded-xl w-full h-96" />
        </SwiperSlide>
         <SwiperSlide>
          <img src="./louvreFrance.jpg" alt="Slide 3" className="rounded-xl w-full h-96" />
        </SwiperSlide>
         <SwiperSlide>
          <img src="./StatueOfLibertyUsa.jpg" alt="Slide 3" className="rounded-xl w-full h-96" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./yellowStoneNationalParkUsa.jpg" alt="Slide 3" className="rounded-xl w-full h-96" />
        </SwiperSlide> <SwiperSlide>
          <img src="./forbiddenCityChina.jpg" alt="Slide 3" className="rounded-xl w-full h-96" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}