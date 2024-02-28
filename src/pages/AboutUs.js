import React from "react";
import Hero from '../components/aboutus/Hero';
import Whoweare from '../components/aboutus/Whoweare';
import TopRated from '../components/aboutus/TopRated';
import SaveMoney from '../components/aboutus/SaveMoney';
import OurServices from '../components/aboutus/OurServices';
import OurClients from '../components/aboutus/OurClients';
import Contact from '../components/aboutus/Contact';

const AboutUs = () => {
  return (
    <div>
      <Hero />
      <Whoweare />
      <TopRated />
      <SaveMoney />
      <OurServices />
      <OurClients />
      <Contact />
    </div>
  )
}

export default AboutUs