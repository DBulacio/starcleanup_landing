import React from "react";
import Button from 'react-bootstrap/Button';

const Readyto = () => {
  return (
    <div className="tailored-bg row">
      <div className="home__goals-images col-md-12 col-lg-6">
        <div className="row home__goals-images-all-rows">
          <img src="before_after_sealing.webp" className="more__than-image" alt="Example of our goals"/>
        </div>
      </div>

      <div className="home__goals-content col-md-12 col-lg-6">
        <h6 className="services-title">Ready to take your floors to the next level with our floor tile grout cleaning?</h6>
        <p className="home__goals-pg">Get in touch today and schedule an appointment to receive a complimentary consultation.</p>
        <o><br></br></o>
        <Button className='main-button get-quote-button'>Request a consultation</Button>
      </div>

    </div>
  )
}

export default Readyto