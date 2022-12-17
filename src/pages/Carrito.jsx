import React from 'react'
import CartTotals from '../components/CartTotal'
import { useCartContext } from '../context/useCart/CartContext'
import CartItem from './CartItem'

const Carrito = () => {
  const { cart } = useCartContext()
  return (
    <div className='container-alt'>
      <h3>Carrito</h3>
      <div style={{ display: 'flex' }}>
        <div>
          {cart.map((item) => {
            return <CartItem key={item.id} {...item} />
          })}
        </div>

        <CartTotals />
      </div>
    </div>
  )
}

export default Carrito
