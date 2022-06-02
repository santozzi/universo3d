import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navBar.css';

export const NavBar = () => {
    const [state, setstate] = useState(true);

    const showNavBar = () => {
        state ? setstate(false) : setstate(true);

    }

    return (

        <div className={`navbar-container-default ${state ? 'navbar-container' : 'responsive-navbar-container'}`} >

            <div className={`navbar-logo-text${!state ? ' responsive-navbar-logo-text' : ''}`}>
                <div>universo</div>
                <div>3d</div>
            </div>

            <nav className={`navbar-default${!state ? ' responsive-navbar' : ''}`}>
                <a className={`navbar-link-default ${state ? 'navbar-link' : 'responsive-navbar-link'}`} href='/#'>Mates</a>
                <a className={`navbar-link-default ${state ? 'navbar-link' : 'responsive-navbar-link'}`} href='/#'>Llaveros</a>
                <a className={`navbar-link-default ${state ? 'navbar-link' : 'responsive-navbar-link'}`} href='/#'>Insumos</a>
                <a className={`navbar-link-default ${state ? 'navbar-link' : 'responsive-navbar-link'}`} href='/#'>Cortadores</a>
            </nav>

            <button
                className={`navbar-btn ${state ? 'navbar-close-btn' : 'responsive-navbar-close-btn'}`}
                onMouseUp={showNavBar}
            >
                <FaTimes />
            </button>
            <button
                className={`navbar-btn ${state ? 'navbar-bars-btn' : 'responsive-navbar-bars-btn'}`}
                onMouseUp={showNavBar}
            >
                <FaBars />
            </button>
        </div>
    );
}