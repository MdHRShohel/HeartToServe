
const UrgentHelp = () => {
    return (
        <div className="container mx-auto p-2 md:p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center">
                <div className="text-center lg:text-left">
                    <p className="text-[#303030] text-xl" >URGENT HELP</p>
                    <h1 className="text-3xl font-bold leading-5 my-3 text-[#303030]">CHECK THE CAUSES</h1>
                    <p className="mb-4 text-gray-700 text-xl lg:text-lg lg:w-full block mx-auto text-justify leading-6 p-6 lg:p-0">Pellentesque maximus pharetra tristique. Vestibulum eget odio blandit, finibus felis non, efficitur diam. Sed condimentum pellentesque eros. Etiam posuere turpis in ultricies ullamcorper.</p>
                    <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                        <img src="https://i.ibb.co/9pqJ4pN/rounded.jpg" className="w-10 h-10 rounded-full" alt="" />
                        <p className="font-mono text-xl">Jenna Ortega</p>
                    </div>
                </div>
                <div className="mb-6 flex items-center">
                    <div className="hidden lg:block">
                        <img src="https://i.ibb.co/fHsCjf0/bedi.jpg" className=" w-full h-full md:w-72 md:h-96" alt="" />
                    </div>
                    <div className="hidden lg:block">
                        <div className="flex gap-3 lg:-ml-6 mb-4">
                            <div>
                                <img src="https://i.ibb.co/wCn9wPF/abuidda1.jpg" className="w-20 h-20" alt="" />
                            </div>
                            <div className="flex flex-col items-start">
                                <h1 className="font-semibold">Water For All</h1>
                                <div className="flex gap-4">
                                   <p>Goal: 320000$</p> 
                                   <p> Raised: 55600$</p>
                                </div>
                                <div className="flex justify-start">
                                    <button className=' font-semibold text-orange-500 hover:underline hover:text-[#f52d05] duration-300 my-1 '>View Details</button>
                                </div>
                        </div>
                        </div>
                        <div className="flex gap-3 lg:-ml-6 items-center mb-4">
                            <div>
                                <img src="https://i.ibb.co/z5kK4mT/abuidda2.jpg" className="w-20 h-20" alt="" />
                            </div>
                            <div className="flex flex-col  items-start">
                                <h1 className="font-semibold">Water Wells</h1>
                                <div className="flex gap-4">
                                   <p>Goal: 900000$</p> 
                                   <p> Raised: 55600$</p>
                                </div>
                                <div className="flex justify-start">
                                    <button className=' font-semibold text-orange-500 hover:underline hover:text-[#f52d05] duration-300 my-1 '>View Details</button>
                                </div>
                        </div>
                        </div>
                        <div className="flex gap-3 lg:-ml-6 items-center">
                            <div>
                                <img src="https://i.ibb.co/n7n3CbG/fani.jpg" className="w-20 h-20" alt="" />
                            </div>
                            <div className="flex flex-col  items-start">
                                <h1 className="font-semibold">Child Support</h1>
                                <div className="flex gap-4">
                                   <p>Goal: 150000$</p> 
                                   <p> Raised: 55600$</p>
                                </div>
                                <div className="flex justify-start">
                                    <button className=' font-semibold text-orange-500 hover:underline hover:text-[#f52d05] duration-300 my-1 '>View Details</button>
                                </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 justify-center md:grid-cols-2 gap-4 pt-0 px-6 pb-6 lg:p-6 lg:gap-8 mb-10">
                <div className="flex items-center gap-6 shadow-lg p-12 rounded-lg">
                    <div className="md:-ml-8 lg:-ml-10">
                        <img src="https://i.ibb.co/N39SGyD/one.png" alt="" />

                    </div>
                    <div>
                        <h1 className="text-lg md:text-xl lg:text-3xl  font-bold leading-5 my-3 text-[#303030]">Help to Families</h1>
                        <p className="mb-4 text-gray-700 text-sm leading-6  ">Pellentesque maximus pharetra tristique. Vestibulum eget odio blandit, finibus felis non, efficitur diam.</p> 
                    </div>
                </div>
                <div className="flex items-center gap-6 shadow-lg p-12 rounded-lg">
                    <div className="md:-ml-8 lg:-ml-10">
                        <img src="https://i.ibb.co/KK1YHy3/two.png" alt="" />

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