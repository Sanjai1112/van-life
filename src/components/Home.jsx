import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
export default function Home(props) {
  return (
    <div className="home-container">
      <NavBar />
      <div className="home">
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link to="vans">Find Your van</Link>
      </div>
      <Footer />
    </div>
  );
}
