import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function HostVanPrice() {
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
        <span style={{ marginTop: "10px" }}>
          <i
            style={{
              fontWeight: "500",
              fontSize: "24px",
              lineHeight: "21px",
              fontStyle: "normal",
            }}
          >
            ${van.price}
          </i>
          <i style={{ fontStyle: "normal", color: "#4D4D4D" }}>/day</i>
        </span>
      )}
    </>
  );
}

export default HostVanPrice;
