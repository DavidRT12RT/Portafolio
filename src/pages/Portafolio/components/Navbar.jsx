import React from 'react'
import { List } from 'react-bootstrap-icons';

//Style CSS
import "../assets/css/Navbar.css";

export const Navbar = () => {
    return (
        <nav className="navbarContainer">
            <p className="sub-titulo">David Arcos's portafolio</p>
            <div className="menu">
                <p className="descripcion">.about()</p>
                <p className="descripcion">.proyects()</p>
                <p className="descripcion">.skills()</p>
                <p className="descripcion">.contact()</p>
            </div>
            <div className="menuHamburger">
                <span className="hamburger"><List/></span>
            </div>
        </nav>
    )
}
