import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  const cur_year = new Date().getFullYear();

  return (
    <div className="row">
      <div className="footer-bg">
        <img src="logo_estirado_1080.png" className="footer-image" alt="Example of the result of our services"/>
        <div className="footer-content">
          <a href="https://www.instagram.com/thestarcleanupllc" target="_blank" rel="noreferrer"><InstagramIcon className="footer-rrss-icon instagram" /></a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FacebookIcon className="footer-rrss-icon facebook" /></a>
          <p className="copy">Copyright © {cur_year} Star Clean Up</p>
        </div>
      </div>
    </div>
  )
}

export default Footer