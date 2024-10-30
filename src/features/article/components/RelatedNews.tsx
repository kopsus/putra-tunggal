import { TitleContent } from "../../_global/components/Text";

interface ICard {
  img: string;
  title: string;
  date: string;
}

const Card = ({ img, title, date }: ICard) => {
  return (
    <div className="flex flex-col min-w-[307px] max-w-[307px]">
      <div className="w-full h-[237px] rounded-xl shadow-md border overflow-hidden">
        <img src={img} alt="" />
      </div>
      <p className="text-red mt-5 mb-2">{title}</p>
      <p className="text-black/50">{date}</p>
    </div>
  );
};

const RelatedNews = () => {
  return (
    <div className="Container flex flex-col gap-y-5">
      <TitleContent className="text-blue">Berita Terkait</TitleContent>
      <div className="flex gap-x-[28px] overflow-x-auto">
        <Card
          img=""
          title="Mengapa Kita Bisa Tertawa Saat Merasa Takut? Ini Kata Sains"
          date="30 Juni 2023"
        />
        <Card
          img=""
          title="Mengapa Kita Bisa Tertawa Saat Merasa Takut? Ini Kata Sains"
          date="30 Juni 2023"
        />
        <Card
          img=""
          title="Mengapa Kita Bisa Tertawa Saat Merasa Takut? Ini Kata Sains"
          date="30 Juni 2023"
        />
        <Card
          img=""
          title="Mengapa Kita Bisa Tertawa Saat Merasa Takut? Ini Kata Sains"
          date="30 Juni 2023"
        />
        <Card
          img=""
          title="Mengapa Kita Bisa Tertawa Saat Merasa Takut? Ini Kata Sains"
          date="30 Juni 2023"
        />
      </div>
    </div>
  );
};

export default RelatedNews;
