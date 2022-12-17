import React, { useEffect, useRef, useState } from 'react'
import axiosClient from '../api/axiosClient'
import Wrapper from '../assets/wrappers/MyCourses'
import Wrapper1 from '../assets/wrappers/CourseList'
import { Link } from 'react-router-dom'

import CourseCard from '../components/CourseCard'
import { useUserContext } from '../context/userContext/Usercontext'
import ReporteCursos from '../components/ReporteCursos'
import { useReactToPrint } from 'react-to-print'

const MyCourses = () => {
  const { user } = useUserContext()
  const facturaRef = useRef()

  const [myCourses, setMyCourses] = useState([])

  const getCursoEstudiante = async () => {
    try {
      const data = await axiosClient.post('/curso/estudiante', {
        id_usuario: user.id_usuario,
      })
      setMyCourses(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCursoEstudiante()
  }, [])

  const handlePrint = useReactToPrint({
    content: () => facturaRef.current,
  })

  return (
    <Wrapper className='container'>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h3>Mis Cursos</h3>
        <button onClick={handlePrint}>Reporte Cursos</button>
      </div>

      <div className='grid-cards'>
        <Wrapper1>
          {Array.isArray(myCourses) &&
            myCourses.map((course) => {
              return (
                <div>
                  <Link to={`/estudiante/curso/${course.id_curso}`}>
                    <div className='container-img'>
                      <img className='course-card' src={course.img} alt='' />
                    </div>
                    <div>{course.nombre_curso}</div>
                  </Link>
                </div>
              )
            })}
        </Wrapper1>
      </div>
      <ReporteCursos facturaRef={facturaRef} />
    </Wrapper>
  )
}

export default MyCourses
