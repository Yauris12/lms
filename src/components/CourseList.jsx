import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Wrapper from '../assets/wrappers/CourseList'
import CourseCard from './CourseCard'
import { Navigation } from 'swiper'

import 'swiper/css/pagination'
import 'swiper/css/navigation'
import axiosClient from '../api/axiosClient'
import { useEffect } from 'react'
import { useState } from 'react'

const CourseList = ({ title }) => {
  const [courseList, setCourseList] = useState([])

  const getListCourses = async () => {
    try {
      const data = await axiosClient.get('curso/list')
      console.log('MIS DATOS', data)
      setCourseList(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getListCourses()
  }, [])

  return (
    <Wrapper className='container'>
      <h1>{title}</h1>
      <div>
        <Swiper
          grabCursor={true}
          spaceBetween={10}
          slidesPerView={'auto'}
          navigation={true}
          modules={[Navigation]}
        >
          {courseList.map((course) => {
            return (
              <SwiperSlide key={course.id_curso}>
                <CourseCard {...course} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </Wrapper>
  )
}

export default CourseList
