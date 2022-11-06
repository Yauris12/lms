import React from 'react'
import logo from '../assets/img/logo.png'

import { RiSearchLine } from 'react-icons/ri'

import Wrapper from '../assets/wrappers/Header.js'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <Wrapper>
      <div className='nav container'>
        <div>
          <Link to='/'>
            <img src={logo} alt='Riesgos Criticos' className='logo' />
          </Link>
        </div>

        <form className='search-bar'>
          <div>
            <div className='icon'>
              <RiSearchLine />
            </div>
            <input type='text' className='input-search' />
          </div>
        </form>

        <div className='button-init'>
          <Link to='login'>
            <button className='btn btn-secondary'>Iniciar Sesion</button>
          </Link>
          <Link to='register'>
            <button className='btn btn-primary'>Registrarse</button>
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}

export default Header
