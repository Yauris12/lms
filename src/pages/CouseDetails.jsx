import React from 'react'

import { RiStarFill } from 'react-icons/ri'
import Wrapper from '../assets/wrappers/CourseDetail'
import CommentCourse from '../components/CommentCourse'
import ContentCurso from '../components/ContentCurso'
import CourseFloat from '../components/CourseFloat'
import Starts from '../components/Starts'

const CouseDetails = () => {
  return (
    <Wrapper>
      <main>
        <div className='container'>
          <h1>Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL</h1>
          <p className='description'>
            Aprende Desarrollo Web con este curso 100% práctico, paso a paso y
            sin conocimientos previo INCLUYE 4 PROYECTOS FINALES
          </p>
          <div>
            <Starts stars='4.5' reviews='133' />
          </div>
          <div>Última actualización: 10/2022</div>
        </div>

        <CourseFloat />
      </main>

      <ContentCurso />

      <CommentCourse />
    </Wrapper>
  )
}

export default CouseDetails
