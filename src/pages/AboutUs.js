import React from "react";
import Hero from '../components/aboutus/Hero';
import Slogan from '../components/aboutus/Slogan';
import Services from '../components/aboutus/Services';
import Goals from '../components/aboutus/Goals';
import Values from '../components/aboutus/Values';
import Contact from '../components/aboutus/Contact';

const AboutUs = () => {
  return (
    <div>
      <Hero />
      <Slogan />
      <Services />
      <Goals />
      <Values />
      <Contact />
    </div>
  )
}

export default AboutUs