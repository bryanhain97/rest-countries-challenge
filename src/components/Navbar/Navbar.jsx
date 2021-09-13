import './_Navbar.scss';
import React, { useState } from 'react';
import { HiOutlineMoon, HiOutlineLightBulb } from 'react-icons/hi';

export default function Navbar() {
    const [lightMode, setLightMode] = useState(true);

    function handleClick() {
        setLightMode(!lightMode);
    }
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-title">Where in the world?</div>
                <button onClick={handleClick}>
                    {
                        lightMode ?
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
