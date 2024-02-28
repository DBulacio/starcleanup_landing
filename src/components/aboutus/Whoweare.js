import React from "react";

const Whoweare = () => {
  return (
    <div className="home-services-bg row">

      <div className="services-content col-md-12 col-lg-6">
        <h2 className="services-title">WHO WE ARE</h2>
        <p className="services-pg"><span className="starcleanup">Star Clean Up</span> started as a residential cleaning company and after many years of serving our community we decided to expand our services into not only residential but also commercial floor care, restoration, carpet and upholstery cleaning services.</p>
      </div>
      <div className="home__goals-images col-md-12 col-lg-12">
          <div className="row home__goals-images-all-rows">
            <p><br></br></p>
            <img src="aboutus_services.jpg" className="services__whoare-image" alt="Our services"/>
          </div>
      </div>

    </div>
  )
}

export default Whoweare