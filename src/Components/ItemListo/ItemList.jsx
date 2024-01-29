import React from 'react'

const ItemList = ({ nombre, precio, talles, descripcion }) => {
    return (
        <div>
            <div><h3>{nombre}</h3></div>
            <div><h4>{precio}</h4></div>
            <div><h5>{talles}</h5></div>
            <div><p>{descripcion}</p></div>
            


        </div>
    )
}

export default ItemList