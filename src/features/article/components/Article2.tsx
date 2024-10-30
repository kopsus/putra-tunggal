import { TitleContent } from "../../_global/components/Text";
import { article2 } from "../libs/data";

const Article2 = () => {
  return (
    <div className="ContainerX min-h-[340px]">
      <div className="float-left mr-5 min-w-[479px] max-w-[479px] h-[340px] shadow-md border rounded-xl bg-white"></div>
      <TitleContent className="text-red">{article2.title}</TitleContent>
      <p className="my-5">
        <span className="font-bold">{article2.place}</span> - {article2.desc}
      </p>
      <p className="text-[#0029FFCC]">{article2.date}</p>
    </div>
  );
};

export default Article2;
