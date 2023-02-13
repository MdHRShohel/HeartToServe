
const UrgentHelp = () => {
    return (
        <div className="container mx-auto p-2 md:p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center">
                <div className="text-center lg:text-left">
                    <p className="text-[#303030] text-xl" >URGENT HELP</p>
                    <h1 className="text-3xl font-bold leading-5 my-3 text-[#303030]">CHECK THE CAUSES</h1>
                    <p className="mb-4 hidden md:block text-gray-700 text-md lg:text-lg lg:w-full p-6 lg:p-0 text-justify">Pellentesque maximus pharetra tristique. Vestibulum eget odio blandit, finibus felis non, efficitur diam. Sed condimentum pellentesque eros. Etiam posuere turpis in ultricies ullamcorper.</p>

                    <p className="mb-4 md:hidden text-gray-700 text-md lg:text-lg lg:w-full p-2 lg:p-0 text-justify">Pellentesque maximus pharetra tristique. Vestibulum eget odio blandit, finibus felis non, efficitur diam.</p>

                    <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                        <img src="https://i.ibb.co/9pqJ4pN/rounded.jpg" className="w-10 h-10 rounded-full" alt="" />
                        <p className="font-mono text-xl">Jenna Ortega</p>
                    </div>
                </div>
                <div className="mb-6 md:flex items-center md:justify-center lg:justify-between">
                    <div className="">
                        <img src="https://i.ibb.co/fHsCjf0/bedi.jpg" className=" w-full h-full lg:w-64 md:h-96" alt="" />
                    </div>

                    <div className="mt-2 md:mt-0 md:-ml-10 lg:ml-52 lg:absolute">

                        <div className="md:flex gap-3 items-center  ">
                            <div>
                                <img src="https://i.ibb.co/wCn9wPF/abuidda1.jpg" className="w-full md:w-16 md:h-16" alt="" />
                            </div>
                            <div className="flex flex-col items-start p-2 md:p-0">
                                <h1 className="font-semibold">Water For All</h1>
                                <div className="flex gap-2">
                                   <p className="text-sm">Goal:320000$</p> 
                                   <p className="text-sm">Raised:55600$</p>
                                </div>
                                <div className="flex justify-start">
                                    <button className=' font-semibold text-orange-500 hover:underline hover:text-[#f52d05] duration-300 my-1 '>View Details</button>
                                </div>
                        </div>
                        </div>

                        <div className="md:flex gap-3  items-center  my-4">
                            <div>
                                <img src="https://i.ibb.co/z5kK4mT/abuidda2.jpg" className="w-full md:w-16 md:h-16" alt="" />
                            </div>
                            <div className="flex flex-col  items-start p-2 md:p-0">
                                <h1 className="font-semibold">Water Wells</h1>
                                <div className="flex gap-2">
                                   <p className="text-sm">Raised:55600$</p>
                                   <p className="text-sm">Goal:900000$</p> 
                                </div>
                                <div className="flex justify-start">
                                    <button className=' font-semibold text-orange-500 hover:underline hover:text-[#f52d05] duration-300 my-1 '>View Details</button>
                                </div>
                        </div>
                        </div>

                        <div className="md:flex gap-3  items-center  ">
                            <div>
                                <img src="https://i.ibb.co/n7n3CbG/fani.jpg" className="w-full md:w-16 md:h-16" alt="" />
                            </div>
                            <div className="flex flex-col  items-start p-2 md:p-0">
                                <h1 className="font-semibold">Child Support</h1>
                                <div className="flex gap-2">
                                   <p className="text-sm">Goal:150000$</p> 
                                   <p className="text-sm">Raised:55600$</p>
                                </div>
                                <div className="flex justify-start">
                                    <button className=' font-semibold text-orange-500 hover:underline hover:text-[#f52d05] duration-300 my-1 '>View Details</button>
                                </div>
                        </div>
                        </div>

                    </div>
                    
                </div>
            </div>




            <div className="grid grid-cols-1 justify-center md:grid-cols-2 gap-4 pt-0 p-2 pb-6 lg:p-6 lg:gap-8 mb-10">
                <div className="md:flex items-center gap-6 shadow-lg p-2 lg:p-12 rounded-lg">
                    <div className="md:-ml-4 lg:-ml-8">
                        <img src="https://i.ibb.co/N39SGyD/one.png" className="w-20 md:w-full" alt="" />

                    </div>
                    <div>
                        <h1 className="text-lg md:text-xl lg:text-3xl  font-bold leading-5 my-3 text-[#303030]">Help to Families</h1>
                        <p className="mb-4 text-gray-700 text-sm leading-6  ">Pellentesque maximus pharetra tristique. Vestibulum eget odio blandit, finibus felis non, efficitur diam.</p> 
                    </div>
                </div>
                <div className="md:flex items-center gap-6 shadow-lg p-2 lg:p-12 rounded-lg">
                    <div className="md:-ml-4 lg:-ml-8">
                        <img src="https://i.ibb.co/KK1YHy3/two.png" className="w-20 md:w-full" alt="" />

                    </div>
                    <div>
                    <h1 className="text-lg md:text-xl lg:text-3xl font-bold leading-5 my-3 text-[#303030]">Support for Mothers</h1>
                    <p className="mb-4 text-gray-700 text-sm leading-6  ">Pellentesque maximus pharetra tristique. Vestibulum eget odio blandit, finibus felis non, efficitur diam.</p>  
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default UrgentHelp;