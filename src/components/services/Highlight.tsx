"use client";

import imgBg from "@/assets/highlightService.png";
import Image from "next/image";

// components
import ListPsikolog from "./ListPsikolog";

// swiper
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// data
import { carouselServices, service } from "@/lib/data";

const HighlightService = () => {
  return (
    <div className="Container">
      <div className="grid grid-cols-2 gap-x-10">
        <div>
          <Swiper
            navigation={true}
            loop={true}
            autoplay={{
              delay: 2500,
            }}
            modules={[Navigation, Autoplay]}
            className="swiper-service bg-white shadow-md border rounded-xl"
          >
            {carouselServices.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="h-[327px] flex flex-col gap-5 justify-end items-center overflow-hidden px-10 text-center">
                  <p className="text-primary/70 font-medium">{item.desc}</p>
                  <div className="h-[177px]">
                    <Image
                      src={imgBg}
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mt-10 h-96 overflow-y-auto">
            {service.map((item, index) => (
              <div key={index} className="flex flex-col gap-y-2 mb-5">
                <p className="titleContent">{item.title}</p>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <ListPsikolog />
      </div>
    </div>
  );
};

export default HighlightService;
