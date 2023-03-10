"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const FreeCounselling = () => {
  const [consults, setConsults] = useState([]);
  useEffect(() => {
    fetch(`https://heart-to-serve-server.vercel.app/counseling`)
      .then((res) => res.json())
      .then((data) => setConsults(data.slice(0, 4)));
  }, []);

  return (
    <div className="my-16 p-2 md:p-0">
      <h1 className="text-center text-orange-500 font-bold text-3xl drop-shadow-lg mb-12">
        Free Counselling
      </h1>
      <div className="container">
        <div className="grid xl:grid-cols-2 gap-8 container">
          {consults?.map((consult) => (
            <div className="md:flex  gap-3 bg-gray-50 hover:-translate-y-1 duration-500 ">
              <div className="w-full md:w-[900px] ">
                <img src={consult.img} className="h-56" alt="" />
              </div>

              <div className="p-2 max-w-[350px]">
                <h1 className="text-xl font-bold leading-5 my-3 text-[#303030]">
                  {consult.name}
                </h1>

                <p className="mb-4 text-gray-700 text-sm leading-7">
                  {consult.description.slice(0, 180)}
                </p>
                <button className=" items-center font-semibold text-orange-500 hover:underline hover:text-[#f52d05] duration-300 ">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center mt-6">
        <Link
          href={"/Counselling"}
          className="font-semibold mx-auto text-center text-lg text-[#f52d05] border-b border-b-[#f52d05]"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default FreeCounselling;
