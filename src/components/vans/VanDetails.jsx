import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function VanDetails(props) {
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
    <div className='van-full-details'>
      <Link to='/vans' className='vans-list-back'>
        <i className="left-arrow">&larr;</i>
        <span>Back to all vans</span>
      </Link>

      {van ? (
        <>
          <img className='van-img' src={van.imageUrl} alt={van.name} />
          <button className={`van-type ${van.type}`}>{van.type}</button>
          <h1>{van.name}</h1>
          <span className='van-price'>
            <em>${van.price}</em>
            <i>/day</i>
          </span>
          <p className='van-description'>{van.description}</p>
          <button className='van-rent-btn'>Rent this van</button>
        </>
      ) : null}
    </div>
  );
}
