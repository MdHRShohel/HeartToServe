"use client";

import { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const YouthDevelopment = () => {
  const [programmes, setProgrammes] = useState([]);
  useEffect(() => {
    fetch("https://heart-to-serve-server.vercel.app/programs")
      .then((res) => res.json())
      .then((data) => {
        setProgrammes(data);
      });
  }, []);
  return (
    <div className="container py-16">
      <h2 className="text-center text-orange-500 font-bold text-2xl md:text-3xl drop-shadow-lg mb-10">
        {" "}
        Youth Development Programme
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {programmes?.map((programme) => (
          <>
            <div className="px-4 py-3 lg:px-3">
              <div className="grid gap-5 sm:max-w-sm sm:mx-auto lg:max-w-full hover:scale-105 duration-300">
                <div className="overflow-hidden bg-slate-50 hover:bg-slate-100  transition-shadow duration-300  rounded-lg">
                  <PhotoProvider>
                    <PhotoView src={programme.img}>
                      <img
                        src={programme.img}
                        className="object-cover w-full h-64 rounded cursor-pointer "
                        alt=""
                      />
                    </PhotoView>
                  </PhotoProvider>

                  <div className="pt-5">
                    <a
                      href="/"
                      aria-label="Article"
                      className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                    >
                      <p className="text-lg font-bold leading-5 p-2 xl:px-6 xl:mb-2">
                        {programme.name}
                      </p>
                    </a>
                    <div className="flex justify-between p-2 xl:p-0">
                      <p className="text-gray-700 xl:px-6">
                        Duration: {programme.duration}
                      </p>
                      <p className="text-gray-700 xl:px-6">
                        Rating: {programme.rating}
                      </p>
                    </div>
                  </div>
                  <div className="w-full">
                    <button className="  bg-[#ffae97] hover:bg-[#ffe2da]  text-white hover:text-[#fe8158] font-semibold py-3 mt-6 px-3 rounded w-full duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default YouthDevelopment;
