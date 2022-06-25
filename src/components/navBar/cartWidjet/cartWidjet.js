import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './cartWidjet.css';
export const CartWidjet = () => {
    const navigate = useNavigate();
    return (
        <button className='cart-widjet-btn' onClick={() => navigate('/cart')}><FaShoppingCart /></button>
    );
}