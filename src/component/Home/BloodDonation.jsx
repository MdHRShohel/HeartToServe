import {ImLocation} from 'react-icons/im'
import {AiOutlineClockCircle} from 'react-icons/ai'
const BloodDonation = () => {
    return (
        
     <div className='p-2 lg:p-0'>
        <div className='justify-center items-center text-center mt-16 mb-12'>
            <h1 className='text-center text-orange-500 font-bold text-2xl md:text-3xl drop-shadow-lg'>DONATION CAMPAIGNS</h1>
            
        </div>


<div className="grid xl:grid-cols-2 gap-8 container">
    
    <div className="md:flex  gap-3 bg-gray-50 hover:-translate-y-1 duration-500 ">
        <div className="">
            
            <img src="https://i.ibb.co/JnhpsJx/donation.jpg" className="w-full md:w-[730px] h-64" alt="" />
        </div>

        <div className="p-2">
            
           <div>
           <p className="text-black font-semibold  hover:cursor-pointer" >20 SEP, 2017 </p>
           </div>
            <h1 className="text-lg font-bold leading-5 my-3 text-[#303030]">O- BLOOD DONORS NEEDED</h1>

            <p className="mb-4 text-gray-700 text-sm leading-6">O Negative blood cells are called “universal” meaning they can be transfused to almost any patient in need and blood cells are safest.</p>

           
                <div className="mt-4 flex items-center md:gap-2 text-sm text-[#303030] ">
                    <span> <AiOutlineClockCircle/></span>
                    <p>10.00am-3.00pm</p> |
                    <span> <ImLocation/></span>
                    <p>California, USA</p>
                </div>
                <button className=' items-center font-semibold text-orange-500 hover:underline hover:text-[#f52d05] duration-300 my-2 '>View Details</button>
            
            
        </div>
    </div>


    <div className="md:flex  gap-3 bg-gray-50 hover:-translate-y-1 duration-500">
        <div className="">
            
            <img src="https://i.ibb.co/XW7rY6j/you.jpg" className="w-full md:w-[650px] h-64" alt="" />
        </div>

        <div className="p-2">
            
           <div>
           <p className="text-black font-semibold hover:cursor-pointer" >14 JUNE, 2017</p>
           </div>
            <h1 className="text-lg font-bold leading-5 my-3 text-[#303030]">WORLD BLOOD DONORS DAY</h1>

            <p className="mb-4 text-gray-700 text-sm leading-6">Every year, on 14 June, countries around the world celebrate World Blood Donor Day. The event serves to thank voluntary.</p>

           
                <div className="mt-4 flex items-center md:gap-2 text-sm text-[#303030]">
                    <span> <AiOutlineClockCircle/></span>
                    <p>10.00am-3.00pm</p> |
                    <span> <ImLocation/></span>
                    <p>California, USA</p>
                </div>
                <button className=' items-center font-semibold text-orange-500 hover:underline hover:text-[#f52d05] duration-300 my-2 '>View Details</button>
            
            
        </div>
    </div>



    <div className="md:flex  gap-3 bg-gray-50 hover:-translate-y-1 duration-500">
        <div className="">
            
            <img src="https://i.ibb.co/mGCMBNn/world.jpg" className="w-full md:w-[700px] h-64" alt="" />
        </div>

        <div className="p-2">
            
           <div>
           <p className="text-black font-semibold hover:cursor-pointer" >14 JUNE, 2017</p>
           </div>
            <h1 className="text-lg font-bold leading-5 my-3 text-[#303030]">YOU ARE SOMEBODY’S TYPE</h1>

            <p className="mb-4 text-gray-700 text-sm leading-6">Many people has same blood group like you. so donate now and bring smiles in their face and encourage others for donate blood.</p>

           
                <div className="mt-4 flex items-center md:gap-2 text-sm text-[#303030]">
                    <span> <AiOutlineClockCircle/></span>
                    <p>10.00am-3.00pm</p> |
                    <span> <ImLocation/></span>
                    <p>California, USA</p>
                </div>
                <button className=' items-center font-semibold text-orange-500 hover:underline hover:text-[#f52d05] duration-300 my-2 '>View Details</button>
            
            
        </div>
    </div>



    <div className="md:flex  gap-3 bg-gray-50 hover:-translate-y-1 duration-500">
        <div className="">
            
            <img src="https://i.ibb.co/HdrY1r7/o.jpg" className="w-full md:w-[720px] h-64" alt="" />
        </div>

        <div className="p-2">
            
           <div>
           <p className="text-black font-semibold hover:cursor-pointer" >14 JUNE, 2017</p>
           </div>
            <h1 className="text-lg font-bold leading-5 my-3 text-[#303030]">DONATION - FEEL REAL PEACE</h1>

            <p className="mb-4 text-gray-700 text-sm leading-6">You're the real hero because you can gift a new life for patient.So donate your blood and enjoy a precious life. Don't fear, it's really easy.</p>

           
                <div className="mt-4 flex items-center md:gap-2 text-sm text-[#303030]">
                    <span> <AiOutlineClockCircle/></span>
                    <p>10.00am-3.00pm</p> |
                    <span> <ImLocation/></span>
                    <p>California, USA</p>
                </div>
                <button className=' items-center font-semibold text-orange-500 hover:underline hover:text-[#f52d05] duration-300 my-2 '>View Details</button>
                
            
            
        </div>
    </div>

      </div>
     </div>
    );
};

export default BloodDonation;