import React from "react";
import { Link } from "react-router-dom";
export default function NavBar(props) {
  return (
    <nav className='navs'>
      <span className='left-nav'>
        <Link to='/'>#VANLIFE</Link>
      </span>
      <span className='right-navs'>
        <Link to='/host'>Host</Link>
        <Link to='/about'>About</Link>
        <Link to='/vans'>Vans</Link>
      </span>
    </nav>
  );
}
