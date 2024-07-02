import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'

import { Navigation, Pagination,EffectCoverflow,Autoplay } from 'swiper/modules';
import '../css/home.css'; // 引入自定义样式

const Home = () => {
  return (
    <div>
      <Swiper
        className='mt-4'
        modules={[Navigation, Pagination, EffectCoverflow,Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="4"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation
        spaceBetween={25}
        loop={true}
        autoplay={{delay:2500,}}
      >
        <SwiperSlide  style={{ width: '256px', height: '256px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="w-64 h-64 flex items-center justify-center">
            <img
              src="https://picsum.photos/600/400?random=1"
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide  style={{ width: '256px', height: '256px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div className="w-64 h-64 flex items-center justify-center">
            <img
              src="https://picsum.photos/600/400?random=2"
              alt="Slide 2"
              className="w-64 h-full object-cover "
            />
          </div>
        </SwiperSlide>
        <SwiperSlide  style={{ width: '256px', height: '256px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="w-64 h-64 flex items-center justify-center">
            <img
              src="https://picsum.photos/600/400?random=3"
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide  style={{ width: '256px', height: '256px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="w-64 h-64 flex items-center justify-center">
            <img
              src="https://picsum.photos/600/400?random=4"
              alt="Slide 4"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide  style={{ width: '256px', height: '256px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="w-64 h-64 flex items-center justify-center">
            <img
              src="https://picsum.photos/600/400?random=5"
              alt="Slide 4"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide  style={{ width: '256px', height: '256px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="w-64 h-64 flex items-center justify-center">
            <img
              src="https://picsum.photos/600/400?random=6"
              alt="Slide 4"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide  style={{ width: '256px', height: '256px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="w-64 h-64 flex items-center justify-center">
            <img
              src="https://picsum.photos/600/400?random=7"
              alt="Slide 4"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide  style={{ width: '256px', height: '256px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="w-64 h-64 flex items-center justify-center">
            <img
              src="https://picsum.photos/600/400?random=8"
              alt="Slide 4"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Home;
