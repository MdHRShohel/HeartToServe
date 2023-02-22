"use-client"
import React, { useEffect, useState } from 'react';
import bg from "../../asset/blood-donor.jpg"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";
import { useQuery } from '@tanstack/react-query';
import Loader from '../Shared/Loader';

const FindDonor = () => {

    const [group, setGroup] = useState("AP")
    const { data: donors = [], refetch, isLoading } = useQuery({
        queryKey: ['donors', group],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/donors?group=${group}`)
            const data = await res.json()
            return data
        }
    })

    const [AP, setAP] = useState(true)
    const [AN, setAN] = useState(false)
    const [BP, setBP] = useState(false)
    const [BN, setBN] = useState(false)
    const [OP, setOP] = useState(false)
    const [ON, setON] = useState(false)
    const [ABP, setABP] = useState(false)
    const [ABN, setABN] = useState(false)

    const handleAPositive = () => {
        setGroup("AP");
        setAP(true)
        setAN(false)
        setBP(false)
        setBN(false)
        setOP(false)
        setON(false)
        setABP(false)
        setABN(false)
        refetch()
    }

    const handleANegitive = () => {
        setGroup("AN");
        setAN(true)
        setAP(false)
        setBP(false)
        setBN(false)
        setOP(false)
        setON(false)
        setABP(false)
        setABN(false)
        refetch()
    }

    const handleBPositive = () => {
        setGroup("BP");
        setBP(true)
        setAP(false)
        setAN(false)
        setBN(false)
        setOP(false)
        setON(false)
        setABP(false)
        setABN(false)
        refetch()
    }

    const handleBNegitive = () => {
        setGroup("BN");
        setBN(true)
        setAP(false)
        setAN(false)
        setBP(false)
        setOP(false)
        setON(false)
        setABP(false)
        setABN(false)
        refetch()
    }

    const handleOPositive = () => {
        setGroup("OP");
        setOP(true)
        setAP(false)
        setAN(false)
        setBP(false)
        setBN(false)
        setON(false)
        setABP(false)
        setABN(false)
        refetch()
    }

    const handleONegitive = () => {
        setGroup("ON");
        setON(true)
        setAP(false)
        setAN(false)
        setBP(false)
        setBN(false)
        setOP(false)
        setABP(false)
        setABN(false)
        refetch()
    }

    const handleABPositive = () => {
        setGroup("ABP");
        setABP(true)
        setAP(false)
        setAN(false)
        setBP(false)
        setBN(false)
        setOP(false)
        setON(false)
        setABN(false)
        refetch()
    }

    const handleABNegitive = () => {
        setGroup("ABN");
        setABN(true)
        setAP(false)
        setAN(false)
        setBP(false)
        setBN(false)
        setOP(false)
        setON(false)
        setABP(false)
        refetch()
    }

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
                <h2 className='text-center text-white font-bold text-3xl lg:text-5xl md:text-3xl drop-shadow-lg mb-10'>Find Donor's
                </h2>
                <div className='flex items-center justify-center gap-[5px] md:gap-5 lg:gap-8 px-1 md:px-0'>
                    <button
                        onClick={handleAPositive}
                        className={AP ? "active-donor" : "non-active-donor"}>
                        A+
                    </button>
                    <button
                        onClick={handleANegitive}
                        className={AN ? "active-donor" : "non-active-donor"}>
                        A-
                    </button>
                    <button
                        onClick={handleBPositive}
                        className={BP ? "active-donor" : "non-active-donor"}>
                        B+
                    </button>
                    <button
                        onClick={handleBNegitive}
                        className={BN ? "active-donor" : "non-active-donor"}>
                        B-
                    </button>
                    <button
                        onClick={handleOPositive}
                        className={OP ? "active-donor" : "non-active-donor"}>
                        O+
                    </button>
                    <button
                        onClick={handleONegitive}
                        className={ON ? "active-donor" : "non-active-donor"}>
                        O-
                    </button>
                    <button
                        onClick={handleABPositive}
                        className={ABP ? "active-donor" : "non-active-donor"}>
                        AB+
                    </button>
                    <button
                        onClick={handleABNegitive}
                        className={ABN ? "active-donor" : "non-active-donor"}>
                        AB-
                    </button>
                </div>
                <div className='px-5 pt-8'>
                    {
                        isLoading ?
                            <Loader />
                            :
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
                                        slidesPerView: 3,
                                        spaceBetween: 50,
                                    },
                                    1280: {
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
                                        <SwiperSlide className="px-5 py-6 bg-[#00000030] text-[#f8f8ff] border rounded shadow-sm  text-center font-semibold mb-4 cursor-pointer">
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
                    }
                </div>
            </div>
        </div >
    );
};

export default FindDonor;