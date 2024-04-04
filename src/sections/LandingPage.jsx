import React from "react";
import Navbar from "./Navbar";
import "../styles/LandingPage.css";
import HeroSection from "./HeroSection";
import About from "./About";
import SidebarToggle from "./SidebarToggle";

const LandingPage = () => {
  return (
    <div className="content">
      <SidebarToggle />
      <Navbar />
      <HeroSection />
      <About />
    </div>
  );
};

export default LandingPage;
