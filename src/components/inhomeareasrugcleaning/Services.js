import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

const Services = () => {
  return (
      <div className="home-services-bg row">
      <div className="services-content col-md-12 col-lg-6">
        <h2 className="services-title">OUR FLOOR CARE SERVICES</h2>
        <p className="services-pg"><span className="starcleanup">Star Clean Up</span> offers specialized range of services directed to high end residential and commercial facilities in need of a long term solution to keep their floors and textiles looking the best and expanding lifespan as much as possible by ensuring only the best procedures, equipment and diamond embedded pads are used in all and every restoration or maintenance job</p>
        <ul className="services-list">
          <li className="services-list-item">
            <a href="/"> Carpet Cleaning</a>
          </li>
          <li className="services-list-item">
            <a href="/"> Upholstery Cleaning</a>
          </li>
          <li className="services-list-item">
            <a href="/"> Leather Cleaning</a>
          </li>
          <li className="services-list-item">
            <a href="/"> Tile & Grout Floor Cleaning</a>
          </li>
          <li className="services-list-item">
            <a href="/"> Hardwood Floor Cleaning</a>
          </li>
          <li className="services-list-item">
            <a href="/"> In-home Areas Rug Cleaning</a>
          </li>
          <li className="services-list-item">
            <a href="/"> Stone Cleaning</a>
          </li>
        </ul>
        <Button className='main-button get-quote-button'>GET QUOTE</Button>
      </div>

      <div className="services-image col-md-12 col-lg-6">
        <Carousel>
          {/* It would be nice to have the iamges be square to fit the text */}
          <Carousel.Item>
            <img src="carousel_1.jpeg" alt="Example of the result of our services"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src="carousel_2.jpeg" alt="Example of the result of our services"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src="carousel_3.jpeg" alt="Example of the result of our services"/>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}

export default Services