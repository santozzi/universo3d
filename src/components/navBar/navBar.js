import React, { useState } from 'react';
import { LogoText } from './logoText/logoText';
import { Botones } from './botones/botones';
import './navBar.css';
import { NavLinks } from './navLinks/navLinks';



export const NavBar = () => {
    const [state, setstate] = useState(true);

    const showNavBar = () => {
        state ? setstate(false) : setstate(true);

    }

    return (

        <div className={`navbar-container-default ${state ? 'navbar-container' : 'responsive-navbar-container'}`} >
            <LogoText state={state} text='universo 3d' />
            <NavLinks state={state} />

            <Botones state={state} funcion={showNavBar} />
        </div>
    );
}