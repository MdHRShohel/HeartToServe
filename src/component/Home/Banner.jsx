import Image from "next/image";
import img1 from "../../asset/banner/img1.jpg";
import img3 from "../../asset/banner/img3.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  const bannerData = [
    {
      img: img1,
      title: "Remarkable Network",
      subTitle:
        "VolunteerMatch is the largest network in the nonprofit world, with the most volunteers, nonprofits and opportunities to make a difference.",
    },

    {
      img: img3,
      title: "Remarkable Network",
      subTitle:
        "VolunteerMatch matches inspired people with inspiring causes. It's how volunteers and nonprofits connect to achieve remarkable outcomes.",
    },
  ];
  return (
    <section className="mb-5">
      <Swiper
        loop={true}
        autoplay={{ delay: 2500 }}
        spaceBetween={30}
        slidesPerView={1}
        modules={[Pagination, Autoplay]}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
      >
        {bannerData.map((banner, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="text-center banner">
                <div className="img-gradient">
                  <Image
                    className="h-[600px] w-full rounded-md object-cover filter brightness-75"
                    alt=""
                    src={banner.img}
                  />
                </div>

                <div className="text-white absolute flex-col justify-evenly transform -translate-y-1/2 right-5 left-5 top-1/2">
                  <h1 className="text-3xl md:text-6xl lg:text-7xl tracking-wide font-Anton mb-4">
                    {banner.title}
                  </h1>
                  <p className="w-[98%] lg:w-[60%] mx-auto tracking-wider">
                    {banner.subTitle}
                  </p>
                  <button className="text-white tracking-[0.04rem] text-lg bg-[#F36A4F] px-6 py-2 mt-4 rounded-lg hover:bg-[#c2513b] transition-all duration-300">
                    Become Volunteer
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Banner;
