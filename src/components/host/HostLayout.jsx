import React, { forwardRef, useEffect, useRef } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

export default function HostLayout() {
  const dashboardRef = useRef();
  const incomeRef = useRef();
  const reviewRef = useRef();
  const location = useLocation();
  useEffect(() => {
    let path = location.pathname.replace("/host", "");
    path = path.replace("/", "");
    path = path || "dashboard";
    let obj = {
      target: {
        name: path
      }
    };
    setActiveClassName(obj);
  }, []);
  const setActiveClassName = (e) => {
    let name = e.target?.name;
    if (name === "dashboard") {
      dashboardRef.current.classList.add("active");
      reviewRef.current.classList.remove("active");
      incomeRef.current.classList.remove("active");
    } else if (name === "income") {
      incomeRef.current.classList.add("active");
      dashboardRef.current.classList.remove("active");
      reviewRef.current.classList.remove("active");
    } else if (name === "reviews") {
      reviewRef.current.classList.add("active");
      incomeRef.current.classList.remove("active");
      dashboardRef.current.classList.remove("active");
    }
  };

  return (
    <>
      <nav className='van-host-sub-routes'>
        <Link
          ref={dashboardRef}
          to='/host'
          name='dashboard'
          className="active"
          onClick={setActiveClassName}
        >
          Dashboard
        </Link>
        <Link
          ref={incomeRef}
          to='/host/income'
          name='income'
          onClick={setActiveClassName}
        >
          Income
        </Link>
        {/* <Link ref={ref} to="/host/vans" onClick={setActiveClassName}>Vans</Link> */}
        <Link
          ref={reviewRef}
          to='/host/reviews'
          name='reviews'
          onClick={setActiveClassName}
        >
          Reviews
        </Link>
      </nav>
      <Outlet />
    </>
  );
}
