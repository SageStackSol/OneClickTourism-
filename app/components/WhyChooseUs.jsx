"use client"; // ✅ required in Next.js 13+ (App Router) for client-side hooks

import { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";

export default function WhyChooseUs() {
  const glideRef = useRef(null);

  const data = [
    {
      img: "./clock.png",
      title: "Service Support",
      description:
        "Our regular working hours are from 9 AM to to 6 PM, Monday through Saturday However, corporate travellers can count on constant support via a dedicated telephone line and email is assigned exclusively to serve our client after working hours.",
    },
    {
      img: "./customer-service.png",
      title: "Dedicated Travel Service",
      description:
        "A team of experienced travel counsellors is fully equipped to meet all client requirements. We offer a wide choice of travel options low cost , best route, best value for our corporate clients.",
    },
    {
      img: "./discount.png",
      title: "Special Corporate Deals",
      description:
        "We have access to wide range of travel options, including negotiated and exclusive contract fares with various trade partners.=/suppliers across all classes.",
    },
    {
      img: "./hotel1.png",
      title: "Hotel Arrangements",
      description:
        "Through our association with leading hospitality brands, we have access to special contracted concessional hotel rates locally and worldwide.",
    },
    {
      img: "./handshake.png",
      title: "Trusted & Licensed",
      description:
        "Fully Compliant local operator with vetted guides and safe, insured experiences.",
    },
    {
      img: "./select.png",
      title: "Handpicked Experiences",
      description:
        "From desert safaris to cultural city walks, only top rated tours make the cut.",
    },
 
  ];
  const bgColors = [
  "bg-[#FFEFE3]", // Peach
  "bg-[#E6F7F1]", // Mint
  "bg-[#E5F4FF]", // Sky
  "bg-[#F3EEFF]", // Lavender
  "bg-[#E8F7F1]",
  "bg-[#F7F3EF]"
];


  useEffect(() => {
    if (!glideRef.current) return;

    const glide = new Glide(glideRef.current, {
      type: "carousel",
      startAt: 0,
      perView: 3.3, // number of slides visible
      breakpoints: {
        1200: { perView: 3 },
        992: { perView: 2.2 },
        600: { perView: 1.2 },
      },
      autoplay: 2000, // autoplay every 2s
      hoverpause: true, // pause on hover
      animationDuration: 800, // smooth animation
      // gap: 30,
    });

    glide.mount();

    return () => {
      glide.destroy();
    };
  }, []);

  return (
    <div className="glide mt-16" ref={glideRef}>
      <div className="glide__track " data-glide-el="track">
        <ul className="glide__slides text-[#2D464C] h-96 lg:p-4 md:p-4 p-2">
          {data.map((item, index) => {
            return (
              <li
                key={index}
                // shadow-[0_0_10px_rgba(0,0,0,0.3)]
                className={`glide__slide lg:p-8 md:p-8 p-4 shadow-md rounded-tl-[4em] rounded-tr-[1em] rounded-bl-[1em] rounded-br-[4em] ${bgColors[index % bgColors.length]}`}
              >
                <img className="w-12 mx-auto mb-4" src={item.img}/>
                <h3 className="text-2xl mb-2 text-center lg:pt-0 md:pt-0 pt-4">
                  {item.title}
                </h3>
                <p className="text-left">{item.description}</p>
              </li>
            );
          })}

          {/* <li className="glide__slide bg-blue-400 p-10  text-center rounded-lg">
            Slide 2
          </li>
          <li className="glide__slide bg-green-400 p-10  text-center rounded-lg">
            Slide 3
          </li>
          <li className="glide__slide bg-purple-400 p-10  text-center rounded-lg">
            Slide 4
          </li> */}
        </ul>
      </div>

      {/* Navigation */}
      {/* <div className="glide__arrows" data-glide-el="controls">
        <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
          Prev
        </button>
        <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
          Next
        </button>
      </div> */}
    </div>
  );
}
