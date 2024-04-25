import React from "react";
import AdminSidebar from "./AdminSidebar";
import DashboardNavbar from "../sections/DashboardNavbar.jsx";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="grid grid-cols-[14%_86%] h-screen">
      <AdminSidebar />
      <div className="flex flex-col">
        <DashboardNavbar />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
