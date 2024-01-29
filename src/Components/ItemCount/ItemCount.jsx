import React, { useState } from 'react'

const ItemCount = ({ initial,stock}) => {

    const [count, setCount] = useState(initial)

    const handlePlus = () => {
        if(count < stock){
            setCount(count +1)
        }
    }

    const handleRest = () => {
        if(count >initial){
            setCount(count - 1)
        }
    }

    return (
        <div>

            <div>Camisas</div>
            <button onClick={handleRest}>-</button>
            <h4>{count}</h4>
            <button onClick={handlePlus}>+</button>
            <div>agregar al carrito</div>
        </div>
    )
}

export default ItemCount