import React from "react";
import "./Footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import {FaInstagram } from "react-icons/fa";
import {FaWhatsapp} from "react-icons/fa";
import {FaTwitterSquare} from "react-icons/fa";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <p className="logo-footer">Seek out</p>
          <p className="caption-footer">Choose Your Favourite Destination</p>
        </div>
        <div className="footer-social-media">
           
            <FaFacebookSquare className="icons"/>
            <FaInstagram className="icons"/>
            <FaWhatsapp className="icons"/>
            <FaTwitterSquare className="icons"/>
         
        </div>
      </div>
      <di v className="footer-bottom">
        <div className="footer-bottom-sub">
         
          <p className="footer-sub-heading">Project</p>
          <div className="text">
            <p>Changelog</p>
            <p>Status</p>
            <p>License</p>
            <p>All Versions</p>
          </div>
        </div>
        <div className="footer-bottom-sub">
         
          <p className="footer-sub-heading">Community</p>
          <div className="text">
            <p>GitHub</p>
            <p>Issues</p>
            <p>Project</p>
            <p>Twitter</p>
          </div>
        </div>
        <div className="footer-bottom-sub">
          
          <p className="footer-sub-heading">Help</p>
          <div className="text">
            <p>Support</p>
            <p>Troubleshooting</p>
            <p>Contact Us</p>
           
          </div>
        </div>
        <div className="footer-bottom-sub">
        
          <p className="footer-sub-heading">Others</p>
          <div className="text">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>License</p>
            
          </div>
        </div>
      </di>
      </div>
  );
}

export default Footer;
