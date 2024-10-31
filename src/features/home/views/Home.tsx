import About from "../components/About";
import Banner from "../components/Banner";
import Faq from "../components/Faq";
import Services from "../components/Services";
import Testimoni from "../components/Testimoni";

const Home = () => {
  return (
    <div className="pt-20">
      <Banner />
      <Services />
      <About />
      <Testimoni />
      <Faq />
    </div>
  );
};

export default Home;
