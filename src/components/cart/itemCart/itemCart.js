import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../cartContext/cartContext';
import { Count } from './count/count';
import './itemCart.css';
export const ItemCart = ({ itemCant }) => {
    const { item, quantity } = itemCant;
    const { removeItem, clear, findAllItems, cartSize, totalPlus, increment, decrement } = useContext(CartContext);
    //TODO agregar alt al arrego de productos para una mejor descripcion de la imagen


    return (
        <section className='itemcart-container'>
            <div className='itemcart-imagen-container'>
                <img className='itemcart-imagen' src={item.pictureUrl} alt='foto de producto' />
            </div>
            <div className='itemcart-tituloboton' >
                <div className='itemcart-tituloboton-titulo'>{item.title}</div>
                <button className='button' onClick={() => removeItem(item.id)}>Eliminar item</button>
            </div>

            <div className='itemcart-count'>
                <Count itemCant={itemCant} />
            </div>
            <div className='itemcart-precio'>
                ${item.price * quantity}
            </div>
        </section>
    )
}
