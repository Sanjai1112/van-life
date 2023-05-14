import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
      <nav className='van-host-sub-routes'>
        <NavLink
          to='/host'
          end
          className={({ isActive }) => (isActive ? "active" : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to='/host/income'
          className={({ isActive }) => (isActive ? "active" : null)}
        >
          Income
        </NavLink>
        <NavLink
          to='/host/vans'
          className={({ isActive }) => (isActive ? "active" : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to='/host/reviews'
          className={({ isActive }) => (isActive ? "active" : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}