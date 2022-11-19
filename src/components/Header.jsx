import React, { useState } from 'react'
import logo from '../assets/img/logo.png'

import { RiSearchLine } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom'

import Wrapper from '../assets/wrappers/Header.js'

const Header = () => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()

    if (!query) return
    navigate(`course/search/${query}`)
  }

  return (
    <Wrapper>
      <div className='nav container'>
        <div>
          <Link to='/'>
            <img src={logo} alt='Riesgos Criticos' className='logo' />
          </Link>
        </div>

        <form className='search-bar' onSubmit={onSubmit}>
          <div>
            <div className='icon'>
              <RiSearchLine />
            </div>
            <input
              type='text'
              className='input-search'
              onChange={(e) => setQuery(e.target.value)}
            />
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
