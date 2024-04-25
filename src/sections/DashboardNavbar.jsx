import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { useUserAuth } from "../context/UserAuthContext";
import profilePic from "../Images/faceshotNaz.jpeg";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaRegStar } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";

const DashboardNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUserAuth();
  return (
    <div className="bg-white h-24 w-full border border-y-slate-200 relative cursor-pointer flex">
      <GoSearch
        className="absolute top-10 left-14 hover:text-primary"
        size={20}
      />
      <input
        type="email"
        placeholder="search ..."
        className="bg-zinc-100 ml-10 mt-6 w-96 h-12 pl-14 border rounded-md border-neutral focus:ring-primary focus:border-primary"
      />
      <div className="flex absolute top-8 right-72 ">
        <IoNotificationsOutline className="mr-10 text-zinc-700" size={24} />

        <AiOutlineMessage className="mr-10 text-zinc-700" size={24} />
      </div>
      <div className=" absolute top-4 right-56 text-center">
        <p className="text-md text-zinc-600 font-medium tracking-wide w-10 ">
          {user.name}
        </p>
        <p className="text-xs text-primary font-medium tracking-wide ml-2">
          {user.role}
        </p>
      </div>
      <img
        src={profilePic}
        alt="profile"
        className="object-cover h-16 w-16 rounded-full absolute top-3 right-24"
      />
      {isOpen ? (
        <IoIosArrowUp
          size={20}
          className="absolute top-8 right-12 hover:text-primary"
          onClick={() => setIsOpen(false)}
        />
      ) : (
        <IoIosArrowDown
          size={20}
          className="absolute top-8 right-12 hover:text-primary"
          onClick={() => setIsOpen(true)}
        />
      )}

      {isOpen ? (
        <div className="z-40 bg-white shadow-lg absolute top-24 right-4 h-40 w-48">
          <ul className="ml-9 text-zinc-600 font-medium">
            <Link to="profile">
              <li className="flex mt-4  hover:text-primary">
                <CgProfile size={24} />
                <p className="ml-4 ">Profile</p>
              </li>
            </Link>

            <li className="flex mt-6  hover:text-primary">
              <FaRegStar size={24} />
              <p className="ml-4">Your Stars</p>
            </li>
            <li className="flex mt-6  hover:text-primary">
              <CiSettings size={24} />
              <p className="ml-4">settings</p>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default DashboardNavbar;
