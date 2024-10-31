import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination ,Autoplay,EffectFade} from 'swiper/modules';

import img1 from '../images/image11.jpg';
import { Navbarheader } from './Navbarheader';
import { Typewriter } from 'react-simple-typewriter';
export const Slidershow = () => {
  return (
    <div>
        <Navbarheader/>
        <Swiper pagination={true}  className="mySwiper"  spaceBetween={0}
        // centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect={'Fade'}
        grabCursor={true}
        fadeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        modules={[Pagination,Autoplay,EffectFade]}
        >
        <SwiperSlide className='slidercontainer'><div> <div className='swiperslidertypewriter' ><Typewriter
            words={['Welcome', 'To', 'Binghatti']}
            loop={Infinity}
            cursor
            cursorStyle='_'
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={1000}
            cursorBlinking={false}
             
          /></div>
          
          <img loading='lazy' className='slidephoto' src={img1} alt='Home-Photo'/>
          </div></SwiperSlide>
     




     
       
      </Swiper>
    </div>
  )
}
