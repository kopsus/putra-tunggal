import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../index.css";
import Header from "../features/_global/components/Header";
import Home from "../features/home/views/Home";
import Footer from "../features/_global/components/Footer";
import Article from "../features/article/views/Article";
import Services from "../features/services/views/Services";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Article />} />
        <Route path="/service" element={<Services />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
