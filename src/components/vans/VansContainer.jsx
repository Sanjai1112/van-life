import React, { useEffect, useState } from "react";
import Van from "./Van";

export default function VanContainer(props) {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/vans")
      .then((resp) => {
        if (resp.status === 200) {
          return resp.json();
        }
      })
      .then((data) => {
        if (data.vans && Array.isArray(data.vans)) {
          setVans(data.vans);
        }
      });
  }, []);
  return (
    <>
      <div className='van-container'>
        <h1>Explore our van options</h1>
        <div className='van-filter'>Filter Types goes here</div>
        <div className='van-list'>
          {vans.map((car) => {
            return <Van {...car} key={car.id} />;
          })}
        </div>
      </div>
    </>
  );
}
