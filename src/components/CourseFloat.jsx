import React from 'react'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { useCartContext } from '../context/useCart/CartContext'

const CourseFloat = ({ id, nombre, video, precio, horas, imagen }) => {
  const playerRef = React.useRef(null)

  const { addToCart } = useCartContext()

  // console.log(addToCart())

  const payload = { id, nombre, precio, imagen, horas }
  console.log('MI PAYLOAD', payload)
  return (
    <div className='courseFloat'>
      <div className='img-container'>
        {/* <img src={imagen} alt='cover' className='imgg' /> */}
        <ReactPlayer
          url={video}
          light={imagen}
          playing
          ref={playerRef}
          width='100%'
          height='100%'
        />
      </div>

      <div className='price'>$/ {precio}</div>
      <div className='button-init'>
        <button className='btn btn-primary' onClick={() => addToCart(payload)}>
          Anadir Cesta
        </button>

        <Link to='register'>
          <button className='btn btn-secondary'>Compar curso</button>
        </Link>
      </div>

      <div className='course-footer'>
        <h3>Este curso incluye</h3>
        <ul>
          <li>{horas} horas de vídeo bajo demanda</li>
          <li>Compatible con todos los dispositivos</li>
          <li>Certificado de finalización</li>
        </ul>
      </div>
    </div>
  )
}

export default CourseFloat
