"use client";

import Image from "next/image";
import React from "react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import highlightIMG from "@/assets/imgBanner.svg";
import { dataBanner } from "@/libs/data";
import { ButtonMedium } from "../Button";

export const Highlight = () => {
  return (
    <div className="Container">
      <div className="h-[415px] rounded-3xl bg-white shadow-md border relative">
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
              <div className="grid grid-cols-2 h-full px-16">
                <div className="h-full flex flex-col gap-4 justify-center items-start">
                  <p className="titleHighlight leading-[45px] text-primary">
                    {item.title}
                  </p>
                  <p className="text-primary/70 leading-6">{item.desc}</p>
                  <ButtonMedium className="bg-red text-white">
                    Buat Janji Sekarang
                  </ButtonMedium>
                </div>
                <div className="flex justify-end items-end">
                  <Image
                    src={highlightIMG}
                    alt=""
                    className="w-[338px] h-[332px]"
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
