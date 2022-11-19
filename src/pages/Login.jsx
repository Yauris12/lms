import React, { useState } from 'react'
import InputText from '../components/InputText'

import {
  RiUser3Fill,
  RiShieldUserFill,
  RiMailFill,
  RiLockPasswordFill,
} from 'react-icons/ri'
import Wrapper from '../assets/wrappers/Register'
const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  })

  const { name, lastname, email, password } = values

  const handleChange = (e) => {
    const { name, value } = e.target

    setValues({ ...values, [name]: value })
  }

  return (
    <Wrapper>
      <p className='title'>Regístrate y comienza a aprender.</p>

      <form>
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
          type='button '
          value='Iniciar Sesion'
          className='btn btn-primary input-btn '
        />
      </form>
    </Wrapper>
  )
}

export default Login
