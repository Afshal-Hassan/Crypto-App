import { Container, Typography } from '@mui/material'
import React from 'react'
import '../Banner/Banner.css'
import Carousel from './Carousel'
function Banner() {
  return (
    <div className='Banner'>
        <Container className='Banner-Content'>
            <div className='tagline'>
                <Typography variant='h2' style={{
                    fontWeight:"bold",
                    marginBottom:15,
                }} className="tagline-typo">Crypto Coin</Typography>
                 <Typography variant='subtitle2' style={{
                    color:"darkgray",
                    textTransform:"capitalize",

                }} className="tagline-typo">Get all the Info regarding your favourite coin</Typography>
            </div>
            <Carousel/>
        </Container>

    </div>
  )
}

export default Banner