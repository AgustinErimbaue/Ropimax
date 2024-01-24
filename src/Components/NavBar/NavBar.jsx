import React from 'react'
import Cart from '../Cart/Cart'
import "./NavbarCss.css"

const NavBar = () => {
    return (
        <div className="container">
            <h2 className="site-title">VogueVértice</h2>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Ofertas</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            <div>
                <Cart />
            </div>
        </div>
    );
}

export default NavBar;
