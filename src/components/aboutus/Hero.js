import React from 'react'
import Image from 'react-bootstrap/Image';

const Hero = () => {
  return (
    <div className='row home__hero'>
      <span>
        <Image className='home-bg' src="aboutus_bg.jpg" alt="main background for homepage" fluid />
        <span className='home-text'>
          <p className='home-pg-1'>CARPET & FLOOR CLEANING</p>
          <h1 className='home-title'>STAR CLEAN UP</h1>
          <p className='home-pg-2'>ABOUT OUR FLOOR CARE COMPANY</p>
        </span>
      </span>
    </div>
  )
}

export default Hero