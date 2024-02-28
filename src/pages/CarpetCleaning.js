import React from "react";
import Hero from '../components/carpetcleaning/Hero';
import Slogan from '../components/carpetcleaning/Slogan';
import Services from '../components/carpetcleaning/Services';
import Goals from '../components/carpetcleaning/Goals';
import Values from '../components/carpetcleaning/Values';
import Contact from '../components/carpetcleaning/Contact';

const CarpetCleaning = () => {
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

export default CarpetCleaning