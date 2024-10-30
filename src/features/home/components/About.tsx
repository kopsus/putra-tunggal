import { TitleAbout, TitleContent } from "../../_global/components/Text";

const About = () => {
  return (
    <div className="Container">
      <div className="flex items-start gap-x-20">
        <div className="flex flex-col gap-5">
          <TitleContent>
            Mari Berkenalan dengan{" "}
            <span className="text-primary">“Mental Health”</span>
          </TitleContent>
          <TitleAbout className="text-primary">Hai, Sobat Psiko</TitleAbout>
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
        <div>
          <div className="w-[464px] h-[333px] rounded-3xl bg-white shadow-md border"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
