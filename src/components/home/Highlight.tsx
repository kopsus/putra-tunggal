"use client";

import Image from "next/image";
import React from "react";
import highlightIMG from "@/assets/imgBanner.svg";
import { dataBanner } from "@/lib/data";
import { ButtonMedium } from "../Button";

// swiper
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const Highlight = () => {
  return (
    <div className="ContainerT ContainerX">
      <div className="h-[50vh] md:h-[415px] rounded-3xl bg-white shadow-md border relative">
        <Swiper
          pagination={true}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 2500,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="swiper-home"
        >
          {dataBanner.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative grid md:grid-cols-2 h-full p-10 lg:px-16">
                <div className="h-full flex flex-col gap-10 text-center md:text-start justify-between md:justify-center items-center md:items-start z-20">
                  <div className="flex flex-col gap-4">
                    <p className="titleHighlight md:leading-[45px] text-primary">
                      {item.title}
                    </p>
                    <p className="text-xs md:text-sm text-primary/70 leading-6">
                      {item.desc}
                    </p>
                  </div>
                  <ButtonMedium className="bg-red text-white">
                    BUAT JANJI SEKARANG
                  </ButtonMedium>
                </div>
                <div className="hidden md:block"></div>
                <div className="absolute bottom-0 mx-auto w-full flex justify-center md:justify-end lg:right-20">
                  <Image
                    src={highlightIMG}
                    alt=""
                    className="w-32 md:w-72 lg:w-[338px] lg:h-[332px]"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
