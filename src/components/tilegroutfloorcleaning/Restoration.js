import React from "react";
import Button from 'react-bootstrap/Button';

const Restoration = () => {
  return (
    <div className="tailored-bg row">
      <div className="home__goals-images col-md-12 col-lg-6">
        <div className="row home__goals-images-all-rows">
          <img src="before_after_sealing.webp" className="more__than-image" alt="Example of our goals"/>
        </div>
      </div>

      <div className="home__goals-content col-md-12 col-lg-6">
        <p>Grout lines getting darker and stained?</p>
        <h6 className="services-title">GROUT SEALING AND COLOR RESTORATION</h6>
        <p className="home__goals-pg">Our Miami-based company, <span className="starcleanup">Start Clean Up</span>, specializes in grout restoration and color sealing services. Over time, grout can lose its original appearance, becoming stained and discolored, which can be frustrating to deal with. However, our skilled technicians can resolve this issue with a range of solutions, from restoring your grout to its former glory to changing the color to suit your preference. Our team is composed of experienced professionals who use only the highest-quality products and techniques, resulting in long-lasting and effective outcomes. We take great pride in delivering exceptional customer service and workmanship, making your satisfaction our top priority. Rely on us to breathe new life into your floors, enhancing the overall appearance of your residential or commercial property. Get in touch with us today to schedule a consultation.</p>
        <o><br></br></o>
        <Button className='main-button get-quote-button'>GET QUOTE</Button>
      </div>

    </div>
  )
}

export default Restoration