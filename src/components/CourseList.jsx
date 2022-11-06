import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Wrapper from '../assets/wrappers/CourseList'
import { courses } from '../utils/data'
import CourseCard from './CourseCard'
import { Navigation } from 'swiper'

import 'swiper/css/pagination'
import 'swiper/css/navigation'
const CourseList = ({ title }) => {
  console.log(courses)
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
          {courses.map((course) => {
            return (
              <SwiperSlide key={course.id}>
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
