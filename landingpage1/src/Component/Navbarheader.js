import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';
import { NavbarHook } from '../Hooks/NavbarHook';
import SearchIcon from '@mui/icons-material/Search';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export const Navbarheader = () => {


    const[show,open,handleClose,handleShow,handleClickOpen,handleCloseopen]=NavbarHook();


  return (
         <Navbar expand="lg" className=" navbarstyle" id='nav1'>
          

          {/* open search */}
          <Dialog
        open={open}
         TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseopen}
        aria-describedby="alert-dialog-slide-description"
        style={{width:'100%'}}
      >
        <DialogTitle>{"Search About Anything Here...."}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          <TextField   style={{width:'100%'}} id="standard-basic" label="Search" variant="standard" />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseopen}>Search</Button>
          <Button onClick={handleCloseopen}>Close</Button>
        </DialogActions>
      </Dialog>





          {/* nav collapps */}
          <Offcanvas id="offcanvasslide" className='collapssnav' show={show} onHide={handleClose}>
        <Offcanvas.Header style={{marginTop:'55px'}} className='d-flex justify-content-between'>
          <Offcanvas.Title style={{color:'royalblue'}}>Binghatti</Offcanvas.Title>
          <Offcanvas.Title style={{color:'royalblue'}} className='navclosebutton' onClick={handleClose}>X</Offcanvas.Title>

        </Offcanvas.Header>
        <Offcanvas.Body>
            <Nav.Link className='collappsbutton' href="#action1">Home</Nav.Link>
            <Nav.Link className='collappsbutton' href="#action2">The Brand</Nav.Link>
            <Nav.Link className='collappsbutton' href="#action2">Brand Collection</Nav.Link>
            <Nav.Link className='collappsbutton' href="#action2">Branded Collections</Nav.Link>
            <Nav.Link className='collappsbutton' href="#action2">Branded Collections</Nav.Link>
            <Nav.Link className='collappsbutton' href="#action2">Collections</Nav.Link>
            <Nav.Link className='collappsbutton' href="#action2">New Relases</Nav.Link>
            <Nav.Link className='collappsbutton' href="#action2">Search Properties</Nav.Link>
            <Nav.Link className='collappsbutton' href="#action2">New & media</Nav.Link> 
        </Offcanvas.Body>
      </Offcanvas>


      <Container >
        <Navbar.Brand href="/"><img loading='lazy' className='logo' src={logo} alt='logo'/></Navbar.Brand>
       
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
         
     

           
          </Nav>
          
         <div className='d-flex justify-content-center'>

            <Button onClick={handleClickOpen} variant="outline-success" className='navbtn mx-2 '><div className='icon-search'><SearchIcon/></div></Button>
            <Button onClick={handleShow} variant="outline-success" className='navbtn'>||||</Button>

         </div>
      </Container>
    </Navbar>
  )
}
