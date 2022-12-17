import React from 'react'

import {
  RiPlayCircleFill,
  RiEyeFill,
  RiArrowRightSFill,
  RiArrowDownSFill,
} from 'react-icons/ri'
const ContentCurso = ({ details }) => {
  console.log('NUEVOID', details)

  return (
    <div className='container course-content'>
      <h2>Contenido del curso</h2>

      <div className='lessons'>
        <div className='lession-container'>
          {details.map((detail) => {
            console.log('DEER', detail)

            return (
              <>
                <div className='header-lession'>
                  <RiArrowRightSFill className='icon' />
                  {detail[0].nombre_curso}
                </div>

                <ul className='content-lession'>
                  {detail.slice(1).map((content) => {
                    console.log('CONTENT', content)
                    return (
                      <div className='flex-lession'>
                        <li className='flex-title'>
                          <RiPlayCircleFill className='icon1' />
                          <p>{content.nombre_seccion}</p>
                        </li>
                        <RiEyeFill className='icon1' />
                      </div>
                    )
                  })}
                </ul>
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ContentCurso
