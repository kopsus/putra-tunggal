import Image, { StaticImageData } from "next/image";
import { dataRelatedArticle } from "@/lib/data";

interface ICard {
  img: StaticImageData;
  title: string;
  date: string;
}

const Card = ({ img, title, date }: ICard) => {
  return (
    <div className="flex flex-col min-w-[307px] max-w-[307px]">
      <div className="w-full h-[237px] rounded-xl shadow-md border overflow-hidden">
        <Image src={img} alt="" width={0} height={0} sizes="100vw" />
      </div>
      <p className="text-red mt-5 mb-2">{title}</p>
      <p className="text-black/50 text-sm">{date}</p>
    </div>
  );
};

const RelatedNews = () => {
  return (
    <div className="Container flex flex-col gap-y-5">
      <p className="titleSection text-blue">Berita Terkait</p>
      <div className="flex gap-x-5 overflow-x-auto">
        {dataRelatedArticle.map((item, index) => (
          <Card
            key={index}
            img={item.img}
            title={item.title}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedNews;