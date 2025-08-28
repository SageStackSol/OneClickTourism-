import React from 'react'

function page() {
    const info = [
        {
            image:'./flight(30).png',
            duration:"30 Days Visit Visa",
            price:339
        },
         {
            image:'./giantwheel.png',
            duration:"90 Days Visit Visa",
            price:739
        },
        {
            image:'./flightMonth.png',
            duration:"1 month inside country visa",
            price:949
        },
         {
            image:'./packed.png',
            duration:"3 month inside country visa",
            price:1249
        },

    ]
  return (
    <>
    <div className='px-40 py-20'>
  <h1 className="text-5xl font-extrabold leading-normal text-center">
          Everything You Need for the <br />
          <span className="text-[#0497E0]">Perfect Journey</span>
        </h1>
        <p className="text-center text-base px-44 my-4">
          From planning to execution, we handle every detail of your trip so you
          can focus on creating memories.
        </p>

        {
            info.map((item,index)=>{
              return  <div key={index} className='flex w-[100%] justify-between items-center text-lg font-bold border border-[#827F7F] rounded-xl pr-16 bg-[#827f7f1b] my-6'>
    <img className=' rounded-l-xl w-[30%] h-48' src={item.image}/>
    <p>{item.duration}</p>
    <div className='text-center'>
        <p>AED {item.price}*</p>
         <p>Book Now!!!</p>

    </div>

</div>
            })
        }
    </div>
    </>
  )
}

export default page