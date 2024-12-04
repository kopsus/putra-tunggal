import { dataServices } from "@/lib/data";
import React from "react";
import ServicesCard from "./ServiceCard";

export const Services = () => {
  return (
    <div className="pl-5 md:pl-10 lg:pl-16 flex flex-col gap-5">
      <p className="titleSection">Pelayanan Putra Tunggal</p>
      <div className="flex items-stretch gap-x-5 overflow-x-auto p-5">
        {dataServices.map((item, index) => (
          <ServicesCard
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};
