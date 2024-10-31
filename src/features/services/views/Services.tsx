import Testimoni from "../../home/components/Testimoni";
import OtherServices from "../components/OtherServices";
import OurServices from "../components/OurServices";
import Banner from "../components/Banner";
import ServiceFee from "../components/ServiceFee";

const Services = () => {
  return (
    <div className="pt-20">
      <Banner />
      <OtherServices />
      <ServiceFee />
      <OurServices />
      <Testimoni />
    </div>
  );
};

export default Services;
