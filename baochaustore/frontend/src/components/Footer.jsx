import React from "react";
import "../styles/footer.css";
import { NavLink } from "react-router-dom";
import facebookIcon from "../assets/images/facebook.png";
import instagramIcon from "../assets/images/instagram.png";

const Footer = () => {
  return (
    <div className="f-container">
      <div className="f-row">
        <div className="f-col">
          <h1 className="logo">BAOCHAU STORE</h1>
          <p>
            Loren ipsum dolor sit amet, consectetur adipiscing elit ,Excepturi ,
            nesciunt !, ipsum dolor sit amet, consectetur adipiscing elit
            ,Excepturi , nesciunt !
          </p>
        </div>
        <div className="f-col">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="f-col">
          <h2>Category</h2>
          <ul>
            <li>
              <NavLink to="/">Men</NavLink>
            </li>
            <li>
              <NavLink to="/">Women</NavLink>
            </li>
            <li>
              <NavLink to="/">Kids</NavLink>
            </li>
          </ul>
        </div>
        <div className="f-col">
            <h2>Stay in touch with us</h2>
          <div className="socials">
            <a href="/">
              <img src={facebookIcon} alt="facebook" />
            </a>
            <a href="/">
              <img src={instagramIcon} alt="instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="f-coppyrow">
        <p>&copy; 2022. All Rights Reserved. Fowered by Cikey Chính</p>
      </div>
    </div>
  );
};

export default Footer;
