"use client"

import { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const YouthDevelopment = () => {
    const [programmes, setProgrammes] = useState([])
    useEffect(() => {
        fetch("developments.json")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProgrammes(data)
            })
        
    }, [])
    return (
        <div className="container mx-auto py-16">
            <h2 className="text-center font-bold text-4xl mt-4 mb-10 text-[#ff9370]">Our Youth Development Programme</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    programmes?.map(programme => <>
                        <div className="px-4 py-3 md:px-24 lg:px-8">
                            <div className="grid gap-5 sm:max-w-sm sm:mx-auto lg:max-w-full">
                                <div className="overflow-hidden bg-slate-50 hover:bg-slate-100  transition-shadow duration-300  rounded-lg">
                                <PhotoProvider>
                                    <PhotoView src={programme.img}>
                                        <img src={programme.img}
                                        className="object-cover w-full h-64 rounded cursor-pointer"
                                        alt=""/>
                                    </PhotoView>
                                </PhotoProvider>
                                
                                <div className="py-5">
                                   
                                    <a
                                    href="/"
                                    aria-label="Article"
                                    className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                                    >
                                            <p className="text-xl font-bold leading-5 px-6 mb-4">{programme.name}</p>
                                    </a>
                                    <div className="flex justify-between">
                                        <p className="text-gray-700 px-6">
                                           Duration: {programme.description}
                                        </p>
                                        <p className="text-gray-700 px-6">
                                          Rating: {programme.rating}
                                        </p>
                                    </div>
                                </div>
                                    <div className="w-full">
                                        <button className=' bg-[#ffe2da] hover:bg-[#ffae97] text-[#fe8158] hover:text-white font-semibold py-3 mt-6 px-3 rounded w-full'>View Details</button>
                                    </div>
                                </div>
                               
                              
                            </div>
                              
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default YouthDevelopment;

