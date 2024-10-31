import { Container } from '@mui/material'
import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import { Typewriter } from 'react-simple-typewriter'
import { Contactbuttons } from './Contactbuttons'
import Zoom from 'react-reveal/Zoom';

export const MeetUs = () => {
  return (
    <Container style={{marginTop:'60px'}}>
        <Zoom>
 <Row className='d-flex justify-content-center' style={{textAlign:'center'}}>
        <Col   style={{textAlign:'center'}} xs={6}>

       
          <h1 className=' w-100' style={{color:'black',textAlign:'center'}} >
            <Typewriter
            words={['Meet us']}
            loop={1}
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={1000}
            cursorBlinking={false}
          /></h1>

<h1 className=' w-100' style={{color:'royalblue'}} >
            <Typewriter
            words={[ 'virtually']}
            loop={1}
            
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={1000}
            cursorBlinking={false}
          /></h1>


<h1 className=' w-100' style={{color:'royalblue'}} >
            <Typewriter
            words={['today.']}
            loop={1}
            
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={1000}
            cursorBlinking={false}
          /></h1>
       

</Col>
        <Col  xs={6} style={{width:'100%'}}>
        <h1>Schedule an online
        session today.</h1>

        <div   className="btnunique" href="#">Click To Meet</div>
        </Col>
      </Row>
      <div style={{marginTop:'90px'}}>
<hr/>
</div>
      </Zoom>
      <Contactbuttons/>

    </Container>
  )
}
