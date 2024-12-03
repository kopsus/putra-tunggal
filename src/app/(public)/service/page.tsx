import { BannerTrigger } from "@/components/BannerTrigger";
import HighlightService from "@/components/services/Highlight";
import ServiceFee from "@/components/services/ServiceFee";
import { Services } from "@/components/services/Services";
import Testimoni from "@/components/testimoni/Testimoni";
import React from "react";

const page = () => {
  return (
    <div className="pt-10">
      <HighlightService />
      <Services />
      <ServiceFee />
      <BannerTrigger />
      <Testimoni />
    </div>
  );
};

export default page;
