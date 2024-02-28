import React from "react";

const Goals = () => {
  return (
    <div className="home__goals-bg row">
      <div className="home__goals-content col-md-12 col-lg-6">
        <h3 className="home__goals-title">AT <span className="starcleanup">STAR CLEAN UP</span> WE AIM TO BE THE BEST FLOOR CLEANING COMPANY THAT YOU HAVE EVER INVITED TO YOUR HOME OR BUSINESS.</h3>
        <p className="home__goals-pg">We take pride in making sure our clients have the best possible experience by providing excellent service, professionalism and technical skill. As a family-owned South Florida business, we make it our mission to deliver award-winning professional home services, including carpet cleaning, upholstery cleaning, tile and grout cleaning, natural stone and terrazzo floors cleaning and polishing, travertine floors restoration, grout repairs, showers cleaning and more.</p>
        <p className="home__goals-pg">We understand the importance of specialization, which is why each of our teams is highly trained in their specific service areas and committed to providing the highest standard of care for every job they do. You can trust that when you work with us, you’re getting a team of skilled professionals ensuring the job is done right.</p>
        <p className="home__goals-pg">Our commitment to excellence extends beyond our employees to the equipment we use. Rest assured that we only use the best machines, tools, and supplies for every task, ensuring unmatched quality and unmatched results.</p>
        <p className="home__goals-pg">We invite you to explore our award-winning services and reach out if you have any questions. We’re excited to exceed your expectations and provide you with outstanding service!</p>
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