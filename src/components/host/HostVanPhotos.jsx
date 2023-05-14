import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function HostVanPhotos() {
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
        <img
          src={van.imageUrl}
          alt={van.name}
          style={{ width: "180px", height: "180px", objectFit:"contain" }}
        />
      )}
    </>
  );
}

export default HostVanPhotos;
