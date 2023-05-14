import React, { useEffect, useState } from "react";
import HostVan from "./HostVan";

function HostVans() {
  const [hostVans, setHostVans] = useState([]);
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((data) => {
        if (data && data.vans) {
          setHostVans(data.vans);
        }
      });
  }, []);
  return (
    <div className='hot-vans'>
      <h1 className='header'>Your listed vans</h1>
      {hostVans && (
        <div>
          {hostVans.map((van) => (
            <HostVan {...van} key={van.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default HostVans;
