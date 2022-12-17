import React, { useReducer, useContext, useEffect } from 'react'
import reducer from './CartReducer'
import axios from 'axios'
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from './actions'

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart')
  if (cart) {
    return JSON.parse(localStorage.getItem('cart'))
  } else {
    return []
  }
}

const CartContext = React.createContext()
const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_price: 0,
}

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addToCart = (cart) => {
    console.log('ff', cart)
    dispatch({ type: ADD_TO_CART, payload: cart })
    countCarrito()
  }
  const removeItem = (id) => {
    console.log('mids', id)
    dispatch({ type: REMOVE_CART_ITEM, payload: id })
  }
  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
  }

  const countCarrito = () => {
    dispatch({ type: COUNT_CART_TOTALS })
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
    dispatch({ type: COUNT_CART_TOTALS })
  }, [state.cart])

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCartContext = () => {
  return useContext(CartContext)
}
export { CartProvider, initialState, useCartContext }
