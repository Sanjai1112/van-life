import React from "react";
import { Link } from "react-router-dom";

export default function HostVan({ name, price, imageUrl, id }) {
  return (
    <Link to={id} className='host-van-detail'>
      <img className='host-van-img' src={imageUrl} alt={name} />
      <span className='host-van-name-price'>
        <h2>{name}</h2>
        <span>${price}/day</span>
      </span>
    </Link>
  );
}
