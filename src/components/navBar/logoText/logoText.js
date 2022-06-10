import React from "react";
import './logoText.css'

export const LogoText = ({ state, text }) => {
    return (

        <div className={`navbar-logo-text${!state ? ' responsive-navbar-logo-text' : ''}`}>
            <div>{text}</div>

        </div>
    );
}
