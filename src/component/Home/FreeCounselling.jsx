"use client"

import { useEffect, useState } from "react";

const FreeCounselling = () => {
    const [consults, setConsults] = useState([])
    useEffect(() => {
        fetch(`freecounselling.json`)
            .then(res => res.json())
            .then(data => setConsults(data))
        
    }, [])


    return (
        <div className="mb-8 p-2 md:p-0">
            <h1 className="text-center text-orange-500 font-bold text-3xl drop-shadow-lg mb-10">Free Counselling</h1>
            <div className="container">
                <div className='grid xl:grid-cols-2 gap-8 container'>
                    {
                        consults?.map(consult => (
                            <div className='md:flex  gap-3 bg-gray-50 hover:-translate-y-1 duration-500 '>
                            <div className='w-full md:w-[900px] '>
                              <img
                                src={consult.img}
                                className='h-64'
                                alt=''
                              />
                            </div>
                
                            <div className='p-2'>
                              <div>
                                
                              </div>
                              <h1 className='text-xl font-bold leading-5 my-3 text-[#303030]'>
                                {consult.name}
                              </h1>
                
                              <p className='mb-4 text-gray-700 text-sm leading-7'>
                                {consult.description.slice(0, 180)}
                              </p>
                                <button className=' items-center font-semibold text-orange-500 hover:underline hover:text-[#f52d05] duration-300 my-2 '>
                               Book Now
                              </button>
                            </div>
                          </div>
                        ))
                    }
                </div>
            </div>
         </div>
    );
};

export default FreeCounselling;