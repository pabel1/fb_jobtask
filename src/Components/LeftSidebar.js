import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FiUser, FiUsers } from "react-icons/fi";
import { RiProfileLine, RiCalendarEventLine } from "react-icons/ri";
// import appleIcon from "../Assests/images/apple.png";
import googleIcon from "../Assests/images/googleplaycrop.png";
import userImg from "../Assests/images/Ellipse 1.png";
const LeftSidebar = () => {
  return (
    <div className="w-[22%]  ">
      <div className="w-[100%] bg-white p-5 rounded-md space-y-4 mb-3">
        <h1 className=" text-lg font-medium">Explore</h1>
        <ul className=" space-y-3 text-[#5C5C5C]">
          <li>
            {" "}
            <a className=" flex items-center gap-3" href="/">
              <span>
                <IoDocumentTextOutline className=" text-2xl " />
              </span>{" "}
              Saved Posts
            </a>
          </li>
          <li>
            {" "}
            <a className=" flex items-center gap-3" href="/">
              <FiUser className="" /> People
            </a>
          </li>
          <li>
            {" "}
            <a className=" flex items-center gap-3" href="/">
              <FiUsers className="" />
              Groups
            </a>
          </li>
          <li>
            {" "}
            <a className=" flex items-center gap-3" href="/">
              <RiProfileLine className="" /> Pages
            </a>
          </li>
          <li>
            {" "}
            <a className=" flex items-center gap-3" href="/">
              <RiCalendarEventLine className="" /> Events
            </a>
          </li>
        </ul>
      </div>
      <div className="w-[100%] bg-white p-5 rounded-md space-y-4 mb-3">
        <h1 className=" text-lg font-medium">Download App</h1>
        <ul className=" flex items-center  text-[#5C5C5C]">
          <li>
            {" "}
            <a className="" href="/">
              <img className="w-[100%]" src={googleIcon} alt="" />
            </a>
          </li>
          <li>
            <a href="/">
              <img className="" src={googleIcon} alt="" />
            </a>
          </li>
          <li> </li>
        </ul>
      </div>
      <div className="w-[100%] bg-white p-5 rounded-md space-y-4 mb-3">
        <h1 className=" text-lg font-medium">Suggested People</h1>
        <div className=" flex items-center text-[#5C5C5C] justify-between">
            <img className=" w-8  rounded-full ring-1" src={userImg} alt="" />
            <p className=" text-sm ">Sadek Ahmed</p>
            <div className=" p-1 border rounded-md ml-2">
                <a href="/">
                    Add +
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
