import { BannerTrigger } from "@/components/BannerTrigger";
import { Highlight } from "@/components/home/Highlight";
import MentalHealth from "@/components/home/MentalHealth";
import { Services } from "@/components/services/Services";

export default function Home() {
  return (
    <div className="pt-10">
      <Highlight />
      <Services />
      <MentalHealth />
      <BannerTrigger />
    </div>
  );
}
