import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { EffectCoverflow, Pagination } from 'swiper'
import Wrapper from '../assets/wrappers/Testimonials'
import { RiDoubleQuotesL } from 'react-icons/ri'
import people from '../utils/data'

const Testimonials = () => {
  return (
    <Wrapper className='container'>
      <h2 className='title'>Testimonios</h2>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        loop={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className='mySwiper'
      >
        {people.map((person) => {
          return (
            <SwiperSlide>
              <div className='testimonial-container'>
                <div className='container-svg'>
                  <RiDoubleQuotesL />
                </div>
                <div className='content'>{person.quote}</div>
                <div className='img-container'>
                  <img className='person-img' src={person.image} alt='' />
                </div>
                <h2 className='name'>{person.name}</h2>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Wrapper>
  )
}

export default Testimonials
