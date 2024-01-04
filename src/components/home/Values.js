import React from "react";
import EnergySavingsLeafOutlinedIcon from '@mui/icons-material/EnergySavingsLeafOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';

const Values = () => {
  return (
    <div className="home__values-bg">
      <p className="home__values-pg">WHAT MAKES US DIFFERENT FROM ANY OTHER FLOOR CARE COMPANY IN MIAMI - FLORIDA</p>
      <h2 className="home__values-title">THE PRINCIPLES GUIDING OUR FLOOR MAINTENANCE BUSINESS</h2>

      <div className="home__values-content-container">
        <div className="home__values-content">
          <span className="home__values-icon-bg">
            <ConnectWithoutContactOutlinedIcon  style={{ fontSize: 50}}/>
          </span>
          <h3 className="home__values-content-title">Comprehensive Solutions</h3>
          <p  className="home__values-content-pg">Our dedicated team of experts provides unmatched carpet cleaning and floor maintenance services. Our goal is to cater to the specific needs and budgets of our clients, delivering tailored cleaning solutions. Trust our highly skilled professionals to handle your carpets and floors with expertise and care.</p>
        </div>
        <div className="home__values-content">
          <span className="home__values-icon-bg">
            <HandshakeOutlinedIcon  style={{ fontSize: 50}}/>
          </span>
          <h3 className="home__values-content-title">Integrity & trust</h3>
          <p  className="home__values-content-pg">Integrity is our guiding principle, and we stand behind every project with a solid guarantee. Earning the trust of our clients is essential, so we strive to deliver high-quality results and exceptional customer service. Partnering with us means you can rely on our commitment to excellence and our dedication to exceeding your expectations.</p>
        </div>
        <div className="home__values-content">
          <span className="home__values-icon-bg">
            <EnergySavingsLeafOutlinedIcon  style={{ fontSize: 50}}/>
          </span>
          <h3 className="home__values-content-title">Eco Friendly Solutions</h3>
          <p  className="home__values-content-pg">Protecting the health of family, employees, and pets is paramount. Star Clean Up places high value on the well-being of our technicians and utilizes Green Solutions for carpet cleaning. By choosing environmentally friendly methods, we minimize exposure to harmful chemicals. Our focus is to deliver superior cleaning services while prioritizing the health and safety of everyone involved.</p>
        </div>
      </div>
    </div>
  )
}

export default Values