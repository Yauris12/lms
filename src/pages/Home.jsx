import React from 'react'
import Banner from '../components/Banner'
import CourseList from '../components/CourseList'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Banner />
      <CourseList title='Cursos Populares' />
      <CourseList title='Cursos Nuevos' />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home
