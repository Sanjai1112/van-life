import React, { useEffect, useState } from "react";
import Van from "./Van";
import { Link, useSearchParams } from "react-router-dom";

export default function VanContainer(props) {
  const [vans, setVans] = useState([]);
  const [filterSet, setFilterSet] = useState(new Set());
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("typeFilter");
  useEffect(() => {
    fetch("/api/vans")
      .then((resp) => {
        if (resp.status === 200) {
          return resp.json();
        }
      })
      .then((data) => {
        if (data.vans && Array.isArray(data.vans)) {
          let vans = data.vans;
          let filterSet = new Set();
          vans.forEach((van) => filterSet.add(van.type));
          setFilterSet(filterSet);
          if (typeFilter) {
            vans = vans.filter(
              (van) => van.type.toLowerCase() === typeFilter.toLowerCase()
            );
          }
          setVans(vans);
        }
      });
  }, [typeFilter]);

  const getFilter = () => {
    let filters = [];
    filterSet.forEach((type) =>
      filters.push(
        <Link key={type} to={`?typeFilter=${type}`}>
          {type}
        </Link>
      )
    );
    return filters;
  };

  return (
    <>
      <div className='van-container'>
        <h1>Explore our van options</h1>
        {vans && vans.length > 0 && (
          <div className='van-filter'>
            {getFilter()}{" "}
            {typeFilter && (
              <Link className='clear-filter' to='.'>
                Clear filters
              </Link>
            )}
          </div>
        )}
        <div className='van-list'>
          {vans.map((car) => {
            return <Van {...car} key={car.id} />;
          })}
        </div>
      </div>
    </>
  );
}
