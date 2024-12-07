import { dataArticle2 } from "@/lib/data";
import Image from "next/image";

const Article2 = () => {
  return (
    <div className="ContainerX min-h-[340px]">
      <div className="float-left mr-5 mb-3 w-full h-auto md:w-96 md:max-w-96 lg:min-w-[479px] lg:max-w-[479px] shadow-md border rounded-xl overflow-hidden">
        <Image
          src={dataArticle2.image}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      <p className="titleContent text-red mb-3">{dataArticle2.title}</p>
      <p className="mb-5">
        <span className="font-bold">{dataArticle2.place}</span> -{" "}
        {dataArticle2.desc}
      </p>
      <p className="text-blue/80">{dataArticle2.date}</p>
    </div>
  );
};

export default Article2;
