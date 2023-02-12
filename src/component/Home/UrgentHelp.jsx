
const UrgentHelp = () => {
    return (
        <div className="container mx-auto p-2 md:p-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
                <div>
                <p className="text-[#303030]" >URGENT HELP</p>
                <h1 className="text-lg md:text-3xl font-bold leading-5 my-3 text-[#303030]">CHECK THE CAUSES</h1>
                <p className="mb-4 text-gray-700 text-sm leading-6 w-full md:w-2/3">Pellentesque maximus pharetra tristique. Vestibulum eget odio blandit, finibus felis non, efficitur diam. Sed condimentum pellentesque eros. Etiam posuere turpis in ultricies ullamcorper.</p>
                <div className="flex gap-12 items-center">
                    <img src="https://i.ibb.co/9pqJ4pN/rounded.jpg" className="w-10 h-10 rounded-full" alt="" />
                    <p className="font-mono">Jenna Ortega</p>
                </div>
                </div>
                <div className="my-2 md:my-0">
                    <img src="https://i.ibb.co/fHsCjf0/bedi.jpg" className=" w-full h-full md:w-72 md:h-96" alt="" />
                </div>

                <div className=" lg:-ml-28 xl:-ml-36  mt-10 ">
                    <div >
                       <div className="flex gap-3">
                       <img src="https://i.ibb.co/wCn9wPF/abuidda1.jpg" className="w-20 h-20" alt="" />
                        <div>
                            <h1 className="font-semibold">Water For All</h1>
                            <div className="mt-1 flex items-center md:gap-2 text-sm text-[#303030] ">
                               <span> Goal</span>
                                <p className="mr-4">320000$</p> 
                                <span> Raised:</span>
                                <p>55600$</p>
                              </div>

                              <button className=' items-center font-semibold text-orange-500 hover:underline hover:text-[#f52d05] duration-300 my-1 '>View Details</button>
                        </div>
                       </div>
                    </div>



                    <div className=" my-8">
                       <div className="flex gap-3">
                       <img src="https://i.ibb.co/n7n3CbG/fani.jpg" className="w-20 h-20" alt="" />
                        <div>
                            <h1 className="font-semibold">Child Support</h1>
                            <div className="mt-1 flex items-center md:gap-2 text-sm text-[#303030] ">
                               <span> Goal</span>
                                <p className="mr-4">15000$</p> 
                                <span> Raised:</span>
                                <p>55600$</p>
                              </div>

                              <button className=' items-center font-semibold text-orange-500 hover:underline hover:text-[#f52d05] duration-300 my-1 '>View Details</button>
                        </div>
                       </div>
                    </div>






                    <div>
                       <div className="flex gap-3">
                       <img src="https://i.ibb.co/z5kK4mT/abuidda2.jpg" className="w-20 h-20" alt="" />
                        <div>
                            <h1 className="font-semibold">Water Wells</h1>
                            <div className="mt-1 flex items-center md:gap-2 text-sm text-[#303030] ">
                               <span> Goal</span>
                                <p className="mr-4">90000$</p> 
                                <span> Raised:</span>
                                <p>52600$</p>
                              </div>

                              <button className=' items-center font-semibold text-orange-500 hover:underline hover:text-[#f52d05] duration-300 my-1 '>View Details</button>
                        </div>
                       </div>
                    </div>
                </div>
            </div>

            <div className="md:flex items-center gap-16 my-16">
                <div className="flex items-center gap-6 shadow-md">
                    <div className="md:-ml-8 lg:-ml-10">
                        <img src="https://i.ibb.co/N39SGyD/one.png" alt="" />
                    </div>
                    <div className="p-4">
                    <h1 className="text-lg md:text-xl lg:text-3xl  font-bold leading-5 my-3 text-[#303030]">Help to Families</h1>
                <p className="mb-4 text-gray-700 text-sm leading-6  ">Pellentesque maximus pharetra tristique. Vestibulum eget odio blandit, finibus felis non, efficitur diam.</p> 
                    </div>
                </div>

                <div className="flex items-center gap-6 shadow-md">
                    <div className="md:-ml-8 lg:-ml-10">
                        <img src="https://i.ibb.co/KK1YHy3/two.png" alt="" />
                    </div>
                    <div  className="p-4">
                    <h1 className="text-lg md:text-xl lg:text-3xl font-bold leading-5 my-3 text-[#303030]">Support for Mothers</h1>
                <p className="mb-4 text-gray-700 text-sm leading-6  ">Pellentesque maximus pharetra tristique. Vestibulum eget odio blandit, finibus felis non, efficitur diam.</p> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UrgentHelp;