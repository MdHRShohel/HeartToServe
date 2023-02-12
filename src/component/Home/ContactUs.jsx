import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { TbHeartbeat } from "react-icons/tb";
import { Map, Marker } from "pigeon-maps";

function ContactUs() {
  return (
    <div className="w-10/12 my-20 container">
      <h1 className="text-center text-orange-500 font-bold text-3xl drop-shadow-lg">
        Get In Touch With Us
      </h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="">
          <Map height={350} defaultCenter={[23.8103, 90.4125]} defaultZoom={10}>
            <Marker width={50} anchor={[23.8103, 90.4125]} />
          </Map>
        </div>
        <div className="p-12 bg-gray-100 grid items-center  h-[350px]">
          <h2 className="text-3xl font-semibold text-[#303030]">Location</h2>
          <div className="flex items-center mt-8">
            <BsFillTelephoneOutboundFill
              fontSize={30}
              className="mr-4 text-orange-500"
            />
            <p className="text-sm">+880 111 222 3333</p>
          </div>
          <div className="flex items-center mt-2">
            <MdMarkEmailUnread fontSize={30} className="mr-4 text-orange-500" />
            <p className="text-sm">contact@hearttoSave.com</p>
          </div>
          <div className="flex items-center mt-2">
            <FaLocationArrow fontSize={30} className="mr-4 text-orange-500" />
            <p className="text-sm">
              Tejturi Bazar West, Panthapath, Dhaka 1215
            </p>
          </div>
        </div>
        <div className="bg-[#FFE2DA] text-[#ff9370] p-8 grid items-center text-center h-[350px] md:col-span-2 lg:col-span-1">
          <TbHeartbeat fontSize={80} className="mx-auto" />
          <h2 className="text-3xl font-bold">Saving Lives</h2>
          <p className="mt-4 text-xs font-semibold">
            This is a{" "}
            <span className="text-[#f52d05]">Volunteer Organization</span> for
            help people. we are working as volunteer. our target to help{" "}
            <span className="text-[#f52d05]">poor people</span>.
          </p>
          <button className="bg-[#ffe2da] hover:bg-[#ffd3c6] duration-300 w-full text-[#ff9370] font-semibold py-2 mt-4 px-3 rounded ">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
