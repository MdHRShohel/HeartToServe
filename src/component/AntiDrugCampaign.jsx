const AntiDrugCampaign = () => {
    return (
        <div className="container mx-auto">
            <div className="px-4 py-16">
      <div className="grid gap-5 lg:grid-cols-3">
        
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
          <div className="relative">
            <div className="overflow-hidden hover:filter hover:brightness-50 duration-300">
                <img
              src="https://i.ibb.co/BZrrxm9/323730be661c63075bee41a4b2f38c0c.webp"
              className="object-cover w-full h-64 rounded hover:scale-105 duration-300"
              alt=""
            />
            </div>
            <div className="absolute top-5 left-0 flex justify-center items-center text-[#9b8db7] bg-[#f0e8f8] px-[6px] py-[2px]">
              <p className="text-5xl font-bold">11</p>
              <div className="font-semibold text-xs leading-4">
                <p>Jun</p>
                <p>2023</p>
              </div>
            </div>
          </div>
          <div className="bg-[#f6f6f6] px-5 py-4 text-[#303030]">
            
            <h2 className="text-xl font-bold leading-5 mb-3">Diving to the deep</h2>

            <p className="mb-4 text-gray-700 text-sm leading-6">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <div className="flex">
               <button
              className="inline-flex items-center font-semibold hover:border-b hover:border-black hover:duration-300"
            >
              Learn more
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default AntiDrugCampaign;