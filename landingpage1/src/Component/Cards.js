import { Container } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import img1 from '../images/imgpage1.jpg'
import img2 from '../images/imgpage2.jpg'
import img3 from '../images/imgpage3.jpg'
import Zoom from 'react-reveal/Zoom';


export const Cards = () => {
  return (
    <Container>
        <Zoom>
        <div className='d-flex justify-content-center flex-wrap' style={{marginTop:'85px',color:'royalblue'}}>
        <Card sx={{ maxWidth: 345 }} className='mx-2'>
      <CardMedia
        sx={{ height: 140 }}
        image={img1}
        title="green iguana"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <h4>DESIGN</h4>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        A poetic embodiment of architecture’s finest form, where beauty becomes palpable and transcends mere structure. Its silhouette, a symphony of contrasts yet stands apart with an undeniable presence. The crystalline façade, a work of meticulous artistry, captures light like a rare gem, evoking both wonder and refinement. Every design detail is crafted to elevate the senses, offering an ethereal space where personal taste finds its most exquisite expression.
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>





    <Card sx={{ maxWidth: 345 }} className='mx-2'>
      <CardMedia
        sx={{ height: 140 }}
        image={img2}
        title="green iguana"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <h4>DETAILS</h4>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Step into a realm where vast windows frame the world beyond, and each interior detail is an ode to impeccable design. Every element, from the sleek exterior lines to the refined nuances within, highlights spaces that elevate the spirit. Feel the cool, refined embrace of polished tan leather against the organic warmth of natural Oak as the soft play of light and shadow casts an air of quiet sophistication. Crafted from the most distinguished materials, every finish whispers of luxury, creating a sanctuary that awakens the senses and stirs the soul.
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>



    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={img3}
        title="green iguana"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h4>DISTINCTION</h4>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        
     Nestled in the heart of Business Bay, Skyrise offers a collection of over 15 amenities designed to enrich daily life and inspire renewal. Immerse yourself in the serenity of the pool deck, where the shimmering city lights resemble distant stars scattered across the night. Reawaken your senses in the state-of-the-art fitness center, or find your flow on the private golf course, where every moment is a retreat into refinement. Skyrise is your sanctuary—a place to unwind, rejuvenate, and rediscover the solace that resides within.
        </Typography>
      </CardContent>
      <CardActions>
       
      </CardActions>
    </Card>
    </div>
    </Zoom>

        </Container>
  )
}
