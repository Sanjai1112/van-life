import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function HostVanDetail(props) {
  const [van, setVan] = useState(null);
  const { id: vanId } = useParams();
  useEffect(() => {
    if (vanId) {
      fetch(`/api/vans/${vanId}`)
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
