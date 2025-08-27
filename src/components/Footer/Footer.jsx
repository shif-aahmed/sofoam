import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Left Section */}
        <div className="footer-left">
          <h1 className="footer-logo">
            <span className="footer-logo-highlight">logo</span>
          </h1>
          <p>Cavalry Ground, Lahore, Pakistan 54660</p>
          <p>care@alfadecor.pk</p>
          <p>+92 331 6227699</p>
        </div>

        {/* Center Section */}
        <div className="footer-center">
          <ul className="footer-links">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Compare</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h4>Follow Us</h4>
          <div className="footer-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© ALFA DECOR 2020</p>
        <div className="footer-policies">
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Refund Policy</a>
          <span>|</span>
          <a href="#">Shipping Policy</a>
          <span>|</span>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
