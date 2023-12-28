import React from 'react'
import Hero from '../components/home/Hero';
import Slogan from '../components/home/Slogan';
import Services from '../components/home/Services';
import Goals from '../components/home/Goals';
import Values from '../components/home/Values';
import Contact from '../components/home/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Slogan />
      <Services />
      <Goals />
      <Values />
      <Contact />
    </>
  )
}

export default HomePage