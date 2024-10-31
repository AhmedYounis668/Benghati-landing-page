import React from 'react'
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
export const Contactbuttons = () => {
  return (
    <div className='contactbotton mx-2'>
        <Fab color="secondary" aria-label="whatsapp" className='animation'>
   <a style={{color:'white',textDecoration:'none'}} href="https://web.whatsapp.com/201112134836" target="_blank" rel="noreferrer">   <WhatsAppIcon />
   </a>

  
</Fab>

<Fab color="secondary" aria-label="Phone" className='mx-2'>
  <a style={{color:'white',textDecoration:'none'}}   href="tel:+201112134836"target="_blank" rel="noreferrer">     <PhoneIcon /> </a>


</Fab>
    </div>
  )
}
