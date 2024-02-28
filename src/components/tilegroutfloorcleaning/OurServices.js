import React from "react";

const OurServices = () => {
  return (
    <div className="our__services-bg row">
      <div className="home__goals-content col-md-12 col-lg-6">
        <h3 className="our__services-title"><strong>OUR FLOOR CARE SERVICES</strong></h3>
        <p className="our__services-pg"><span className="starcleanup">Start Clean Up</span> of Miami offers specialized range of services directed to high end residential and commercial facilities in need of a long term solution to keep their floors and textiles looking the best and expanding lifespan as much as possible by ensuring only the best procedures, equipment and diamond embedded pads are used in all and every restoration or maintenance job.</p>
        <ul className="services-list">
          <li className="our_services-list-item">
            Terrazzo Cleaning, Polishing and Sealing
          </li>
          <li className="our_services-list-item">
            Grout Repairs & Re-grouting
          </li>
          <li className="our_services-list-item">
            Travertine Cleaning, Polishing and Sealing
          </li>
          <li className="our_services-list-item">
            Limestone Cleaning, Polishing and Sealing
          </li>
          <li className="our_services-list-item">
            Marble Restoration, Polishing and Sealing
          </li>
          <li className="our_services-list-item">
            Limestone Cleaning and Polishing
          </li>
          <li className="our_services-list-item">
            Nano Ceramic Coatings
          </li>
          <li className="our_services-list-item">
            Commercial Carpet Cleaning
          </li>
          <li className="our_services-list-item">
            Commercial Upholsttery Cleaning
          </li>
          <li className="our_services-list-item">
            Shower Restoration Services
          </li>
        </ul>
      </div>

      <div className="home__goals-images col-md-12 col-lg-6">
        <div className="row home__goals-images-all-rows">
          <img src="travertine-sealing.jpg" className="home__goals-image" alt="Save your money"/>
        </div>
      </div>
    </div>
  )
}

export default OurServices