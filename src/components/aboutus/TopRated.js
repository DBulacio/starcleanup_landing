import React from "react";
import EnergySavingsLeafOutlinedIcon from '@mui/icons-material/EnergySavingsLeafOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';

const TopRated = () => {
  return (
    <div className="row">
      <div className="services__values-bg">
        <h2 className="home__values-title">A TOP RATED FLOOR CARE COMPANY</h2>
        <h2 className="home__values-title">IN MIAMI-DADE AND BROWARD</h2>

        <div className="home__values-content-container">
          <div className="home__values-content">
            <span className="home__values-icon-bg">
              <ConnectWithoutContactOutlinedIcon  style={{ fontSize: 50}}/>
            </span>
            <h3 className="home__values-content-title">Our Vision</h3>
            <p  className="home__values-content-pg">our vision at Executive Cleaners of Miami is to provide high quality floor care services at the right pricing no matter how big or small the challenge is.</p>
          </div>
          <div className="home__values-content">
            <span className="home__values-icon-bg">
              <HandshakeOutlinedIcon  style={{ fontSize: 50}}/>
            </span>
            <h3 className="home__values-content-title">Our Mission</h3>
            <p  className="home__values-content-pg">Our Mission is to make you smile every time you look at your serviced floors and turn you into a fan of us.</p>
          </div>
          <div className="home__values-content">
            <span className="home__values-icon-bg">
              <EnergySavingsLeafOutlinedIcon  style={{ fontSize: 50}}/>
            </span>
            <h3 className="home__values-content-title">Our Process</h3>
            <p  className="home__values-content-pg">After your first contact we asses the situation and condition of your floors and we proceed to advise you on the best approach and pricing.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopRated