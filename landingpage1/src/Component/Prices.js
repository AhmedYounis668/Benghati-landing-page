import { Container } from '@mui/material'
import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Zoom from 'react-reveal/Zoom';

export const Prices = () => {
  return (
    <div style={{backgroundColor:'#F1E1E9'}}>
    <Container style={{textAlign:'center'}}>
        <Zoom>
         <Row className='  d-flex justify-content-center flex-wrap '  style={{marginTop:'65px'}}>
            <h2 className='d-flex justify-content-center my-4'>Apartment <span><h2 style={{color:'royalblue'}}>Price Range</h2></span></h2>
        <Col style={{border:'2px solid white',borderRadius:'5px',textAlign:'center',color:'royalblue'}} className='m-2'>
        <h3>STUDIO</h3>
       <h4> FROM</h4>
        <h2>AED 975,000</h2>
        </Col>
        <Col style={{border:'2px solid white',color:'royalblue',textAlign:'center',borderRadius:'5px'}} className='m-2'>
        <h3>1 BEDROOM</h3>
       <h4> FROM</h4>
        <h2>AED 1,650,000</h2>

        </Col>


        <Col style={{border:'2px solid white',borderRadius:'5px',textAlign:'center',color:'royalblue',width:'50%'}} className='m-2'>
        <h3>STUDIO</h3>
       <h4> FROM</h4>
        <h2>AED 975,000</h2>
        </Col>
        <Col style={{border:'2px solid white',color:'royalblue',textAlign:'center',borderRadius:'5px',width:'50%'}} className='m-2'>
        <h3>1 BEDROOM</h3>
       <h4> FROM</h4>
        <h2>AED 1,650,000</h2>

        </Col>
      </Row>
      </Zoom>
    </Container>
    </div>
  )
}
