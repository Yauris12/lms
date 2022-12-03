import React, { useEffect, useState } from 'react'
import InputText from '../components/InputText'

import {
  RiUser3Fill,
  RiShieldUserFill,
  RiMailFill,
  RiLockPasswordFill,
  RiH1,
} from 'react-icons/ri'
import Wrapper from '../assets/wrappers/Register'
import { useUserContext } from '../context/userContext/Usercontext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const { user, loginUser, alertText, showAlert } = useUserContext()

  const [values, setValues] = useState({
    email: '',
    password: '',
  })

  const { email, password } = values

  const handleChange = (e) => {
    const { name, value } = e.target

    setValues({ ...values, [name]: value })
  }

  const currentUser = { correo: email, password }
  const onSubmit = (e) => {
    e.preventDefault()
    console.log('entrew')
    loginUser(currentUser)
  }

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user, navigate])

  return (
    <Wrapper>
      <p className='title'>Regístrate y comienza a aprender.</p>

      <form onSubmit={onSubmit}>
        <InputText
          placeholder='correo electronico'
          type='email'
          name='email'
          value={email}
          icon={{ svg: <RiMailFill /> }}
          onChange={handleChange}
        />
        <InputText
          placeholder='Contraseña'
          type='password'
          name='password'
          value={password}
          icon={{ svg: <RiLockPasswordFill /> }}
          onChange={handleChange}
        />
        <input
          type='submit'
          value='Iniciar Sesion'
          className='btn btn-primary input-btn '
        />
      </form>

      {showAlert && <h3>{alertText}</h3>}
    </Wrapper>
  )
}

export default Login
