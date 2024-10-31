import React from 'react'
import dubai from '../images/Burj Khalifa.jpeg'
import dubai2 from '../images/Dubai sky.jpeg'
import dubai3 from '../images/dubai3.jpeg'

import { Container } from '@mui/material'
import Row from 'react-bootstrap/esm/Row'
import vedio from '../images/vedioghinati.mp4'
import Zoom from 'react-reveal/Zoom';


export const Imagereview = () => {
  
  return (
    <Container style={{marginTop:'70px',width:'100%',textAlign:'center'}} >
      <Zoom>
      <hr/>
      <Row className='d-flex justify-content-center w-100 '  >
       
       <div className='vcontainer' >
       <video autoPlay muted loop className='vedioshow'  >
          <source src={vedio} type="video/mp4"/>
        </video>
    
       </div>
       
    
      </Row>
    <Row style={{marginTop:'100px'}} className='w-100  d-flex justify-content-center'>
      <hr/>
    <img src={dubai} alt='Dubai' loading='lazy' className='photosshow mx-1'/>
    <img src={dubai2} alt='Dubai' loading='lazy' className='photosshow mx-1'/>
    <img src={dubai3} alt='Dubai' loading='lazy' className='photosshow mx-1'/>
<div style={{marginTop:'20px',width:'100%'}}>

    <hr/>
</div>
    </Row>
    </Zoom>
      </Container>
  )
}
