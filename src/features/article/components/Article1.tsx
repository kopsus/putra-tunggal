import { TitleContent } from "../../_global/components/Text";
import { article1 } from "../libs/data";

const Article1 = () => {
  return (
    <div className="ContainerX flex flex-col gap-y-5">
      <TitleContent>{article1.title}</TitleContent>
      <p>{article1.desc}</p>
    </div>
  );
};

export default Article1;
