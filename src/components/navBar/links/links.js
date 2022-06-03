import React from 'react';
import './links.css';
import { CartWidjet } from '../cartWidjet/cartWidjet';
export const Links = ({ state }) => {
    return (
        <>
            <a className={`navbar-link-default ${state ? 'navbar-link' : 'responsive-navbar-link'}`} href='/#'>Mates</a>
            <a className={`navbar-link-default ${state ? 'navbar-link' : 'responsive-navbar-link'}`} href='/#'>Llaveros</a>
            <a className={`navbar-link-default ${state ? 'navbar-link' : 'responsive-navbar-link'}`} href='/#'>Insumos</a>
            <a className={`navbar-link-default ${state ? 'navbar-link' : 'responsive-navbar-link'}`} href='/#'>Cortadores</a>
            <CartWidjet />
        </>
    );
}