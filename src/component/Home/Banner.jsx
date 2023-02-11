import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../asset/banner/img1.jpg";
import img2 from "../../asset/banner/img2.jpg";
import img3 from "../../asset/banner/img3.jpg";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Banner = () => {
  const bannerData = [
    {
      img: img1,
      title: "Remarkable Network",
      subTitle:
        "VolunteerMatch is the largest network in the nonprofit world, with the most volunteers, nonprofits and opportunities to make a difference.",
    },
    {
      img: img2,
      title: "Remarkable Network",
      subTitle:
        "VolunteerMatch transforms volunteer recruiting, making it quick, easy and effective",
    },
    {
      img: img3,
      title: "Remarkable Network",
      subTitle:
        "VolunteerMatch matches inspired people with inspiring causes. It's how volunteers and nonprofits connect to achieve remarkable outcomes.",
    },
  ];
  return (
    <section>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {bannerData.map((banner, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="text-center container ">
                <div className="img-gradient">
                  <Image
                    className="h-[500px] w-full rounded-md object-scale-down"
                    alt=""
                    src={banner.img}
                  />
                </div>

                <div className="text-white absolute flex-col justify-evenly transform -translate-y-1/2 left-16 right-5 top-1/2">
                  <h1 className="text-9xl lg:text-6xl font-bold mb-4">
                    {banner.title}
                  </h1>
                  <p className="w-[60%] mx-auto ">{banner.subTitle}</p>
                  <button className="text-white text-lg font-semibold bg-[#F36A4F] px-6 py-2 mt-4 rounded-lg hover:bg-[#c2513b] transition-all duration-300">
                    Become Volunteer
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        ...
      </Swiper>
    </section>
  );
};

export default Banner;
