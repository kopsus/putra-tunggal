import imgBg from "../../../assets/imgBanner.svg";
import { TitleAbout } from "../../_global/components/Text";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { carouselServices, service } from "../libs/data";
import ListPsikolog from "./ListPsikolog";

const Banner = () => {
  return (
    <div className="Container lg:py-10">
      <div className="grid grid-cols-2 gap-x-10 overflow-hidden">
        <div>
          <Swiper
            navigation={true}
            loop={true}
            autoplay={{
              delay: 2500,
            }}
            modules={[Navigation, Autoplay]}
            className="swiper-service"
          >
            {carouselServices.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white shadow-md border w-11/12 mx-auto h-[327px] rounded-xl flex flex-col justify-end items-center overflow-hidden px-10 text-center">
                  <TitleAbout className="text-primary">{item.title}</TitleAbout>
                  <p className="text-primary/70">{item.desc}</p>
                  <div className="h-[177px]">
                    <img src={imgBg} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mt-5 overflow-y-auto h-[399px] overflow-hidden">
            {service.map((item, index) => (
              <div key={index} className="flex flex-col gap-y-2 mb-5">
                <TitleAbout>{item.title}</TitleAbout>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <ListPsikolog />
        </div>
      </div>
    </div>
  );
};

export default Banner;
