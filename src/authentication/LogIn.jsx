import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div>
      {" "}
      the LogIn page
      <Link to="/dashboard">Click to get in</Link>
    </div>
  );
};

export default LogIn;
