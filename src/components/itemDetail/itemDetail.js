import React from 'react'
import { ItemCount } from '../itemCount/itemCount'
import './itemDetail.css'
export const ItemDetail = ({ item }) => {
    console.log(item);
    return (
        <section className='item-detail-section'>
            <div className='item-detail-image-description'>
                <div className='item-detail-image-container'>
                    <img className='item-detail-image' src={item.pictureUrl} alt={item.title} />
                </div>
                <div className='item-detail-description'>
                    {item.description}
                </div>

            </div>
            <div className='item-detail-resume'>
                <div className='item-detail-title'>{item.title}</div>
                <div className='item-detail-price'>${item.price}</div>
                <div className='item-detail-stock'>{`Stock ${item.stock} unidades`}</div>
                <ItemCount product=' ' stock={item.stock} initial='1' />
            </div>

        </section>
    )
}
