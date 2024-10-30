import { TitleContent } from "../../_global/components/Text";
import "swiper/css";
import { dataServices } from "../libs/data";
import ServicesCard from "../../_global/components/ServicesCard";

const Services = () => {
  return (
    <div className="pl-5 py-10 md:py-16 lg:py-24 md:pl-10 lg:pl-16 flex flex-col gap-5">
      <TitleContent>Pelayanan PUTRA TUNGGAL</TitleContent>
      <div className="flex items-stretch gap-x-[34px] overflow-x-auto p-5">
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

export default Services;
