"use client"

import { useEffect, useState } from "react";
import { motion as m } from "framer-motion";

const FreeCounselling = () => {
    const [consults, setConsults] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/counseling`)
            .then(res => res.json())
            .then(data => setConsults(data.slice(0, 4)))

    }, [])


    return (
        <m.div
            initial={{ scale: 0.2 }}
            whileInView={{
                scale: 1,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="mb-16 p-2 md:p-0">
            <h1 className="text-center text-orange-500 font-bold text-3xl drop-shadow-lg mb-12">Free Counselling</h1>
            <div className="container">
                <div className='grid xl:grid-cols-2 gap-8 container'>
                    {
                        consults?.map(consult => (
                            <div className='md:flex  gap-3 bg-gray-50 hover:-translate-y-1 duration-500 '>
                                <div className='w-full md:w-[900px] '>
                                    <img
                                        src={consult.img}
                                        className='h-56'
                                        alt=''
                                    />
                                </div>

                                <div className='p-2 max-w-[350px]'>
                                    <h1 className='text-xl font-bold leading-5 my-3 text-[#303030]'>
                                        {consult.name}
                                    </h1>

                                    <p className='mb-4 text-gray-700 text-sm leading-7'>
                                        {consult.description.slice(0, 180)}
                                    </p>
                                    <button className=' items-center font-semibold text-orange-500 hover:underline hover:text-[#f52d05] duration-300 '>
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='flex items-center justify-center mt-6'>
                <button className='font-semibold mx-auto text-center text-lg text-[#f52d05] border-b border-b-[#f52d05]'>
                    See More
                </button>
            </div>
        </m.div>
    );
};

export default FreeCounselling;