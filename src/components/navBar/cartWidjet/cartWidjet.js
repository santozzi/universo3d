import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../cartContext/cartContext';
import './cartWidjet.css';

import Badge from '@mui/material/Badge';

export const CartWidjet = () => {
    const { totalPlus } = useContext(CartContext);

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
        <Badge badgeContent={totalPlus()} color="error">
            <NavLink to='/cart' className='cart-widjet-btn' style={({ isActive }) => (isActive ? active : disactive)}>
                <FaShoppingCart />
            </NavLink>
        </Badge>



    );
}