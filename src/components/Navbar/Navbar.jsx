import './_Navbar.scss';
// import React, { useState } from 'react';
import { HiOutlineMoon, HiOutlineLightBulb } from 'react-icons/hi';
// import { GiBlackball } from 'react-icons/gi';

export default function Navbar(props) {
    let {lightmode, handleLightMode} = props;

    function handleClick() {
        lightmode = !lightmode;
        handleLightMode();
    }

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-title">Where in the world?</div>
                <button onClick={handleClick} style={lightmode ? { color: "black" } : { color: "white" }}>
                    {
                        lightmode ?
                            <div className="navbar-button">
                                <HiOutlineMoon className="navbar-logo" />Dark Mode
                            </div>
                            :
                            <div className="navbar-button">
                                <HiOutlineLightBulb className="navbar-logo" />Light Mode
                            </div>
                    }
                </button>
            </div>
        </nav>
    )
}
