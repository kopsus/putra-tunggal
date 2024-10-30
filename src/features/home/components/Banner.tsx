import imgBanner from "../../../assets/imgBanner.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { dataBanner } from "../libs/data";

const Banner = () => {
  return (
    <div className="Container">
      <div className="h-[415px] rounded-[20px] bg-white shadow-md shadow-black/25 relative">
        <Swiper
          pagination={true}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 2500,
          }}
          modules={[Pagination, Navigation, Autoplay]}
        >
          {dataBanner.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-2 h-full px-16">
                <div className="h-full flex flex-col gap-2 justify-center">
                  <p className="text-3xl font-semibold leading-[45px] text-primary">
                    {item.title}
                  </p>
                  <p className="text-primary/70 leading-6">{item.desc}</p>
                  <button className="bg-red w-max py-3 px-5 rounded-lg text-white font-medium text-xl mt-5">
                    Buat Janji Sekarang
                  </button>
                </div>
                <div className="flex justify-end items-end">
                  <img src={imgBanner} alt="" className="w-[338px] h-[332px]" />
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
