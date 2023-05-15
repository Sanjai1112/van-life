import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";

export default function HostVanDetailLayout() {
  const [van, setVan] = useState(null);
  const { id: vanId } = useParams();
  useEffect(() => {
    if (vanId) {
      fetch(`/api/host/vans/${vanId}`)
        .then((resp) => {
          if (resp.status === 200) {
            return resp.json();
          }
        })
        .then((data) => {
          if (data) {
            setVan(data.van);
          }
        });
    }
  }, []);
  return (
    <div className='host-van-full-details'>
      <Link to='/host/vans' className='vans-list-back'> {/* absolute path */}
        <i className='left-arrow'>&larr;</i>
        <span>Back to all vans</span>
      </Link>

      {van ? (
        <div className='van-detail'>
          <div className='van-name-price'>
            <img src={van.imageUrl} alt={van.name} />
            <span>
              <button className={`van-type ${van.type}`}>{van.type}</button>
              <h1>{van.name}</h1>
              <span>
                <i>${van.price}</i>/day
              </span>
            </span>
          </div>
          <div className='van-detail-link'>
            <NavLink
              to="." //relative paths
              className={({ isActive }) => (isActive ? "active" : null)}
              end
            >
              Details
            </NavLink>
            <NavLink
              to="pricing"
              className={({ isActive }) => (isActive ? "active" : null)}
            >
              Pricing
            </NavLink>
            <NavLink
              to="photos"
              className={({ isActive }) => (isActive ? "active" : null)}
            >
              Photos
            </NavLink>
          </div>
          <div className="van-detail-outlet">
            <Outlet context={{...van}}/>
          </div>
        </div>
      ) : null}
    </div>
  );
}
