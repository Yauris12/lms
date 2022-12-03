import React, { useState } from 'react'
import InputText from '../components/InputText'

import {
  RiUser3Fill,
  RiShieldUserFill,
  RiMailFill,
  RiLockPasswordFill,
} from 'react-icons/ri'
import Wrapper from '../assets/wrappers/Register'
import { useUserContext } from '../context/userContext/Usercontext'
const Register = () => {
  const { user, registerUser, showAlert, alertText } = useUserContext()

  const [values, setValues] = useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
  })

  const { name, lastname, email, password } = values

  const handleChange = (e) => {
    const { name, value } = e.target

    setValues({ ...values, [name]: value })
  }

  const currentUser = {
    nombre: name,
    apellidos: lastname,
    correo: email,
    password,
  }
  const onSubmit = (e) => {
    e.preventDefault()
    registerUser(currentUser)
  }

  return (
    <Wrapper>
      <p className='title'>Regístrate y comienza a aprender.</p>

      <form onSubmit={onSubmit}>
        <InputText
          placeholder='nombre'
          type='text'
          name='name'
          value={name}
          icon={{ svg: <RiUser3Fill /> }}
          onChange={handleChange}
        />

        <InputText
          placeholder='apellidos'
          type='text'
          name='lastname'
          value={lastname}
          icon={{ svg: <RiShieldUserFill /> }}
          onChange={handleChange}
        />
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
          value='Registrate'
          className='btn btn-primary input-btn '
        />
      </form>
      {showAlert && <h3>{alertText}</h3>}
    </Wrapper>
  )
}

export default Register
