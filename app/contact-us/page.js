"use client"
import React,{useState} from "react";

function Page() {
   const [fName,setFName] = useState('')
      const [lName,setLName] = useState('')
      const [email,setEmail] = useState('')
      const [phone,setPhone] = useState('')
      const [prefferedDestination,setPrefferedDestination] = useState('')
      const [dreamTrip,setDreamTrip] = useState('')
  return (
    <>
      <div className="lg:py-20 md:py-20 py-16 lg:px-40 md:px-40 px-4 ">
        <h1 className="lg:text-[3em] md:text-[3em] text-[2em] font-bold text-center">
          Ready to Plan Your Next
        </h1>
        <h1 className="lg:text-[3em] md:text-[3em] text-[2em] font-bold text-[#FA7C28] text-center">
          Adventure?
        </h1>
        <p className="text-center lg:px-48 md:px-48 px-4">
          Our travel experts are standing by to help you create the perfect
          itinerary. Contact us today for a free consultation.
        </p>
        <div className="grid grid-cols-12 mt-8 lg:gap-12 md:gap-12 gap-1">
          <div className="bg-[#827f7f28] lg:col-span-6 md:col-span-6 col-span-12 lg:p-6 md:p-6 p-4 rounded-xl border-black border">
            <h2 className="text-[1.5em] font-semibold">Send Us a Message</h2>
            <div className="lg:flex justify-between gap-8">
              <div className="w-[100%]">
                <label className="font-semibold text-[.8em] mt-4">
                  First Name
                </label>
                <br />
                <input onChange={(e)=>{setFName(e.target.value)}} value={fName}  className="bg-[#827f7f28] border-black border rounded-lg w-[100%] h-8" />
              </div>

              <div className="w-[100%]">
                <label className="font-semibold text-[.8em] mt-4">
                  Last Name
                </label>
                <br />
                <input onChange={(e)=>{setLName(e.target.value)}} value={lName} className="bg-[#827f7f28] border-black border rounded-lg w-[100%] h-8" />
              </div>
            </div>

            <p className="font-semibold text-[.8em] mt-4">Email Address</p>
            <input onChange={(e)=>{setEmail(e.target.value)}} value={email} className="bg-[#827f7f28] border-black border rounded-lg w-[100%] h-8" />
            <p className="font-semibold text-[.8em] mt-4">Phone Number</p>
            <input onChange={(e)=>{setPhone(e.target.value)}} value={phone} className="bg-[#827f7f28] border-black border rounded-lg w-[100%] h-8" />
            <p className="font-semibold text-[.8em] mt-4">
              Preferred Destination
            </p>
            <input onChange={(e)=>{setPrefferedDestination(e.target.value)}} value={prefferedDestination} className="bg-[#827f7f28] border-black border rounded-lg w-[100%] h-8" />
            <p className="font-semibold text-[.8em] mt-4">
              Tell Us About Your Dream Trip
            </p>
            <input onChange={(e)=>{setDreamTrip(e.target.value)}} value={dreamTrip} className=" h-12 bg-[#827f7f28] border-black border rounded-lg w-[100%]" />
            <button className="flex gap-2 bg-gradient-to-r from-[#089CE0] to-[#16DBE4] text-white px-8 py-2 rounded-md font-semibold mt-4">
              <img src="./send.png" className="w-6" /> Send a Message
            </button>
          </div>

          <div className="lg:col-span-6 md:col-span-6 col-span-12 ">
            <div className="bg-[#827f7f28] p-4 rounded-xl border-black border flex">
              <img src="./call.png" className="w-12 h-12 col-span-1 " />
              <p className="col-span-8 ml-3">
                <b>Call Us</b>
                <br />
                Speak with our travel experts
                <br />
                +1 (555) 123-4567
              </p>
            </div>

            <div className="bg-[#827f7f28] mt-6 p-4 rounded-xl border-black border flex ">
              <img src="./email.png" className="w-12 h-12 col-span-1 " />
              <p className="col-span-8 ml-3">
                <b>Email Us</b>
                <br />
                Get detailed Information via email
                <br />
                info@oneclicktourismservices.com
              </p>
            </div>
            <div className="bg-[#FA7C28] mt-6 px-4 py-6 rounded-xl border-black border text-white text-center">
              <b>Need Immediate Assistance?</b>
              <p className="mt-2">
                Our travel emergency hotline is available 24/7 for urgent travel
                needs.
              </p>
              <button className="flex gap-4 bg-white/40 px-4 py-2 rounded-lg mx-auto my-3 border-white border">
                <img src="./phone_in_talk.png" className="w-6" />
                <p>Call Emergency Line</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#089CE0] to-[#16DBE4] text-white text-center py-12 lg:px-0 md:px-0 px-4">
        <h1 className="lg:text-[3em] md:text-[3em] text-[2em] font-bold m-0">Never Miss a Great Deal !</h1>
        <p className="mb-2">
          Subscribe to our newsletter and get exclusive travel deals,
          destination guides, and travel tips delivered to your inbox.
        </p>
        <input className=" bg-white/20 px-4 py-2 rounded-lg placeholder:text-white" placeholder="Enter your email"/>
        <button className="bg-[#FA7C28] px-4 py-2 rounded-lg mx-2 lg:my-0 md:my-0 my-2">Subscribe</button>
      </div>
    </>
  );
}

export default Page;
