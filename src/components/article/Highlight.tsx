"use client";

import imgHighlight from "@/assets/highlightArticle.png";
import { dataBanner } from "@/lib/data";

// swiper
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const HighlightArticle = () => {
  return (
    <div className="Container">
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="bg-white border rounded-xl shadow-md"
      >
        {dataBanner.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 h-[343px]">
              <div className="col-span-1 flex flex-col justify-center gap-2 px-10">
                <p className="titleHighlight">{item.title}</p>
                <p className="text-primary/70 leading-6">{item.desc}</p>
              </div>
              <div className="col-span-1 mx-auto">
                <Image
                  src={imgHighlight}
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-10/12 mx-auto"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HighlightArticle;