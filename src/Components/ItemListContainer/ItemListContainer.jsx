import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import productos from '../data/Products'
import ItemList from '../ItemListo/ItemList'

const ItemListContainer = (props) => {
  return (
    <div>
     
      <h1>{props.greeting}</h1>

      {productos.map ((products) => (<ItemList key={products.id} {...products} />))}

      <div><ItemCount initial={0} stock={5}/></div>
      
    </div>

  )
}

export default ItemListContainer