import React from 'react'
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const Hero = () => {
  return (
    <div className='row home__hero'>
      <span>
        <Image className='home-bg' src="home_bg.jpg" alt="main background for homepage" fluid />
        <span className='home-text'>
          <p className='home-pg-1'>CARPET & FLOOR CLEANING</p>
          <h1 className='home-title'>STAR CLEAN UP</h1>
          <p className='home-pg-2'>PREMIUM FLOOR CARE SERVICES IN MIAMI-DADE - BROWARD AND PALM BEACH</p>
          <Button className='main-button'>CALL US TODAY XXX-XXX-XXXX</Button>
        </span>
      </span>
    </div>
  )
}

export default Hero