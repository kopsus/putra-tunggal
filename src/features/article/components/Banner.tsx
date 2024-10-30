import imgBanner from "../../../assets/imgBanner2.png";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { dataBanner } from "../../home/libs/data";

const Banner = () => {
  return (
    <div className="Container">
      <div className="h-[343px] rounded-[20px] bg-white shadow-md shadow-black/25 relative overflow-hidden">
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
          }}
          modules={[Autoplay]}
        >
          {dataBanner.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-2 h-full px-16">
                <div className="h-full flex flex-col gap-2 justify-center">
                  <p className="text-3xl font-semibold leading-[45px] text-primary">
                    {item.title}
                  </p>
                  <p className="text-primary/70 leading-6">{item.desc}</p>
                </div>
                <div className="h-full">
                  <img src={imgBanner} alt="" className="" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
