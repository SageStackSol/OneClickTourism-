"use client";
import React, { useState } from "react";

function page() {
  const [bmw, setBmw] = useState(false);
  const [lamborghini, setLamborghini] = useState(false);
  const [benz, setBenz] = useState(false);
  const [porsche, setPorsche] = useState(false);
  const [ferrari, setFerrari] = useState(false);
  const [rr, setRr] = useState(false);
  const [audi, setAudi] = useState(false);

  return (
    <div className="lg:py-20 md:py-20 py-16 lg:px-40 md:px-40 px-4 grid grid-cols-12 ">
      <div
        onClick={() => {
          setBmw(!bmw);
          setBenz(false);
          setLamborghini(false);
          setPorsche(false);
          setFerrari(false);
          setRr(false);
          setAudi(false);
        }}
        className={`lg:col-span-4 md:col-span-4 col-span-12 mx-2  p-4 mt-2 ${
          bmw ? "bg-[#F97A1E] rounded-t-3xl" : "bg-[#D9D9D9] rounded-3xl"
        }`}
      >
        <img src="./bmw.png" />
      </div>

      <div
        onClick={() => {
          setBmw(false);
          setBenz(false);
          setLamborghini(!lamborghini);
          setPorsche(false);
          setFerrari(false);
          setRr(false);
          setAudi(false);
        }}
        className={`lg:col-span-4 md:col-span-4 col-span-12 mx-2  p-4 ${
          lamborghini
            ? "bg-[#F97A1E] rounded-t-3xl"
            : "bg-[#D9D9D9] rounded-3xl"
        }`}
      >
        <img src="./lamborghini.png" />
      </div>

      <div
        onClick={() => {
          setBmw(false);
          setBenz(!benz);
          setLamborghini(false);
          setPorsche(false);
          setFerrari(false);
          setRr(false);
          setAudi(false);
        }}
        className={`lg:col-span-4 md:col-span-4 col-span-12 mx-2  p-4 ${
          benz ? "bg-[#F97A1E] rounded-t-3xl" : "bg-[#D9D9D9] rounded-3xl"
        }`}
      >
        <img src="./benz.png" />
      </div>
      {bmw && (
        <div className="col-span-12 bg-[#F97A1E] p-4 grid grid-cols-12 gap-4 rounded-b-3xl mx-2 rounded-r-3xl">
          <img src="./bmw-coupe.png" className=" col-span-6" />
          <div className="col-span-6 font-bold flex flex-col justify-evenly items-center">
            <div className="flex justify-center items-center">
              <ul className="flex gap-4">
                <li>SUV</li>
                <li>Sedan</li>
                <li>Hacthback</li>
              </ul>
            </div>
            <p className="text-lg text-center">
              BMW is a German manufacturer of premium automobiles, known for
              producing vehicles with a focus on sportiness, luxury, and
              advanced technology
            </p>
            <button className="px-6 py-2 bg-black text-white rounded-full w-[30vw]">
              Ride Now
            </button>
          </div>
        </div>
      )}
      {lamborghini && (
        <div className="col-span-12 bg-[#F97A1E] p-4 grid grid-cols-12 gap-4 rounded-3xl">
          <img src="./bmw-coupe.png" className=" col-span-6" />
          <div className="col-span-6 font-bold flex flex-col justify-evenly items-center">
            <div className="flex justify-center items-center">
              <ul className="flex gap-4">
                <li>SUV</li>
                <li>Sedan</li>
                <li>Hacthback</li>
              </ul>
            </div>
            <p className="text-lg text-center">
              BMW is a German manufacturer of premium automobiles, known for
              producing vehicles with a focus on sportiness, luxury, and
              advanced technology
            </p>
            <button className="px-6 py-2 bg-black text-white rounded-full w-[30vw]">
              Ride Now
            </button>
          </div>
        </div>
      )}

      {benz && (
        <div className="col-span-12 bg-[#F97A1E] p-4 grid grid-cols-12 gap-4  mx-2 rounded-b-3xl rounded-l-3xl">
          <img src="./bmw-coupe.png" className=" col-span-6" />
          <div className="col-span-6 font-bold flex flex-col justify-evenly items-center">
            <div className="flex justify-center items-center">
              <ul className="flex gap-4">
                <li>SUV</li>
                <li>Sedan</li>
                <li>Hacthback</li>
              </ul>
            </div>
            <p className="text-lg text-center">
              BMW is a German manufacturer of premium automobiles, known for
              producing vehicles with a focus on sportiness, luxury, and
              advanced technology
            </p>
            <button className="px-6 py-2 bg-black text-white rounded-full w-[30vw]">
              Ride Now
            </button>
          </div>
        </div>
      )}

      <div
        onClick={() => {
          setBmw(false);
          setBenz(false);
          setLamborghini(false);
          setPorsche(!porsche);
          setFerrari(false);
          setRr(false);
          setAudi(false);
        }}
        className={`lg:col-span-4 md:col-span-4 col-span-12 mx-2  p-4 mt-2 ${
          porsche ? "bg-[#F97A1E] rounded-t-3xl" : "bg-[#D9D9D9] rounded-3xl"
        }`}
      >
        <img src="./porsche.png" />
      </div>
      <div
        onClick={() => {
          setBmw(false);
          setBenz(false);
          setLamborghini(false);
          setPorsche(false);
          setFerrari(!ferrari);
          setRr(false);
          setAudi(false);
        }}
        className={`lg:col-span-4 md:col-span-4 col-span-12 mx-2  p-4 mt-2 ${
          ferrari ? "bg-[#F97A1E] rounded-t-3xl" : "bg-[#D9D9D9] rounded-3xl"
        }`}
      >
        <img src="./ferrari.png" />
      </div>
      <div
        onClick={() => {
          setBmw(false);
          setBenz(false);
          setLamborghini(false);
          setPorsche(false);
          setFerrari(false);
          setRr(!rr);
          setAudi(false);
        }}
        className={`lg:col-span-4 md:col-span-4 col-span-12 mx-2  p-4 mt-2 ${
          rr ? "bg-[#F97A1E] rounded-t-3xl" : "bg-[#D9D9D9] rounded-3xl"
        }`}
      >
        <img src="./rr.png" />
      </div>

      {porsche && (
        <div className="col-span-12 bg-[#F97A1E] p-4 grid grid-cols-12 gap-4 rounded-b-3xl mx-2 rounded-r-3xl">
          <img src="./bmw-coupe.png" className=" col-span-6" />
          <div className="col-span-6 font-bold flex flex-col justify-evenly items-center">
            <div className="flex justify-center items-center">
              <ul className="flex gap-4">
                <li>SUV</li>
                <li>Sedan</li>
                <li>Hacthback</li>
              </ul>
            </div>
            <p className="text-lg text-center">
              BMW is a German manufacturer of premium automobiles, known for
              producing vehicles with a focus on sportiness, luxury, and
              advanced technology
            </p>
            <button className="px-6 py-2 bg-black text-white rounded-full w-[30vw]">
              Ride Now
            </button>
          </div>
        </div>
      )}
      {ferrari && (
        <div className="col-span-12 bg-[#F97A1E] p-4 grid grid-cols-12 gap-4 rounded-3xl">
          <img src="./bmw-coupe.png" className=" col-span-6" />
          <div className="col-span-6 font-bold flex flex-col justify-evenly items-center">
            <div className="flex justify-center items-center">
              <ul className="flex gap-4">
                <li>SUV</li>
                <li>Sedan</li>
                <li>Hacthback</li>
              </ul>
            </div>
            <p className="text-lg text-center">
              BMW is a German manufacturer of premium automobiles, known for
              producing vehicles with a focus on sportiness, luxury, and
              advanced technology
            </p>
            <button className="px-6 py-2 bg-black text-white rounded-full w-[30vw]">
              Ride Now
            </button>
          </div>
        </div>
      )}

      {rr && (
        <div className="col-span-12 bg-[#F97A1E] p-4 grid grid-cols-12 gap-4  mx-2 rounded-b-3xl rounded-l-3xl">
          <img src="./bmw-coupe.png" className=" col-span-6" />
          <div className="col-span-6 font-bold flex flex-col justify-evenly items-center">
            <div className="flex justify-center items-center">
              <ul className="flex gap-4">
                <li>SUV</li>
                <li>Sedan</li>
                <li>Hacthback</li>
              </ul>
            </div>
            <p className="text-lg text-center">
              BMW is a German manufacturer of premium automobiles, known for
              producing vehicles with a focus on sportiness, luxury, and
              advanced technology
            </p>
            <button className="px-6 py-2 bg-black text-white rounded-full w-[30vw]">
              Ride Now
            </button>
          </div>
        </div>
      )}
      <div
        onClick={() => {
          setBmw(false);
          setBenz(false);
          setLamborghini(false);
          setPorsche(false);
          setFerrari(false);
          setRr(false);
          setAudi(!audi);
        }}
        className={`lg:col-span-4 md:col-span-4 col-span-12 mx-2  p-4 mt-2 ${
          audi ? "bg-[#F97A1E] rounded-t-3xl" : "bg-[#D9D9D9] rounded-3xl"
        }`}
      >
        <img src="./audi.png" />
      </div>
      {audi && (
        <div className="col-span-12 bg-[#F97A1E] p-4 grid grid-cols-12 gap-4 rounded-b-3xl mx-2 rounded-r-3xl">
          <img src="./bmw-coupe.png" className=" col-span-6" />
          <div className="col-span-6 font-bold flex flex-col justify-evenly items-center">
            <div className="flex justify-center items-center">
              <ul className="flex gap-4">
                <li>SUV</li>
                <li>Sedan</li>
                <li>Hacthback</li>
              </ul>
            </div>
            <p className="text-lg text-center">
              BMW is a German manufacturer of premium automobiles, known for
              producing vehicles with a focus on sportiness, luxury, and
              advanced technology
            </p>
            <button className="px-6 py-2 bg-black text-white rounded-full w-[30vw]">
              Ride Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default page;
