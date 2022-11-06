import React from 'react'
import 'swiper/css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import CouseDetails from '../pages/CouseDetails'

const AppRoute = () => {
  console.log()
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/course/:idCourse' element={<CouseDetails />} />
        </Routes>
      </Router>
    </>
  )
}

export default AppRoute
