import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.scss';
import bg from "../../assets/largecar.jpg"
import { Pagination, Navigation } from 'swiper/modules';

export default function SmallCarousel() {
  return (
    <div className='swiper-container'>
      <Swiper
        slidesPerView={1}
        spaceBetween={1000}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={bg} alt="" /></SwiperSlide>
        <SwiperSlide><img src={bg} alt="" /></SwiperSlide>
        <SwiperSlide><img src={bg} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
}
