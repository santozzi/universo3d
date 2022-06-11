
import React from 'react';
import './item.css';

export const Item = ({ pictureUrl, title, price }) => {
    const click = () => {
        alert("click");
    }
    return (
        <div onClick={click} className='card-product-Mobile'>
            <div className='card-product-Mobile-container-image'>
                <img className='card-product-Mobile-image' src={pictureUrl} alt='imagen box' />
            </div>
            <div className='card-product-detail-box'>
                <div className='card-product-detail-box-tilte'>{title}</div>
                <div className='card-product-detail-box-price'>${price}</div>
                <div className='card-product-detail-box-icons'></div>
            </div>
        </div>
    );
}