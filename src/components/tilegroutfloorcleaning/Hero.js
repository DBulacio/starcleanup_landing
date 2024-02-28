import React from 'react'
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const Hero = () => {
  return (
    <div className='row home__hero'>
      <span>
        <Image className='home-bg' src="tile_grout_bg.jpg" alt="main background for homepage" fluid />
        <span className='home-text'>
          <p className='home-pg-1'>STAR CLEAN UP</p>
          <h1 className='home-title'>TILE AND GROUT CLEANING IN MIAMI</h1>
          <p className='home-pg-2'>GROUT CLEANING, REPAIRS, RE-GROUTING AND SEALING</p>
          <Button className='main-button'>CALL US TODAY XXX-XXX-XXXX</Button>
        </span>
      </span>
    </div>
  )
}

export default Hero