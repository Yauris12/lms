import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'normalize.css'
import reportWebVitals from './reportWebVitals'
import AppRoute from './Routes/AppRoute'

import 'antd/dist/reset.css'
import 'swiper/css'
import './index.css'
import 'normalize.css'
import { UserProvider } from './context/userContext/Usercontext'
import { CartProvider } from './context/useCart/CartContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <UserProvider>
    <CartProvider>
      <AppRoute />
    </CartProvider>
  </UserProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
