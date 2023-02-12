"use-client"
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay, FreeMode } from "swiper";

const Team = () => {
    return (
        <div className="container">
            <div className="px-4 py-16">
                <div>
                    <h2 className="text-center text-orange-500 font-bold text-3xl drop-shadow-lg mb-10 ">
                        Meet Our Team Member's</h2>
                </div>
                {/* <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"> */}
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    loop={true}
                    speed={1200}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay, FreeMode]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                            <div className="relative">
                                <div className="overflow-hidden hover:filter hover:brightness-50 duration-300">
                                    <img
                                        src={"https://i.ibb.co/BTL49xz/3-Custom.png"}
                                        className="object-cover h-96 lg:h-72 rounded rounded-t hover:scale-105 duration-300 w-full"
                                        alt=""
                                    />
                                </div>
                                <div className="absolute bottom-5 left-0 flex justify-center items-center text-[#f47655] bg-[#ffe2da] px-[6px] py-[2px]">
                                    <p className="text-xl font-bold mr-1">Director</p>
                                </div>
                            </div>
                            <div className="px-1 py-4 text-[#303030]">

                                <h2 className="text-lg font-bold leading-5 mb-2">MD. Habibur Rahman</h2>
                                <p className="text-sm font-bold mr-1 mb-2">Managing Director</p>
                                <div className="flex items-center gap-3">
                                    <a href="https://www.facebook.com/MdHRShohel" target="_blank"
                                        className="inline-flex items-center font-semibold bg-[#F36A4F] text-white hover:bg-[#f52d05] duration-300 p-2 rounded-full"
                                    >
                                        <FaFacebookF />
                                    </a>
                                    <a href="https://www.linkedin.com/in/MdHRShohel/" target="_blank"
                                        className="inline-flex items-center font-semibold bg-[#F36A4F] text-white hover:bg-[#f52d05] duration-300 p-2 rounded-full"
                                    >
                                        <FaLinkedin />
                                    </a>
                                    <a href="https://twitter.com/MdHRShohel/" target="_blank"
                                        className="inline-flex items-center font-semibold bg-[#F36A4F] text-white hover:bg-[#f52d05] duration-300 p-2 rounded-full"
                                    >
                                        <FaTwitter />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                            <div className="relative">
                                <div className="overflow-hidden hover:filter hover:brightness-50 duration-300">
                                    <img
                                        src={"https://i.ibb.co/rdLWVC0/283151442-3209655919289484-7549610066858513993-n.jpg"}
                                        className="object-cover h-96 lg:h-72 rounded rounded-t hover:scale-105 duration-300 w-full"
                                        alt=""
                                    />
                                </div>
                                <div className="absolute bottom-5 left-0 flex justify-center items-center text-[#f47655] bg-[#ffe2da] px-[6px] py-[2px]">
                                    <p className="text-xl font-bold mr-1">Manager</p>
                                </div>
                            </div>
                            <div className="px-1 py-4 text-[#303030]">

                                <h2 className="text-lg font-bold leading-5 mb-2">Md. Parvez Hossain</h2>
                                <p className="text-sm font-bold mr-1 mb-2">Project Manager</p>
                                <div className="flex items-center gap-3">
                                    <a href="https://www.facebook.com/pervez.me/" target="_blank"
                                        className="inline-flex items-center font-semibold bg-[#F36A4F] text-white hover:bg-[#f52d05] duration-300 p-2 rounded-full"
                                    >
                                        <FaFacebookF />
                                    </a>
                                    <a href="https://www.linkedin.com/in/parvez-sakib/" target="_blank"
                                        className="inline-flex items-center font-semibold bg-[#F36A4F] text-white hover:bg-[#f52d05] duration-300 p-2 rounded-full"
                                    >
                                        <FaLinkedin />
                                    </a>
                                    <a href="https://twitter.com/" target="_blank"
                                        className="inline-flex items-center font-semibold bg-[#F36A4F] text-white hover:bg-[#f52d05] duration-300 p-2 rounded-full"
                                    >
                                        <FaTwitter />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                            <div className="relative">
                                <div className="overflow-hidden hover:filter hover:brightness-50 duration-300">
                                    <img
                                        src={"https://i.ibb.co/Vjzqn7n/20221208-135343.jpg"}
                                        className="object-cover h-96 lg:h-72 rounded rounded-t hover:scale-105 duration-300 w-full"
                                        alt=""
                                    />
                                </div>
                                <div className="absolute bottom-5 left-0 flex justify-center items-center text-[#f47655] bg-[#ffe2da] px-[6px] py-[2px]">
                                    <p className="text-xl font-bold mr-1">CEO</p>
                                </div>
                            </div>
                            <div className="px-1 py-4 text-[#303030]">

                                <h2 className="text-lg font-bold leading-5 mb-2">MD. Sajib Ahmed</h2>
                                <p className="text-sm font-bold mr-1 mb-2">Chief Executive Officer</p>
                                <div className="flex items-center gap-3">
                                    <a href="https://www.facebook.com/sj.khan.9634" target="_blank"
                                        className="inline-flex items-center font-semibold bg-[#F36A4F] text-white hover:bg-[#f52d05] duration-300 p-2 rounded-full"
                                    >
                                        <FaFacebookF />
                                    </a>
                                    <a href="https://www.linkedin.com/in/sajib-ahmed7315/" target="_blank"
                                        className="inline-flex items-center font-semibold bg-[#F36A4F] text-white hover:bg-[#f52d05] duration-300 p-2 rounded-full"
                                    >
                                        <FaLinkedin />
                                    </a>
                                    <a href="https://twitter.com/" target="_blank"
                                        className="inline-flex items-center font-semibold bg-[#F36A4F] text-white hover:bg-[#f52d05] duration-300 p-2 rounded-full"
                                    >
                                        <FaTwitter />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                            <div className="relative">
                                <div className="overflow-hidden hover:filter hover:brightness-50 duration-300">
                                    <img
                                        src={"https://i.ibb.co/6FVS8V6/317087513-1357970454939921-1300632659859450235-n.jpg"}
                                        className="object-cover h-96 lg:h-72 rounded rounded-t hover:scale-105 duration-300 w-full"
                                        alt=""
                                    />
                                </div>
                                <div className="absolute bottom-5 left-0 flex justify-center items-center text-[#f47655] bg-[#ffe2da] px-[6px] py-[2px]">
                                    <p className="text-xl font-bold mr-1">IT Manager</p>
                                </div>
                            </div>
                            <div className="px-1 py-4 text-[#303030]">

                                <h2 className="text-lg font-bold leading-5 mb-2">MD. Fardin Khan</h2>
                                <p className="text-sm font-bold mr-1 mb-2">Information Technology Manager</p>
                                <div className="flex items-center gap-3">
                                    <a href="https://www.facebook.com/profile.php?id=100074017012643" target="_blank"
                                        className="inline-flex items-center font-semibold bg-[#F36A4F] text-white hover:bg-[#f52d05] duration-300 p-2 rounded-full"
                                    >
                                        <FaFacebookF />
                                    </a>
                                    <a href="https://www.linkedin.com/in/fardinkhan121199/" target="_blank"
                                        className="inline-flex items-center font-semibold bg-[#F36A4F] text-white hover:bg-[#f52d05] duration-300 p-2 rounded-full"
                                    >
                                        <FaLinkedin />
                                    </a>
                                    <a href="https://twitter.com/" target="_blank"
                                        className="inline-flex items-center font-semibold bg-[#F36A4F] text-white hover:bg-[#f52d05] duration-300 p-2 rounded-full"
                                    >
                                        <FaTwitter />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                            <div className="relative">
                                <div className="overflow-hidden hover:filter hover:brightness-50 duration-300">
                                    <img
                                        src={"https://i.ibb.co/5c0YfxL/banner-420b94fb3ca07c5f895a.png"}
                                        className="object-cover h-96 lg:h-72 rounded rounded-t hover:scale-105 duration-300 w-full"
                                        alt=""
                                    />
                                </div>
                                <div className="absolute bottom-5 left-0 flex justify-center items-center text-[#f47655] bg-[#ffe2da] px-[6px] py-[2px]">
                                    <p className="text-xl font-bold mr-1">Manager</p>
                                </div>
                            </div>
                            <div className="px-1 py-4 text-[#303030]">

                                <h2 className="text-lg font-bold leading-5 mb-2">MD. Naimur Rahman</h2>
                                <p className="text-sm font-bold mr-1 mb-2">Supply Chain Manager</p>
                                <div className="flex items-center gap-3">
                                    <a href="https://www.facebook.com/mdnaimur.rahman.50309" target="_blank"
                                        className="inline-flex items-center font-semibold bg-[#F36A4F] text-white hover:bg-[#f52d05] duration-300 p-2 rounded-full"
                                    >
                                        <FaFacebookF />
                                    </a>
                                    <a href="https://www.linkedin.com/in/naimur-rahman2001/" target="_blank"
                                        className="inline-flex items-center font-semibold bg-[#F36A4F] text-white hover:bg-[#f52d05] duration-300 p-2 rounded-full"
                                    >
                                        <FaLinkedin />
                                    </a>
                                    <a href="https://twitter.com/" target="_blank"
                                        className="inline-flex items-center font-semibold bg-[#F36A4F] text-white hover:bg-[#f52d05] duration-300 p-2 rounded-full"
                                    >
                                        <FaTwitter />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                            <div className="relative">
                                <div className="overflow-hidden hover:filter hover:brightness-50 duration-300">
                                    <img
                                        src={"https://images-ext-2.discordapp.net/external/gLhBBH38A2aPPEevZXwuC12jCx8C0mtgAwc6EIrEjio/https/i.ibb.co/dsYn471/269809561-142393021484628-3183151668269593478-n.jpg"}
                                        className="object-cover h-96 lg:h-72 rounded rounded-t hover:scale-105 duration-300 w-full"
                                        alt=""
                                    />
                                </div>
                                <div className="absolute bottom-5 left-0 flex justify-center items-center text-[#f47655] bg-[#ffe2da] px-[6px] py-[2px]">
                                    <p className="text-xl font-bold mr-1">CFO</p>
                                </div>
                            </div>
                            <div className="px-1 py-4 text-[#303030]">

                                <h2 className="text-lg font-bold leading-5 mb-2">Mahabubur Rahman</h2>
                                <p className="text-sm font-bold mr-1 mb-2">Chief Financial Officer</p>
                                <div className="flex items-center gap-3">
                                    <a href="https://www.facebook.com/mahabub.r03" target="_blank"
                                        className="inline-flex items-center font-semibold bg-[#F36A4F] text-white hover:bg-[#f52d05] duration-300 p-2 rounded-full"
                                    >
                                        <FaFacebookF />
                                    </a>
                                    <a href="https://www.linkedin.com/in/mahabuburr/" target="_blank"
                                        className="inline-flex items-center font-semibold bg-[#F36A4F] text-white hover:bg-[#f52d05] duration-300 p-2 rounded-full"
                                    >
                                        <FaLinkedin />
                                    </a>
                                    <a href="https://twitter.com/" target="_blank"
                                        className="inline-flex items-center font-semibold bg-[#F36A4F] text-white hover:bg-[#f52d05] duration-300 p-2 rounded-full"
                                    >
                                        <FaTwitter />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                            <div className="relative">
                                <div className="overflow-hidden hover:filter hover:brightness-50 duration-300">
                                    <img
                                        src={"https://i.ibb.co/3Sbj2LK/54423194-2183764681953440-9127356419455057920-n.jpg"}
                                        className="object-cover h-96 lg:h-72 rounded rounded-t hover:scale-105 duration-300 w-full"
                                        alt=""
                                    />
                                </div>
                                <div className="absolute bottom-5 left-0 flex justify-center items-center text-[#f47655] bg-[#ffe2da] px-[6px] py-[2px]">
                                    <p className="text-xl font-bold mr-1">VP</p>
                                </div>
                            </div>
                            <div className="px-1 py-4 text-[#303030]">

                                <h2 className="text-lg font-bold leading-5 mb-2">Mofazzal Hossen</h2>
                                <p className="text-sm font-bold mr-1 mb-2">Vice President</p>
                                <div className="flex items-center gap-3">
                                    <a href="https://www.facebook.com/rony688488" target="_blank"
                                        className="inline-flex items-center font-semibold bg-[#F36A4F] text-white hover:bg-[#f52d05] duration-300 p-2 rounded-full"
                                    >
                                        <FaFacebookF />
                                    </a>
                                    <a href="https://www.linkedin.com/in/mofazzel/" target="_blank"
                                        className="inline-flex items-center font-semibold bg-[#F36A4F] text-white hover:bg-[#f52d05] duration-300 p-2 rounded-full"
                                    >
                                        <FaLinkedin />
                                    </a>
                                    <a href="https://twitter.com/MofazzelHosse12" target="_blank"
                                        className="inline-flex items-center font-semibold bg-[#F36A4F] text-white hover:bg-[#f52d05] duration-300 p-2 rounded-full"
                                    >
                                        <FaTwitter />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
                {/* </div> */}
            </div>
        </div>
    );
};

export default Team;