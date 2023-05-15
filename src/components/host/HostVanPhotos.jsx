import React from "react";
import { useOutletContext } from "react-router-dom";

function HostVanPhotos() {
  const van = useOutletContext();
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
