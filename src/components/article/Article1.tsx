import { dataArticle1 } from "@/lib/data";

const Article1 = () => {
  return (
    <div className="ContainerX flex flex-col gap-y-5">
      <p className="titleContent">{dataArticle1.title}</p>
      <p>{dataArticle1.desc}</p>
    </div>
  );
};

export default Article1;
