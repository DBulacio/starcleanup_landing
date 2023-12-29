import React from "react";

const Goals = () => {
  return (
    <div className="home__goals-bg row">
      <div className="home__goals-content col-md-12 col-lg-6">
        <h3 className="home__goals-title">AT <span className="starcleanup">STAR CLEAN UP</span>, OUR GOAL IS TO BE THE TOP FLOOR CLEANING COMPANY YOU'VE EVER TRUSTED FOR YOUR HOME OR BUSINESS.</h3>
        <p className="home__goals-pg">We take pride in crafting a remarkable experience for our clients by delivering outstanding service, professionalism, and technical expertise. We prioritize specialization. Our highly trained teams excel in their specific service areas, providing exceptional care for each task they undertake. When working with us, you can expect skilled professionals ensuring a perfectly executed job.</p>
        <p className="home__goals-pg">We recognize the growing demand for environmentally friendly cleaning practices. We are proud to offer organic cleaning options for our clients who prefer a more sustainable approach.</p>
        <p className="home__goals-pg">Our commitment extends to the equipment we use. Rest assured, we equip our teams with the finest machines, tools, and supplies for every task. This unwavering dedication guarantees unmatched quality and results.</p>
        <p className="home__goals-pg">Explore our services and reach out with any inquiries. We eagerly anticipate surpassing your expectations and delivering exceptional service beyond compare!</p>
      </div>

      <div className="home__goals-images col-md-12 col-lg-6">
        <div className="row home__goals-images-all-rows">
          <img src="goals_1.webp" className="home__goals-image" alt="Example of our goals"/>
          <img src="goals_2.webp" className="home__goals-image" alt="Example of our goals"/>
        </div>
        <div className="row home__goals-images-all-rows home__goals-images-second-row">
          <img src="goals_3.webp" className="home__goals-image" alt="Example of our goals"/>
          <img src="goals_4.webp" className="home__goals-image" alt="Example of our goals"/>
        </div>
      </div>
    </div>
  )
}

export default Goals