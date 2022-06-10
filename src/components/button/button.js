import React from 'react';
import './button.css';

export const Button = ({ value, funcion }) => {
    return (
        <div className='button' onClick={funcion}>{value}</div>
    )
}
