import React from "react";
import { BiSearch } from 'react-icons/bi';
import userIcon from "../Assests/images/user (2).png";
import userImg from "../Assests/images/Ellipse 1.png";

const RightSideBar = () => {
  return (
    <div className="w-[22%]  ">
      <div className="w-[100%] bg-white p-5 rounded-md space-y-6 mb-3">
        <h1 className=" text-lg font-medium pb-5 border-b">You Might Like</h1>
        <div className=" flex items-center gap-3 pb-4 text-[#5C5C5C]">
          <img className=" w-10 rounded-full " s src={userIcon} alt="" />
          <p className=" text-sm ">Sadek Ahmed</p>

          {/* <div className=" p-1 border rounded-md ml-2">
            <a href="/">Add +</a>
          </div> */}
        </div>
        <button className=" py-2 text-sm px-8 border rounded-md ml-2 text-[#5C5C5C]">
          Ignore
        </button>
        <button className=" py-2 text-sm px-8 border rounded-md ml-2 bg-red-600 text-white">
          Follow
        </button>
      </div>
      <div className="w-[100%] bg-white p-5 rounded-md space-y-6 mb-3">
        <h1 className=" text-lg font-medium pb-3 ">Your Friends </h1>
        <div className=" mr-20 flex items-center  gap-1 bg-[#dddfe4] rounded-3xl p-1 w-[100%] ">
          <BiSearch className=" text-base" />
          <input
            className=" bg-transparent border-none outline-none "
            type="text"
            placeholder="Search"
          />
        </div>
        <div className=" flex items-center gap-3 pb-4 text-[#5C5C5C]">
          <img className=" w-10 rounded-full " s src={userIcon} alt="" />
          <p className=" text-sm ">Sadek Ahmed</p>
        </div>
        <div className=" flex items-center gap-3 pb-4 text-[#5C5C5C]">
          <img className=" w-8  rounded-full ring-1" src={userImg} alt="" />
          <p className=" text-sm ">Sadek Ahmed</p>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
