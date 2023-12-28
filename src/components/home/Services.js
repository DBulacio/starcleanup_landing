import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

const Services = () => {
  return (
    <div className="home-services-bg row">
      <div className="services-content col-md-6">
        <h2 className="services-title">OUR FLOOR CARE SERVICES</h2>
        <p className="services-pg"><span className="starcleanup">Star Clean Up</span> offers specialized range of services directed to high end residential and commercial facilities in need of a long term solution to keep their floors and textiles looking the best and expanding lifespan as much as possible by ensuring only the best procedures, equipment and diamond embedded pads are used in all and every restoration or maintenance job</p>
        <ul className="services-list">
          <li className="services-list-item">
            <a href="#"> Terrazzo Cleaning & Polishing</a>
          </li>
          <li className="services-list-item">
            <a href="#"> Grout Repairs & Re-grouting</a>
          </li>
          <li className="services-list-item">
            <a href="#"> Travertine Cleaning, Polishing and Sealing</a>
          </li>
          <li className="services-list-item">
            <a href="#"> Limestone Cleaning, Polishing and Sealing</a>
          </li>
          <li className="services-list-item">
            <a href="#"> Shower Restoration Services</a>
          </li>
          <li className="services-list-item">
            <a href="#"> Nano Ceramic Coatings</a>
          </li>
          <li className="services-list-item">
            <a href="#"> Commercial Carpet Cleaning</a>
          </li>
          <li className="services-list-item">
            <a href="#"> Commercial Upholstery Cleaning</a>
          </li>
        </ul>
        <Button className='main-button get-quote-button'>GET QUOTE</Button>
      </div>

      <div className="services-image col-md-6">
        <Carousel>
          {/* It would be nice to have the iamges be square to fit the text */}
          <Carousel.Item>
            <img src="carousel_1.jpeg"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src="carousel_2.jpeg"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src="carousel_3.jpeg"/>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}

export default Services