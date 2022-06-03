import React from "react";
import { FaTimes } from 'react-icons/fa';
import './btn-close.css';

export const BtnClose = ({ state, funcion }) => {
    return (
        <button
            className={`navbar-btn navbar-btn-hidden${state ? ' navbar-close-btn' : ' responsive-navbar-close-btn'}`}
            onMouseUp={funcion}
        >
            <FaTimes />
        </button>
    );
}