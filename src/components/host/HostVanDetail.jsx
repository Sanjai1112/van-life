import React from "react";
import { useOutletContext } from "react-router-dom";

function HostVanDetail(props) {
  const van = useOutletContext(); //Like react context provider. offered in react router outlets.
  return (
    <>
      {van && (
        <div className="van-detail-index">
          <div>
            <label>Name:</label>
            <span>{van.name}</span>
          </div>
          <div>
            <label>Category:</label>
            <span>{van.type}</span>
          </div>
          <div>
            <label>Descripton:</label>
            <span>{van.description}</span>
          </div>
          <div>
            <label>Visibility:</label>
            <span>Public</span>
          </div>
        </div>
      )}
    </>
  );
}

export default HostVanDetail;
