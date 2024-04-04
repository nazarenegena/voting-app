import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import titleIcon from "../Images/online.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img
        src={titleIcon}
        alt="title"
        width={60}
        fill={40}
        className="title-icon"
      />

      <div className="mid-navbar">
        <a href="#about" className="about">
          About
        </a>
        <a href="#features" className="features">
          Features
        </a>

        <a href="#contact" className="contact">
          Contact Us
        </a>
      </div>

      <div className="auth-navbar">
        <Link to="/login" className="start-link">
          <div className="login">Login</div>
        </Link>
        <Link to="/register" className="start-link">
          <div className="register">Register</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
