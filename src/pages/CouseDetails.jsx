import React, { useState, useEffect } from 'react'

import { RiStarFill } from 'react-icons/ri'
import { useLocation } from 'react-router-dom'
import Wrapper from '../assets/wrappers/CourseDetail'
import CommentCourse from '../components/CommentCourse'
import ContentCurso from '../components/ContentCurso'
import CourseFloat from '../components/CourseFloat'
import Starts from '../components/Starts'
import { useParams } from 'react-router-dom'

import axiosClient from '../api/axiosClient.js'
import { logRoles } from '@testing-library/react'

const CouseDetails = () => {
  const { idCourse } = useParams()
  const [course, setCourse] = useState({})

  const [details, setDetails] = useState([])
  const getListCourse = async () => {
    try {
      const data = await axiosClient.post('/curso/infoCurso', {
        id_curso: idCourse,
      })
      setCourse(data[0])
    } catch (error) {
      console.log('mi erro1', error)
    }
  }

  const getListContent = async () => {
    try {
      const data = await axiosClient.post('/curso/detalle', {
        id_curso: idCourse,
      })
      console.log('details', data)
      setDetails(data)
    } catch (error) {
      console.log('mi erro', error)
    }
  }

  useEffect(() => {
    getListCourse()
  }, [])

  useEffect(() => {
    getListContent()
  }, [])

  return (
    <Wrapper>
      <main>
        <div className='container'>
          <h1>{course.nombre_curso}</h1>
          <div className='description'>
            {course.description ? (
              <>{course.description}</>
            ) : (
              <>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                beatae illo fugiat nisi alias voluptatem quia voluptate tempora.
                Ab, quis
              </>
            )}
          </div>

          <div>
            <Starts stars={course.valoracion} reviews='133' />
          </div>
          {/* <div>Última actualización: 10/2022</div> */}
        </div>

        <CourseFloat
          id={idCourse}
          nombre={course.nombre_curso}
          video={course.url_video}
          precio={course.precio}
          horas={course.nro_horas}
          imagen={course.img}
        />
      </main>
      <ContentCurso details={details} />
      <CommentCourse />
    </Wrapper>
  )
}

export default CouseDetails
