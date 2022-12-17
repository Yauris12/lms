import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
// import { courses } from '../utils/data'
import Starts from './Starts'

const ListView = ({ query }) => {
  const [courseList, setCourseList] = useState([])

  const getListCourses = async () => {
    try {
      const { data } = await axios.get(
        'http://riesgoscriticos.atwebpages.com/index.php/curso/list'
      )

      const busqueda = data.filter((el) =>
        el.nombre_curso.toLowerCase().includes(query)
      )

      console.log('MIS DATOS', busqueda)
      setCourseList(busqueda)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getListCourses()
  }, [query])

  return (
    <div className='listView'>
      {courseList?.map((course) => {
        console.log('ORORR', course)
        return (
          <div className='course'>
            <img src={course.img} alt='' className='container-img' />
            <div className='content'>
              <h2>{course.nombre_curso}</h2>
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
