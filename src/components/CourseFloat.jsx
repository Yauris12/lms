import React from 'react'
import { Link } from 'react-router-dom'

const CourseFloat = () => {
  return (
    <div className='courseFloat'>
      <div className='img-container'></div>
      <div className='price'>$/ 299</div>
      <div className='button-init'>
        <Link to='login'>
          <button className='btn btn-primary'>Anadir Cesta</button>
        </Link>
        <Link to='register'>
          <button className='btn btn-secondary'>Compar curso</button>
        </Link>
      </div>

      <div className='course-footer'>
        <h3>Este curso incluye</h3>
        <ul>
          <li>27 horas de vídeo bajo demanda</li>
          <li>Compatible con todos los dispositivos</li>
          <li>Certificado de finalización</li>
        </ul>
      </div>
    </div>
  )
}

export default CourseFloat
