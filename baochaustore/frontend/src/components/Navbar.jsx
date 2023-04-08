import React from "react";
import "../styles/navbar.css";
import facebookIcon from "../assets/images/facebook.png";
import instagramIcon from "../assets/images/instagram.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="n-container">
      <div className="n-row">
        <div className="n-col">
          <span className="n-location">
            <i className="fa-solid fa-location-dot"></i>
            Tứ Hiệp ,Thanh Trì ,Hà Nội
          </span>
          <span className="n-phone">
            <i className="fa-solid fa-phone"></i>
            +0329621710
          </span>
        </div>
        <div className="n-col">
          <div className="socials">
            <a href="/">
              <img src={facebookIcon} alt="facebook" />
            </a>
            <a href="/">
              <img src={instagramIcon} alt="instagram" />
            </a>
            <span className="user">
              {" "}
              <i className="fa-solid fa-user"></i>chau
            </span>
          </div>
        </div>
      </div>
      <div className="n-row">
        <div className="n-col">
          <a href="/">
            <h1 className="logo">BAOCHAU STORE</h1>
          </a>
        </div>
        <div className="n-col">
          <div className="icons">
            <a href="/login">
              <span>
                <i className="fa-solid fa-arrow-right-to-bracket"></i>
                <span className="text-login">Đăng nhập</span>
              </span>
            </a>
            <a href="/wish">
              <span>
                <i className="fa-solid fa-heart"></i>
                <span className="totalItems">0</span>
              </span>
            </a>
            <a href="/cart">
              <span>
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="totalItems"> 0</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="n-row">
        <nav className="nav">
          <ul className="items">
            <li className="list">
              <NavLink to="/" activeclassname="active">
                Trang trủ
              </NavLink>
            </li>
            <li className="list">
              <NavLink to="/shop" activeclassname="active">
                Cửa hàng
              </NavLink>
            </li>
            <li className="list">
              <NavLink to="/about" activeclassname="active">
                Về tôi
              </NavLink>
            </li>
            <li className="list">
              <NavLink to="/contact" activeclassname="active">
                Liên hệ
              </NavLink>
            </li>
          </ul>
          <button className="btn">BTN</button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
