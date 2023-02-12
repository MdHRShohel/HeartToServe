import Link from "next/link";
import React from "react";

const OurCorporatePartners = () => {
  return (
    <div className=''>
      <div className='grid lg:grid-cols-2 items-center container px-2 md:px-0'>
        <div className='text-center lg:text-end lg:p-12'>
          <h1 className='font-bold text-2xl sm:text-4xl sm:leading-[55px] py-4'>
            We Work with best
            <br /> Partners
          </h1>
          <p className='text-sm leading-6'>
            We Work provides flexible workspace solutions, including traditional
            offices, shared workspaces, office suites with private amenities.
            WeWork operates in more than 700 locations globally in 150 cities
            and 38 countries.
          </p>
          <button className='font-semibold tracking-wider px-6 py-2 mt-8 rounded-lg border border-black hover:bg-[#F36A4F] cursor-pointer hover:text-white hover:border-current transition-all duration-200'>
            <Link href={"#"}>Read More</Link>
          </button>
        </div>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 justify-items-center items-center'>
          <div className='w-3/5 md:w-4/5'>
            <img
              className='w-full fluid hover:scale-105 duration-300'
              src='https://nvsautomatizacion.com/wp-content/uploads/2017/08/headAntaira.png'
              alt=''
              srcSet=''
            />
          </div>
          <div className='w-3/5 md:w-4/5'>
            <img
              className='w-full fluid hover:scale-105 duration-300'
              src='https://velikorodnov.com/html/globalgive/charity/images/272x96_award1.svg'
              alt=''
              srcSet=''
            />
          </div>
          <div className='w-3/5 md:w-4/5'>
            <img
              className='w-full fluid hover:scale-105 duration-300'
              src='https://upload.wikimedia.org/wikipedia/commons/8/87/Genesis_logo.png'
              alt=''
              srcSet=''
            />
          </div>
          <div className='w-3/5 md:w-4/5'>
            <img
              className='w-full fluid hover:scale-105 duration-300'
              src='https://velikorodnov.com/html/globalgive/charity/images/272x96_award2.svg'
              alt=''
              srcSet=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCorporatePartners;
