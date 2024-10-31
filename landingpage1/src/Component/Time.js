import { Container } from '@mui/material'
import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Zoom from 'react-reveal/Zoom';

export const Time = () => {
  return (
    <Container style={{marginTop:'60px'}}>
      <Zoom>
         <Row className='d-flex justify-content-center flex-wrap' style={{textAlign:'center'}}>
        <Col xs={6} md={4} className='col-w-100 col-12 col-md-4 muints' >
       <h5>3 MINUTES</h5>  
       <h5>FROM</h5> 
       <h5>Burj Khalifa</h5> 
       </Col>
        <Col xs={6} md={4} className=' col-w-100 col-12 col-md-4 muints'>
        <h5>3 MINUTES</h5>  
       <h5>FROM</h5> 
       <h5>Dubai Mall</h5> 
       </Col>
        <Col xs={6} md={4} className='col-w-100 col-12 col-md-4 ' style={{color:'royalblue'}}>
        <h5>5 MINUTES From</h5>  
       <h5>Business Bay</h5> 
       <h5>Marina</h5> 

        </Col>
      </Row>
      </Zoom>
      <Zoom>
      <div  style={{marginTop:'50px',textAlign:'center',width:'100%'}}>
        <div className='w-100' style={{fontWeight:'bold',fontSize:'25px'}}>Get the <span style={{color:'royalblue'}}>best prices now!</span></div>
        <div  className="btnunique" href="#">INQUIRE HERE</div>

      </div>
      </Zoom>
    </Container>
  )
}
