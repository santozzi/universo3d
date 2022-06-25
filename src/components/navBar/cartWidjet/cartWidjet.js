import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './cartWidjet.css';
export const CartWidjet = () => {
    // const navigate = useNavigate();
    //onClick={() => navigate('/cart')}
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
        <NavLink to='/cart' className='cart-widjet-btn' style={({ isActive }) => (isActive ? active : disactive)}><FaShoppingCart /></NavLink>
    );
}