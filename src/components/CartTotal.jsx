import React from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { useCartContext } from '../context/useCart/CartContext'
import { useUserContext } from '../context/userContext/Usercontext'
import { login, pagarCurso } from '../api/lmsApi'
import Swal from 'sweetalert2'

import { useState } from 'react'
const CartTotals = () => {
  const { cart, total_price, clearCart } = useCartContext()
  const { user } = useUserContext()
  const [cartAlt, setcartAlt] = useState(cart)

  const { id_usuario } = user

  let navigate = useNavigate()
  console.log(id_usuario)

  const idUser = {
    id_usuario: id_usuario,
  }

  const data = []
  console.log('CARRITO', cart)

  const carritoAlt = [...cart]

  let arreglado = cartAlt.map((p, i) => {
    // crear nueva propiedad de nombre producto{i + 1}
    console.log('ddd', p.id)
    p['id_curso'] = p.id
    // // remover la propiedad actual
    // delete p.id
    // // retornar el nuevo objeto

    return p
  })
  console.log(cartAlt)
  data.push(idUser)
  data.push(arreglado)

  const Pagar = async () => {
    console.log(data)
    try {
      const datos = await pagarCurso(JSON.stringify(data))

      console.log('BIEN')

      Swal.fire({
        icon: 'success',
        title: 'Su compra fue exitosa',
      })
      localStorage.removeItem('cart')
      clearCart()
      navigate('/MisCursos')
    } catch (error) {
      console.log('ERROR', error)
    }
  }

  return (
    <Wrapper>
      <div>
        <article>
          <hr />
          <h4>
            order total :<span>{total_price}</span>
          </h4>
        </article>
        {/* {myUser ? (
          <Link to='/checkout' className='btn'>
            proceed to checkout
          </Link>
        ) : (
          <button className='btn'>login</button>
        )} */}
        <button className='btn' onClick={Pagar}>
          Pagar
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`

export default CartTotals
