import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import ABOUT_ICON from '../assets/about.svg';
import { Link } from 'react-router-dom';

export default function About(props) {
  return (
    <div className="about-root">
      <NavBar />
      <div className="about-container">
        <img src={ABOUT_ICON} alt="about image" className="about-img" />
        <div className="about-info">
          <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
          <div className="expolre-vans">
            <h2>
              Your destination is waiting.
              <br /> Your van is ready.
            </h2>
            <Link to="/vans">Explore our vans</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
