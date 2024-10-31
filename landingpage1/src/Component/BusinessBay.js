import { Container } from '@mui/material'
import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination ,Autoplay,EffectFade} from 'swiper/modules';
import img1 from '../images/image11.jpg'
import img2 from '../images/image1.jpeg'
import img3 from '../images/imgpage3.jpg'
import Zoom from 'react-reveal/Zoom';

export const BusinessBay = () => {
  return (
    <Container>
        <Zoom>
         <Row>
        <Col xs={12} md={4} style={{textAlign:'center'}}>
        <h2>BUSINESS</h2>
       <h1 style={{color:'royalblue',textAlign:'center'}}>BAY</h1> 
       </Col>
        <Col xs={6} md={4}>
        Dubai Mall<br/>
Burj Khalifa<br/>
Downtown Dub<br/>
Dubai internet<br/>
Business Bay<br/>
Marasi Marin<br/>
Safa park
</Col>
        <Col xs={6} md={4}>
        DIFC<br/>
Dubai Design District<br/>
Museum of the future<br/>
City walk<br/>
Dubai Canal<br/>
Dubai Creek Harbor<br/>
Meydan<br/>
        </Col>

      </Row>

      <Row style={{width:'100%',display:'flex',justifyContent:'center',textAlign:'center',marginTop:'100px'}}><h2>Binghatti <span style={{color:'royalblue'}}>SKYRISE</span></h2></Row>
      <Row style={{marginTop:'70px'}}>
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
        <SwiperSlide className='slidercontainer'>
            <div> 
          <img loading='lazy' className='slidephotolastsection' src={img1} alt='show-Photo1'/>
          </div></SwiperSlide>

          <SwiperSlide className='slidercontainer'>
            <div> 
          
          <img loading='lazy' className='slidephotolastsection' src={img2} alt='show-Photo2'/>
          </div></SwiperSlide>


          <SwiperSlide className='slidercontainer'>
            <div> 
          
          <img loading='lazy' className='slidephotolastsection' src={img3} alt='show-Photo3'/>
          </div></SwiperSlide>
     




     
       
      </Swiper>
      </Row>
      </Zoom>
    </Container>
  )
}
