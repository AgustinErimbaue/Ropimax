import React from 'react'
import "./CssCart.css"
import carritoDeCompras from 'C:/Users/agust/OneDrive/Escritorio/ejercicios react coder/ropi-max/src/assets/carrito-de-compras.png';
const Cart = () => {
    const cantidadEnCarrito = 1
    return (
        <div>
            <a href="#">
                <img src={carritoDeCompras} alt="" />
            </a>
                <p>
                    {cantidadEnCarrito}
                </p>


        </div>
    )
}

export default Cart