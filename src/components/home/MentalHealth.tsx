// image
import mentalHealthIMG from "@/assets/mental_health.svg";
import Image from "next/image";

const MentalHealth = () => {
  return (
    <div className="Container">
      <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-20">
        <div className="flex flex-col gap-5 order-2 lg:order-1">
          <p className="titleSection hidden lg:block">
            Mari Berkenalan dengan{" "}
            <span className="text-primary">“Mental Health”</span>
          </p>
          <p className="text-primary titleContent">Hai, Sobat Psiko</p>
          <p>
            Kesehatan mental adalah komponen penting dalam kesejahteraan
            individu. Ini mencakup kondisi emosional, psikologis, dan sosial
            seseorang, yang memengaruhi cara mereka merasa, berpikir, dan
            berinteraksi dengan dunia sekitar. Mempertahankan kesehatan mental
            yang baik memiliki dampak positif pada produktivitas, hubungan, dan
            kualitas hidup secara keseluruhan.
          </p>
          <p>
            Penting untuk mengakui bahwa gangguan mental adalah hal yang umum
            dan dapat memengaruhi siapa saja. Oleh karena itu, mendukung dan
            merawat kesehatan mental adalah langkah penting dalam menjaga
            kesejahteraan diri dan orang lain di sekitar kita.
          </p>
        </div>
        <div className="order-1 lg:order-2 w-full">
          <p className="titleSection flex flex-col text-center mb-4 lg:hidden">
            Mari Berkenalan dengan{" "}
            <span className="text-primary">“Mental Health”</span>
          </p>
          <div className="lg:w-[464px] lg:h-[333px] w-full rounded-3xl shadow-md border overflow-hidden">
            <Image
              src={mentalHealthIMG}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { MentalHealth };
