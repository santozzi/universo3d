import React, { useState } from 'react';
import './navBar.css';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { CartWidjet } from './cartWidjet/cartWidjet';
import { NavLink, Link } from 'react-router-dom';


export const NavBar = () => {
    const [state, setstate] = useState(true);

    const showNavBar = () => {
        state ? setstate(false) : setstate(true);

    }
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

        <div className={`navbar-container-default ${state ? 'navbar-container' : 'responsive-navbar-container'}`} >

            <Link to="/" className={`navbar-logo-text${!state ? ' responsive-navbar-logo-text' : ''}`}>
                <div>universo 3d</div>
            </Link>
            <nav className={`navbar-default${!state ? ' responsive-navbar' : ''}`}>

                <NavLink to="/" className={`navbar-link-default ${state ? 'navbar-link' : 'responsive-navbar-link'}`} style={({ isActive }) => (isActive ? active : disactive)}>Home</NavLink>
                <NavLink to="/category/1" className={`navbar-link-default ${state ? 'navbar-link' : 'responsive-navbar-link'}`} style={({ isActive }) => (isActive ? active : disactive)}>Mates</NavLink>
                <NavLink to="/category/3" style={({ isActive }) => (isActive ? active : disactive)} className={`navbar-link-default ${state ? 'navbar-link' : 'responsive-navbar-link'}`} >Llaveros</NavLink>
                <NavLink to="/category/2" className={`navbar-link-default ${state ? 'navbar-link' : 'responsive-navbar-link'}`} style={({ isActive }) => (isActive ? active : disactive)}>Porta sahumerios</NavLink>
                <NavLink to="/category/4" className={`navbar-link-default ${state ? 'navbar-link' : 'responsive-navbar-link'}`} style={({ isActive }) => (isActive ? active : disactive)}>Cortadores</NavLink>
                <CartWidjet />
            </nav>
            {
                (state) ?
                    <button
                        className={`navbar-btn navbar-btn-hidden ${state ? 'navbar-bars-btn' : 'responsive-navbar-bars-btn'}`}
                        onMouseUp={showNavBar}
                    >
                        <FaBars />
                    </button>
                    :
                    <button
                        className={`navbar-btn navbar-btn-hidden${state ? ' navbar-close-btn' : ' responsive-navbar-close-btn'}`}
                        onMouseUp={showNavBar}
                    >
                        <FaTimes />
                    </button>
            }

        </div>
    );
}