import React from "react";
import './logoText.css'

export const LogoText = ({ state }) => {
    return (

        <div className={`navbar-logo-text${!state ? ' responsive-navbar-logo-text' : ''}`}>
            <div>universo</div>
            <div>3d</div>
        </div>
    );
}
