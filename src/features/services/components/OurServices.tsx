import bgOurService from "../../../assets/ourService.png";
import { TitleBanner } from "../../_global/components/Text";

const OurServices = () => {
  return (
    <div className="relative h-[356px] w-full lg:mb-24">
      <img src={bgOurService} alt="" className="absolute top-0 left-0" />
      <div className="Container relative bg-black/50 w-full h-full flex flex-col justify-center items-center gap-y-5 text-center text-white">
        <p>
          Kesehatan mental sama pentingnya dengan kesehatan fisik. Jangan ragu
          untuk berkonsultasi dengan psikolog. Dapatkan dukungan yang Anda
          butuhkan untuk menjalani hidup yang lebih baik.
        </p>
        <TitleBanner className="text-white">
          Ayo Nikmati Layanan Kami!
        </TitleBanner>
        <button className="bg-red w-max py-3 px-5 rounded-lg text-white font-medium text-xl mt-5">
          Buat Janji Sekarang
        </button>
      </div>
    </div>
  );
};

export default OurServices;
