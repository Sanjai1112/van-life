import React from "react";
import "./style.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import VanContainer from "./components/vans/VansContainer";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import VanDetails from "./components/vans/VanDetails";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<VanContainer />} />
        <Route path='/vans/:id' element ={<VanDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
