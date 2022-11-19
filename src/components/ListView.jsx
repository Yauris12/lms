import React from 'react'
import { courses } from '../utils/data'
import Starts from './Starts'

const ListView = () => {
  return (
    <div className='listView'>
      {courses.map((course) => {
        return (
          <div className='course'>
            <img src={course.image} alt='' className='container-img' />
            <div className='content'>
              <h2>{course.name}</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                veritatis quidem repellendus obcaecati soluta pariatur voluptate
                debitis voluptas, aspernatur suscipit.
              </p>
              <Starts stars={3} reviews={300} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ListView
