import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Navigation, Pagination,EffectCoverflow,Autoplay } from 'swiper/modules';
import '../css/home.css'; // 引入自定义样式
import Fallow from '../componets/Fallow'

const slides = [
  "https://picsum.photos/600/400?random=1",
  "https://picsum.photos/600/400?random=2",
  "https://picsum.photos/600/400?random=3",
  "https://picsum.photos/600/400?random=4",
  "https://picsum.photos/600/400?random=5",
  "https://picsum.photos/600/400?random=6",
  "https://picsum.photos/600/400?random=7",
  "https://picsum.photos/600/400?random=8",
  "https://picsum.photos/600/400?random=9"
];

const Home = () => {



  return (
    <div>
      <Fallow mouse="gif"/>
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
        {slides.map((src, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: '256px',
              height: '256px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div className="w-full h-64 flex items-center justify-center">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Home;
