"use-client"
import React, { useEffect, useState } from 'react';
import bg from "../../asset/blood-donor.jpg"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

const FindDonor = () => {
    const [donors, setDonors] = useState([])
    useEffect(() => {
        fetch('donor.json')
            .then(res => res.json())
            .then(data => setDonors(data))
    }, [])
    return (
        <div className='container mx-auto'>
            <div className='py-16'
                style={{
                    background:
                        `linear-gradient(#00000099, #24232338), url(https://i.ibb.co/8xN3qcZ/blood-donor.jpg)`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: "100%",
                    height: "500px",
                    borderRadius: "8px"
                }}>
                <h2 className='text-center text-white font-bold text-5xl md:text-3xl drop-shadow-lg mb-10'>Find Donor's
                </h2>
                <div className='flex items-center justify-center gap-8'>
                    <button className='px-3 py-2 text-white text-lg bg-orange-600 rounded hover:bg-white hover:text-orange-600 duration-300'>
                        A+
                    </button>
                    <button className='px-3 py-2 text-white text-lg bg-orange-600 rounded hover:bg-white hover:text-orange-600 duration-300'>
                        A-
                    </button>
                    <button className='px-3 py-2 text-white text-lg bg-orange-600 rounded hover:bg-white hover:text-orange-600 duration-300'>
                        B+
                    </button>
                    <button className='px-3 py-2 text-white text-lg bg-orange-600 rounded hover:bg-white hover:text-orange-600 duration-300'>
                        B-
                    </button>
                    <button className='px-3 py-2 text-white text-lg bg-orange-600 rounded hover:bg-white hover:text-orange-600 duration-300'>
                        O+
                    </button>
                    <button className='px-3 py-2 text-white text-lg bg-orange-600 rounded hover:bg-white hover:text-orange-600 duration-300'>
                        O-
                    </button>
                    <button className='px-3 py-2 text-white text-lg bg-orange-600 rounded hover:bg-white hover:text-orange-600 duration-300'>
                        AB+
                    </button>
                    <button className='px-3 py-2 text-white text-lg bg-orange-600 rounded hover:bg-white hover:text-orange-600 duration-300'>
                        AB-
                    </button>
                </div>
                <div className='px-5 pt-8'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                        }}
                        speed={1000}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Pagination, Autoplay]}
                        className='mySwiper'>
                        {
                            donors.map(donor => (
                                <SwiperSlide className="px-5 py-6 bg-[#00000030] text-[#f8f8ff] border rounded shadow-sm  text-center font-semibold mb-4 hover:scale-95 duration-300">
                                    <h6 className="text-xl mb-3 font-bold leading-5">
                                        {donor.name}
                                    </h6>
                                    <p className="text-sm text-neutral mb-2">
                                        {donor.email}
                                    </p>
                                    <p className="text-sm text-neutral mb-2">
                                        Phone:{' '}{donor.phone}
                                    </p>
                                    <p className="text-sm text-neutral">
                                        Blood Group:{' '}{donor.blood}
                                    </p>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div >
    );
};

export default FindDonor;