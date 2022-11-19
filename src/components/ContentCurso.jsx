import React from 'react'

import {
  RiPlayCircleFill,
  RiEyeFill,
  RiArrowRightSFill,
  RiArrowDownSFill,
} from 'react-icons/ri'
const ContentCurso = () => {
  return (
    <div className='container course-content'>
      <h2>Contenido del curso</h2>

      <div className='lessons'>
        <div className='lession-container'>
          <div className='header-lession'>
            <RiArrowRightSFill className='icon' />
            Introduccion
          </div>

          <ul className='content-lession'>
            <div className='flex-lession'>
              <li className='flex-title'>
                <RiPlayCircleFill className='icon1' />
                <p>Repositorio del proyecto</p>
              </li>
              <RiEyeFill className='icon1' />
            </div>
            <div className='flex-lession'>
              <li className='flex-title'>
                <RiPlayCircleFill className='icon1' />
                <p>Resultado final de la app</p>
              </li>
              <RiEyeFill className='icon1' />
            </div>{' '}
          </ul>
        </div>

        <div className='lession-container'>
          <div className='header-lession'>
            <RiArrowRightSFill className='icon' />
            Seccion1
          </div>

          <ul className='content-lession'>
            <div className='flex-lession'>
              <li className='flex-title'>
                <RiPlayCircleFill className='icon1' />
                <p>Empezando</p>
              </li>
              <RiEyeFill className='icon1' />
            </div>
            <div className='flex-lession'>
              <li className='flex-title'>
                <RiPlayCircleFill className='icon1' />
                <p>Primeras Instalaciones</p>
              </li>
              <RiEyeFill className='icon1' />
            </div>{' '}
            <div className='flex-lession'>
              <li className='flex-title'>
                <RiPlayCircleFill className='icon1' />
                <p>Nuestro primer codigo</p>
              </li>
              <RiEyeFill className='icon1' />
            </div>{' '}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ContentCurso
