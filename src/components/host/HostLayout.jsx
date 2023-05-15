import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
      <nav className='van-host-sub-routes'>
        <NavLink
          to='.'
          end
          className={({ isActive }) => (isActive ? "active" : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to='income' //relative paths
          className={({ isActive }) => (isActive ? "active" : null)}
        >
          Income
        </NavLink>
        <NavLink
          to='vans'
          className={({ isActive }) => (isActive ? "active" : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to='reviews'
          className={({ isActive }) => (isActive ? "active" : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}