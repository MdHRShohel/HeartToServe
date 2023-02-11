"use-client"

import { useEffect, useState } from "react";

const AntiDrugCampaign = () => {
    const [campaigns, setCampaigns] = useState([])
    useEffect(()=>{
        fetch('drugCampaign.json')
        .then(res => res.json())
        .then(data => setCampaigns(data))
    },[])
    return (
        <div className="container mx-auto">
            <div className="px-4 py-16">
                <div>
                    <h2 className="text-3xl text-[#303030] text-center mb-10 font-semibold">Anti-Drug Campaign's</h2>
                </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
            campaigns.map(campaign =>(
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
          <div className="relative">
            <div className="overflow-hidden hover:filter hover:brightness-50 duration-300">
                <img
              src={campaign.img}
              className="object-cover w-full h-64 rounded hover:scale-105 duration-300"
              alt=""
            />
            </div>
            <div className="absolute top-3 left-0 flex justify-center items-center text-[#f47655] bg-[#ffe2da] px-[6px] py-[2px]">
              <p className="text-5xl font-bold mr-1">{campaign.date}</p>
              <div className="font-semibold text-xs leading-4">
                <p>{campaign.month}</p>
                <p>{campaign.year}</p>
              </div>
            </div>
          </div>
          <div className="bg-[#f6f6f6] px-5 py-4 text-[#303030]">
            
            <h2 className="text-lg font-bold leading-5 mb-3">{campaign.title}</h2>

            <p className="mb-4 text-gray-700 text-sm leading-6">
              {campaign.desc.slice(0, 80)+'...'}
            </p>
            <div className="flex">
               <button
              className="inline-flex items-center font-semibold text-[#F36A4F] hover:border-b hover:border-b-[#F36A4F] hover:text-[#f52d05] duration-300"
            >
              Read more
            </button>
            </div>
          </div>
        </div>
            ))
        }
      </div>
      <div className="flex items-center justify-center">
        <button 
      className="font-semibold mx-auto text-center text-lg text-[#f52d05] mt-6 border-b border-b-[#f52d05]">
        See More
        </button>
      </div>
    </div>
        </div>
    );
};

export default AntiDrugCampaign;