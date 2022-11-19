import React from 'react'
import { RiUser3Fill } from 'react-icons/ri'
import styled from 'styled-components'

const InputText = ({ type, name, value, onChange, placeholder, icon }) => {
  // console.log(RiUser3Fill)
  return (
    <div className='input-container'>
      {icon.svg}
      <input
        className='input'
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete='off'
      />
    </div>
  )
}

export default InputText
