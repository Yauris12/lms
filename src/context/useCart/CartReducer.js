import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from './actions'
const reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id } = action.payload
    console.log(action.payload)
    console.log('miID', action.payload.id)

    const tempItem = state.cart.find((i) => i.id === id)

    if (tempItem) {
      return { ...state }
    } else {
      const newItem = action.payload
      return { ...state, cart: [...state.cart, newItem] }
    }
  }

  if (action.type === COUNT_CART_TOTALS) {
    const total_items = state.cart.length
    console.log('total items', total_items)

    let total_price = 0
    state.cart.map((x) => {
      total_price += Number(x.precio)
    })
    console.log('total price', total_price)
    return { ...state, total_items, total_price }
  }

  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => item.id !== action.payload)
    return { ...state, cart: tempCart }
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] }
  }
  throw new Error(`no such action : ${action.type}`)
}
export default reducer
