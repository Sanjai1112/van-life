import React from "react";
import "./style.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import VanContainer from "./components/vans/VansContainer";
import VanDetails from "./components/vans/VanDetails";
import Layout from "./components/Layout";
import HostLayout from "./components/host/HostLayout";
import Dashboard from "./components/host/Dashboard";
import Income from "./components/host/Income";
import Reviews from "./components/host/Reviews";
import HostVans from "./components/host/HostVans";
import HostVanDetailLayout from "./components/host/HostVanDetailLayout";
import HostVanDetail from "./components/host/HostVanDetail";
import HostVanPrice from "./components/host/HostVanPrice";
import HostVanPhotos from "./components/host/HostVanPhotos";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<VanContainer />} />
          <Route path='vans/:id' element={<VanDetails />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetailLayout />}>
              <Route index element={<HostVanDetail/>}/>
              <Route path="pricing" element={<HostVanPrice/>}/>
              <Route path="photos" element={<HostVanPhotos/>}/>
            </Route>
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
