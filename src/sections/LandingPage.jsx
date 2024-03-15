import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const LandingPage = () => {
  return (
    <div>
      <p>The Landing page</p>
      <Navbar />

      <Link to="/dashboard">The Dashboard</Link>
    </div>
  );
};

export default LandingPage;
