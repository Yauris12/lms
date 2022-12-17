import React from 'react'
import { Link } from 'react-router-dom'

const CourseCard = ({ nombre_curso, img, id_curso }) => {
  return (
    <div>
      <Link to={`/course/${id_curso}`}>
        <div className='container-img'>
          <img className='course-card' src={img} alt='' />
        </div>
        <div>{nombre_curso}</div>
      </Link>
    </div>
  )
}

export default CourseCard
