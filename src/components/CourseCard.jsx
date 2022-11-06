import React from 'react'
import { Link } from 'react-router-dom'

const CourseCard = ({ name, image, id }) => {
  return (
    <div>
      <Link to={`/course/${id}`}>
        <div className='container-img'>
          <img className='course-card' src={image} alt='' />
        </div>
        <div>{name}</div>
      </Link>
    </div>
  )
}

export default CourseCard
