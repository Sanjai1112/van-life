import React from "react";
import { useOutletContext } from "react-router-dom";

function HostVanPrice() {
  const van = useOutletContext();
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
