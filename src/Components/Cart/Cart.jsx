import React from 'react'
import "./CssCart.css"
import carritoDeCompras from 'C:/Users/agust/OneDrive/Escritorio/ejercicios react coder/ropi-max/src/assets/carrito-de-compras.png';
const Cart = () => {
    const cantidadEnCarrito = 1
    return (
        <div>

            <div>
                <a href="#">
                    <img src={carritoDeCompras} alt="" />
                </a>
            </div>

            <div className='cantidad-carrito'>
                <p>
                    {cantidadEnCarrito}
                </p>
            </div>


        </div>
    )
}

export default Cart