import React from "react";
import "../App.css";
import facebook from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png";
import linkedin from "../assets/images/linkedin.png";
import pininterest from "../assets/images/pininterest.png";
import location from "../assets/images/location.png";
import phone from "../assets/images/phone.png";
import mail from "../assets/images/mail.png";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-link">
        <img className="f-logo" src={logo} width={70} height={45} alt="logo" />
        {/* information */}
        <div className="f-main">
          <h3>Main</h3>
          <p>Gallery</p>
          <p>Projects</p>
          <p>Certification</p>
          <p>Contacts </p>
        </div>
        {/* Contact */}
        <div className="f-contact">
          <h3>Contact</h3>
          <div className="fc-link">
            <img src={location} width={24} height={24} alt="location icon" />
            <p>1234 Sample Street Austin Texas 78704</p>
          </div>
          <div className="fc-link">
            <img src={phone} width={24} height={24} alt="phone icon" />
            <p>1234 Sample Street Austin Texas 78704</p>
          </div>
          <div className="fc-link">
            <img src={mail} width={24} height={24} alt="mail icon" />
            <p>1234 Sample Street Austin Texas 78704</p>
          </div>
        </div>
        {/* Social Media */}
        <div className="socials">
          <h3>Social Media</h3>
          <img src={facebook} width={18} alt="facebook logo" />
          <img src={twitter} width={30} alt="twitter logo" />
          <img src={linkedin} width={30} alt="linkedin logo" />
          <img src={pininterest} width={20} alt="pininterest logo" />
        </div>
      </div>
      <hr className="hr" />
      <p className="copyright">&copy; 2019 All Rights Reserved</p>
    </div>
  );
}

export default Footer;
