import React from "react";
import Navbar from "./Navbar";
import "../styles/LandingPage.css";

import HeroSection from "./HeroSection";
import About from "./About";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
    </div>
  );
};

export default LandingPage;
