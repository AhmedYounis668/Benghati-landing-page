import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Zoom from 'react-reveal/Zoom';

export const Headerr = () => {
  
  return (
    <Container >
      <Zoom>
         <Row className='d-flex justify-content-center ' style={{marginTop:'25px',textAlign:'center',color:'royalblue'}}>
        <Col className='col-12 col-md-4'><h1>Binghatti</h1>
        <h3>SKYRISE</h3>
        <h5>Busniess Buy</h5>
        </Col>


        <Col className='col-12 col-mt-4 col-md-8 '>
        <div style={{width:'100%'}} className='d-flex justify-content-center'>
        <FormControl sx={{ m: 1, width:'100%' ,textAlign:'center'}} size="small">
      <InputLabel id="demo-select-small-label">Unit Type</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value='Unit Type'
        label="Unit Type"
        style={{width:'100%'}}
      >
        
        <MenuItem value='Unit Type'>Unit Type</MenuItem>
        <MenuItem value='Studio Apartment'>1 Studio Apartment</MenuItem>
        <MenuItem value='1 Department Suite'>1 Department Suite</MenuItem>
        <MenuItem value='2 Department Suite'>2 Department Suite</MenuItem>
      </Select>
    </FormControl>

    
    <TextField
          id="standard-multiline-flexible"
          label="Full Name"
          multiline
          maxRows={4}
          variant="standard"
          style={{width:'100%'}}
        /> 
    
    </div>



    <div style={{width:'100%'}}>
        <div className='d-flex justify-content-center mx-1'>  
        <FormControl sx={{ m: 1, width:'100%' ,textAlign:'center'}} size="small">
      <InputLabel id="demo-select-small-label">Select Country</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value='Select Country'
        label="Select Country"
        style={{width:'100%'}}
      >
        
        <MenuItem value='Select Country'>Select Country</MenuItem>
        <MenuItem value='Studio Apartment'>1 Studio Apartment</MenuItem>
        <MenuItem value='1 Department Suite'>1 Department Suite</MenuItem>
        <MenuItem value='2 Department Suite'>2 Department Suite</MenuItem>
      </Select>
    </FormControl>


    <TextField
    style={{width:'100%'}}
          id="standard-number"
          label="Mobile Number"
          type="number"
          variant="standard"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />


    </div>

    <TextField
          id="standard-multiline-flexible-email"
          label="Email"
          multiline
          maxRows={4}
          variant="standard"
          style={{width:'100%',marginLeft:'2px'}}
          type='email'
        />
    
    </div>
    </Col>
  

<div style={{width:'100%',textAlign:'center',marginTop:'15px'}}>
       <Button style={{width:'70%'}} variant="contained" endIcon={<SendIcon />}>
       
  Send
</Button>
</div>

<div style={{marginTop:'85px',color:'black'}}>
<Zoom>

Let life expand around you
A fleeting mirage of brilliance, it whispers of a sanctuary for the soul—an ethereal retreat for those who seek something more profound. As it seamlessly entwines with the skyline, Skyrise is not merely a structure but a manifestation of perfection—a quiet ode to the infinite, where the city’s pulse and serenity converge in an ever-elusive balance.
</Zoom>

</div>
      </Row>
      </Zoom>
    </Container>
  )
}
