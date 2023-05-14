import React from "react";
import { Link } from "react-router-dom";
export default function Van(props) {
  const { id, name, price, imageUrl, type } = props;
  return (
    <div className='van'>
      <Link to={`/vans/${id}`}>
        <img className='van-img' src={imageUrl} alt={name} id={id} />
        <div className='van-details'>
          <span className='van-name'>{name}</span>
          <span className='van-price'>
            <em>${price}</em>
            <br />
            <i>/day</i>
          </span>
        </div>
        <button className={`van-type ${type}`}>{type}</button>
      </Link>
    </div>
  );
}
