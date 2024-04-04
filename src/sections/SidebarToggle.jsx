import React, { useState } from "react";
import "../styles/SidebarToggle.css";
import titleIcon from "../Images/online.png";
import { MdContentCopy } from "react-icons/md";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const SidebarToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sidebar-toggle">
      {/* <header>
        <button id="sidebar-toggle" onClick={toggleSidebar}>
          Toggle sidebar
        </button>
      </header> */}
      <img
        src={titleIcon}
        alt="title"
        width={40}
        fill={20}
        className="side-icon"
      />
      <div className="sidebar">
        <button className="hamburger" onClick={() => setIsOpen(true)}>
          click
        </button>
        {isOpen ? (
          <ul className="sidebar-items">
            <li>
              <a href="/about">
                <MdContentCopy />
              </a>
            </li>
            <li>
              <a href="/services">
                <MdOutlineFeaturedPlayList />
              </a>
            </li>
            <li>
              <a href="/contact">
                <RiContactsLine />
              </a>
            </li>
            <Link to="/login" className="side-start-link">
              <div className="side-login">Login</div>
            </Link>
            <Link to="/register" className="side-start-link">
              <div className="side-register">Register</div>
            </Link>
            <IoMdClose onClick={() => setIsOpen(false)} color="red" />{" "}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default SidebarToggle;
