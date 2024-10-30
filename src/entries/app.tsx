import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../index.css";
import Header from "../features/_global/components/Header";
import Home from "../features/home/views/Home";
import Footer from "../features/_global/components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
