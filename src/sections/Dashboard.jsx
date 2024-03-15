import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <p>The dashboard page</p>
      <Link to="/">Go home</Link>
      <Link to="/">Log Out</Link>
    </div>
  );
};

export default Dashboard;
