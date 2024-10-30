import About from "../components/About";
import Banner from "../components/Banner";
import Faq from "../components/Faq";
import Services from "../components/Services";
import Testimoni from "../components/Testimoni";

const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <About />
      <Testimoni />
      <Faq />
    </>
  );
};

export default Home;
