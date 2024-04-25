import React from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import AdminDashboard from "../Admin/AdminDashboard";
import VoterDashboard from "./VoterDashboard";

const Dashboard = () => {
  const { user } = useUserAuth();
  return (
    <div>
      {user ? (
        user.role === "admin" ? (
          <AdminDashboard />
        ) : (
          <VoterDashboard />
        )
      ) : (
        <p>No user logged in</p>
      )}

      {/* <Link to="/">Go home</Link>
      <Link to="/">Log Out</Link> */}
    </div>
  );
};

export default Dashboard;
