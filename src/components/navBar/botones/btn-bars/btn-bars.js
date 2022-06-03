import React from "react";
import { FaBars } from 'react-icons/fa';
import './btn-bars.css';

export const BtnBars = ({ state, funcion }) => {
    return (
        <button
            className={`navbar-btn navbar-btn-hidden ${state ? 'navbar-bars-btn' : 'responsive-navbar-bars-btn'}`}
            onMouseUp={funcion}
        >
            <FaBars />
        </button>
    );
}