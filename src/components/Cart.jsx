import React from 'react'

const Cart = ({cartItems}) => {
  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (<p>El carrito esta vacio</p>) : 
      (<ul>
        {cartItems.map((item, index)=>(<li key={index}>{item.nombre} - ${item.precio}</li>))}
      </ul>)}
    </div>
  )
}

export default Cart
