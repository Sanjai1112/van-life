import React from 'react';
export default function Van(props) {
    const {id, name, price, imageUrl, type} = props;
    return (
        <div className='van'>
            <img className='van-img' src={imageUrl} alt={name} id={id}/>
            <div className='van-details'>
                <span className='van-name'>{name}</span>
                <span className='van-price'>
                    <em>${price}</em>
                    <br/>
                    <i>/day</i>
                </span>
            </div>
            <button className={`van-type ${type}`}>{type}</button>
        </div>
    )
}