import React from 'react'
import { useParams } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Courses'
import Filters from '../components/Filters'
import ListView from '../components/ListView'

const Courses = () => {
  const { query } = useParams()
  console.log(query)
  return (
    <Wrapper className='container'>
      <h3>Resultados para "{query}"</h3>

      <div className='flex-courses'>
        <Filters />
        <ListView query={query} />
      </div>
    </Wrapper>
  )
}

export default Courses
