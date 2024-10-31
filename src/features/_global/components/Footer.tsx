import { FaWhatsapp } from "react-icons/fa";
import Logo from "../../../assets/logo.svg";
import { TitleFooter } from "./Text";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { ReactNode } from "react";
import { AiFillInstagram } from "react-icons/ai";

interface ISosmed {
  children: ReactNode;
}

const Sosmed = ({ children }: ISosmed) => {
  return (
    <div className="h-10 w-10 bg-white text-primary rounded-full flex justify-center items-center overflow-hidden">
      {children}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="px-5 md:px-10 lg:py-10 lg:px-16 bg-primary text-white">
      <div className="flex items-center gap-1 mb-5">
        <img src={Logo} alt="logo" className="w-12 h-12" />
        <p className="text-2xl font-medium leading-[37.5px]">Putra Tunggal</p>
      </div>
      <div className="flex gap-x-10">
        <div className="flex-1 flex flex-col gap-y-2">
          <TitleFooter>Tentang Kami</TitleFooter>
          <p>
            Situs kami adalah sumber informasi kesehatan yang dipercayai dan
            tempat Anda dapat langsung berkonsultasi dengan psikolog berlisensi.
            Kami hadir untuk membantu Anda dalam perjalanan kesehatan mental
            Anda, memberikan pengetahuan dan akses langsung untuk mendapatkan
            dukungan dari para profesional kami.{" "}
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-y-2">
          <TitleFooter>Layanan Pengaduan Konsumen</TitleFooter>
          <div className="flex flex-col">
            <p className="font-semibold">PT. PsikoHealth</p>
            <p>
              Jl. H.R. Rasuna Said Kav B32-33, Jakarta Selatan
              help@psikocare.com / 021-1234-1023
            </p>
          </div>
          <p>
            Direktorat Jenderal Perlindungan Konsumen dan Tertib
            NiagaKementerian Perdagangan Republik Indonesia0853 1111 1010
            (WhatsApp)
          </p>
        </div>
        <div className="flex flex-col gap-y-2 w-[231px]">
          <TitleFooter>Link Terkait</TitleFooter>
          <div className="flex flex-col gap-y-1">
            <p>Edukasi</p>
            <p>Psikologi</p>
            <p>Konsultasi Kesehatan Mental</p>
          </div>
          <TitleFooter>Contact</TitleFooter>
          <div className="flex items-center gap-x-2">
            <Sosmed>
              <FaFacebookF className="w-6 h-6" />
            </Sosmed>
            <Sosmed>
              <FaTwitter className="w-6 h-6" />
            </Sosmed>
            <Sosmed>
              <FaWhatsapp className="w-7 h-7" />
            </Sosmed>
            <Sosmed>
              <AiFillInstagram className="w-6 h-6" />
            </Sosmed>
          </div>
        </div>
      </div>
      <p className="text-center font-semibold leading-6 mt-20">
        Copyright © 2023 PsikoHeatlh
      </p>
    </div>
  );
};

export default Footer;
