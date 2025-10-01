// "use client";

// import { useEffect, useRef } from "react";
// import Glide from "@glidejs/glide";

// export default function TravelCarousel() {
//   const glideRef = useRef(null);

//   useEffect(() => {
//     if (!glideRef.current) return;

//     const glide = new Glide(glideRef.current, {
//       type: "carousel",
//       startAt: 0,
//       perView: 3,
//       focusAt: "center",
//       autoplay: 3000,
//       hoverpause: true,
//     });

//     glide.on(["mount.after", "run.after"], () => {
//       const slides = glideRef.current.querySelectorAll(".glide__slide");
//       slides.forEach((slide, i) => {
//         slide.classList.remove("is-center", "is-left", "is-right");

//         if (i === glide.index) {
//           slide.classList.add("is-center");
//         } else if (i === (glide.index - 1 + slides.length) % slides.length) {
//           slide.classList.add("is-left");
//         } else if (i === (glide.index + 1) % slides.length) {
//           slide.classList.add("is-right");
//         }
//       });
//     });

//     glide.mount();

//     return () => glide.destroy();
//   }, []);

//   return (
//     <div className="glide w-full max-w-5xl mx-auto perspective-1000" ref={glideRef}>
//       <div className="glide__track" data-glide-el="track">
//         <ul className="glide__slides">
//           <li className="glide__slide">
//             <div className="slide-card bg-cover bg-center" style={{ backgroundImage: "url('/images/thailand.jpg')" }}>
//               <span className="slide-label">THAILAND</span>
//             </div>
//           </li>
//           <li className="glide__slide">
//             <div className="slide-card bg-cover bg-center" style={{ backgroundImage: "url('/images/turkey.jpg')" }}>
//               <span className="slide-label">TURKEY</span>
//             </div>
//           </li>
//           <li className="glide__slide">
//             <div className="slide-card bg-cover bg-center" style={{ backgroundImage: "url('/images/vietnam.jpg')" }}>
//               <span className="slide-label">VIETNAM</span>
//             </div>
//           </li>
//         </ul>
//       </div>

//       {/* Arrows */}
//       <div className="glide__arrows" data-glide-el="controls">
//         <button className="glide__arrow glide__arrow--left" data-glide-dir="<">‹</button>
//         <button className="glide__arrow glide__arrow--right" data-glide-dir=">">›</button>
//       </div>

//       {/* Bullets */}
//       <div className="glide__bullets flex justify-center mt-4" data-glide-el="controls[nav]">
//         <button className="glide__bullet" data-glide-dir="=0"></button>
//         <button className="glide__bullet" data-glide-dir="=1"></button>
//         <button className="glide__bullet" data-glide-dir="=2"></button>
//       </div>
//     </div>
//   );
// }

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

export default function Carousel() {
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
          <img src="./al_ain.jpg" alt="Slide 1" className="rounded-xl w-full h-52" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./FujairahEastCoast.jpg" alt="Slide 2" className="rounded-xl w-full h-52" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./dubaiCityTour.jpg" alt="Slide 3" className="rounded-xl w-full h-52" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./dubai_tour.jpg" alt="Slide 3" className="rounded-xl w-full h-52" />
        </SwiperSlide>
         <SwiperSlide>
          <img src="./abu_dhabi.jpg" alt="Slide 3" className="rounded-xl w-full h-52" />
        </SwiperSlide>
         <SwiperSlide>
          <img src="./sharjah.jpg" alt="Slide 3" className="rounded-xl w-full h-52" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}


  //  <SwiperSlide>
  //         <img src="./dubaiCityTour.jpg" alt="Slide 1" className="rounded-xl w-full h-48" />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src="./hotelWWD.jpg" alt="Slide 2" className="rounded-xl w-full h-48" />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src="./flightWWD.jpg" alt="Slide 3" className="rounded-xl w-full h-48" />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src="./visaWWD.jpg" alt="Slide 3" className="rounded-xl w-full h-48" />
  //       </SwiperSlide>