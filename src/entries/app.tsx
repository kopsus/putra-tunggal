import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../index.css";
import Header from "../features/_global/components/Header";
import Home from "../features/home/views/Home";
import Footer from "../features/_global/components/Footer";
import Consultation from "../features/consultation/views/Consultation";
import Article from "../features/article/views/Article";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/article" element={<Article />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
