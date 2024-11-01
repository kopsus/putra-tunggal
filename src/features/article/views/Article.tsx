import Article1 from "../components/Article1";
import Article2 from "../components/Article2";
import Banner from "../components/Banner";
import Faq from "../components/Faq";
import RelatedNews from "../components/RelatedNews";

const Article = () => {
  return (
    <div className="pt-20">
      <Banner />
      <Article1 />
      <Faq />
      <Article2 />
      <RelatedNews />
    </div>
  );
};

export default Article;
