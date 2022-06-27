import React, { useContext, useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../cartContext/cartContext';
import './cartWidjet.css';
export const CartWidjet = () => {
    const { cartSize } = useContext(CartContext);

    const active = {
        color: 'red',
    }

    const disactive = {
        default: {
            color: "#eee"
        },
        Hovered: {
            color: 'red'
        }


    }


    return (

        <NavLink to='/cart' className='cart-widjet-btn' style={({ isActive }) => (isActive ? active : disactive)}>
            <FaShoppingCart />

            {cartSize() > 0 &&
                <div className='cart-widjet-count' >{cartSize()}</div>
            }
        </NavLink>


    );
}