import { BannerTrigger } from "@/components/BannerTrigger";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Foooter";
import { Faq } from "@/components/home/FAQ";
import { Highlight } from "@/components/home/Highlight";
import { MentalHealth } from "@/components/home/MentalHealth";
import { Services } from "@/components/services/Services";
import ButtonChatTrigger from "@/components/ButtonChatTrigger";

export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto relative">
      <Header />
      <div className="pt-10">
        <Highlight />
        <Services />
        <MentalHealth />
        <BannerTrigger />
        <Faq />
      </div>
      <Footer />
      <ButtonChatTrigger />
    </div>
  );
}
