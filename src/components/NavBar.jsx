import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function NavBar(props) {
  return (
    <nav className='navs'>
      <span className='left-nav'>
        <Link to='.'>#VANLIFE</Link>
      </span>
      <span className='right-navs'>
        <NavLink
          to='host' //relative paths
          className={({ isActive }) => (isActive ? "active" : null)}
        >
          Host
        </NavLink>
        <NavLink
          to='about'
          className={({ isActive }) => (isActive ? "active" : null)}
        >
          About
        </NavLink>
        <NavLink
          to='vans'
          className={({ isActive }) => (isActive ? "active" : null)}
        >
          Vans
        </NavLink>
      </span>
    </nav>
  );
}
