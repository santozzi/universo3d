import React from 'react';
import { Links } from '../links/links';
import './navLinks.css';
export const NavLinks = ({ state }) => {
    return (
        <nav className={`navbar-default${!state ? ' responsive-navbar' : ''}`}>
            <Links state={state} />
        </nav>
    );
}