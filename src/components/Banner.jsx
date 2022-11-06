import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Wrapper from '../assets/wrappers/Banner,'
import SwiperCore, { Autoplay } from 'swiper'
import Banner1 from '../assets/img/banner1.jpg'
import Banner2 from '../assets/img/banner2.jfif'
import Banner3 from '../assets/img/banner3.jpg'
import Banner4 from '../assets/img/banner4.jpg'
import 'swiper/css/navigation'

import { Navigation } from 'swiper'

const Banner = () => {
  return (
    <Wrapper>
      <Swiper
        navigation={true}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        <SwiperSlide>
          <img src={Banner1} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner4} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner3} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner2} alt='' />
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  )
}

export default Banner
