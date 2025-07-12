import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import ScrollToTop from './ScrollToTop'; // correct path


import Enquiry from "./pages/Enquiry";
import { Route, Routes } from "react-router-dom";
import Adminajnex from "./pages/Adminajnex";



function App() {
  useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
  return (
    <div className="bgcolor ">
     <Header />

<main className="content-wrapper">
   <ScrollToTop />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/enquiry" element={<Enquiry />} />
    <Route path="/about" element={<About />} />
    <Route path="/service" element={<Service />} />
    <Route path="/adminajnex1820" element={<Adminajnex />} />

  </Routes>
</main>

<Footer />

    </div>
  );
}

export default App;
