import React from "react";
import Button from 'react-bootstrap/Button';

const Services = () => {
  return (
      <div className="home-services-bg row">
      <div className="services-content col-md-12 col-lg-6">
        <p>GROUT REPAIRS SERVICE</p>
        <h2 className="services-title">RE-GROUTING SERVICE</h2>
        <p className="services-pg">If you are in search of a professional re-grouting service for your bathroom or kitchen tiles, <span className="starcleanup">Start Clean Up</span> of Miami is at your service. We understand that over time, grout can become cracked or discolored, leading to a dull appearance in your tiles. Our team offers advanced equipment and techniques to bring your tiles back to life. By choosing our outstanding re-grouting service, you can benefit from preventing moisture damage, enhancing the appearance of your room, and preserving the longevity of your tiles. Whether you are a residential or commercial customer in Miami, we are here to assist you. Allow us to provide you with a superior service that will impress you with its exceptional quality.</p>
        <o><br></br></o>
        <Button className='main-button get-quote-button'>GET QUOTE</Button>
      </div>

      <div className="services-image col-md-12 col-lg-6">
        <div className="row home__goals-images-all-rows">
          <img src="before_after.webp" className="more__than-image" alt="Example of our goals"/>
        </div>
      </div>
    </div>
  )
}

export default Services