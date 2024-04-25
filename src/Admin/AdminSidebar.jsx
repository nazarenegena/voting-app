import React from "react";
import { Link, useLocation } from "react-router-dom";
import titleIcon from "../Images/online.png";
import { MdOutlineDashboard } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { MdOutlineCategory } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
import { TbReportAnalytics } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";

const nav = [
  {
    link: "content",
    title: "dashboard",
    icon: <MdOutlineDashboard />,
  },
  {
    link: "adminCategories",
    title: "Categories",
    icon: <MdOutlineCategory />,
  },
  {
    link: "calender",
    title: "Calender",
    icon: <SlCalender />,
  },
  {
    link: "adminAnalysis",
    title: "Analysis",
    icon: <SiGoogleanalytics />,
  },
  {
    link: "adminResults",
    title: "Results",
    icon: <TbReportAnalytics />,
  },
  {
    link: "profile",
    title: "Profile",
    icon: <CgProfile />,
  },
];

const SidebarItem = ({ className, to, title, icon }) => {
  return (
    <Link
      to={to}
      className={`${className} hover:text-primary text-dull font-medium hover:rounded-md text-lg px-5 py-5  mx-0 my-10 cursor-pointer flex flex-row transition ease-in-out delay-150 duration-300 items-center rounded-md `}
    >
      <span className="mr-6">{icon}</span>
      {title}
    </Link>
  );
};

const AdminSidebar = () => {
  const location = useLocation();
  return (
    <div className="bg-white px-6 border border-slate-200">
      <Link to="/" className="flex mt-6 align-middle">
        <img src={titleIcon} alt="title" width={55} fill={40} />{" "}
        <p className="mt-4 ml-2 text-zinc-700">VoteSphere</p>
      </Link>

      <div className="mt-20">
        {nav.map((navItem, index) => {
          console.log("Location path:", location.pathname);
          return (
            <SidebarItem
              className={
                location.pathname.includes(`/${navItem.link}`)
                  ? "bg-primary hover:text-white text-slate-50"
                  : null
              }
              key={index}
              title={navItem.title}
              to={navItem.link}
              icon={navItem.icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AdminSidebar;
