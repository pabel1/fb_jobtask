import React from "react";
import userIcon from "../../Assests/images/user (2).png";
import postImg from "../../Assests/images/sadek.jpeg";

import { RiEarthFill } from "react-icons/ri";
import { FaBookmark } from "react-icons/fa";
import { BsFlagFill, BsLink45Deg } from "react-icons/bs";
import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import {
  AiOutlineDown,
  AiOutlineLink,
  AiOutlineGif,
  AiFillHeart,
} from "react-icons/ai";

import { FaRegCommentAlt, FaShare, FaSmile, FaRegSmile } from "react-icons/fa";

import { FiSend } from "react-icons/fi";
const FeelingPost = () => {
  return (
    <div className=" bg-white mt-5 p-2 rounded-lg">
      <div className=" flex items-center gap-5 p-4 relative">
        <img className=" w-10 rounded-full " src={userIcon} alt="" />
        <div className="">
          <h2 className=" font-semibold text-zinc-700 flex items-center gap-4">
            Adnan Chowdhury{" "}
            <FaRegSmile className="  bg-yellow-400 rounded-full " />
            <span className=" text-xs text-[#5c5c5c] ">is feelling ok</span>
          </h2>

          <p className=" flex items-center gap-3 text-sm text-[#5C5C5C] mt-2">
            1 hours ago <RiEarthFill />
          </p>
        </div>
        <AiOutlineDown className=" absolute right-4 top-4 text-lg text-gray-700" />
        <div className=" absolute  top-12 left-[60%] bg-white rounded-lg shadow-lg p-3">
          <ul className=" space-y-3 text-[#5C5C5C] text-sm">
            <li>
              {" "}
              <a className=" flex items-center gap-3" href="/">
                <span>
                  <FaBookmark className=" text-sm " />
                </span>{" "}
                Saved Posts
              </a>
            </li>
            <li>
              {" "}
              <a className=" flex items-center gap-3" href="/">
                <BsFlagFill className=" text-sm " /> Report Post
              </a>
            </li>
            <li>
              {" "}
              <a className=" flex items-center gap-3" href="/">
                <GrEdit className=" text-sm " />
                Edit Post
              </a>
            </li>
            <li className=" border-b pb-2">
              {" "}
              <a className=" flex items-center gap-3" href="/">
                <MdDelete className=" text-sm " /> Delete Post
              </a>
            </li>
            <li>
              {" "}
              <a className=" flex items-center gap-3" href="/">
                <BsLink45Deg className=" text-sm " /> Open post in new Tab
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className=" p-3">Have a good day</p>
      {/* post */}
      <div className="text-[#5C5C5C] mb-14 ">
        <img src={postImg} alt="" />
      </div>

      <ul className=" flex items-center justify-around text-[#5C5C5C] w-[90%] p-3 bg-[#dddfe443] mx-auto">
        <li className=" flex items-center gap-3 text-red-600">
          <AiFillHeart className="text-2xl p-1 bg-red-600 text-white rounded-full" />{" "}
          Love
        </li>
        <li className=" flex items-center gap-3">
          <FaRegCommentAlt /> Comment{" "}
        </li>
        <li className=" flex items-center gap-3">
          <FaShare /> Share
        </li>
      </ul>
      <div className=" flex items-center gap-3 mt-4 p-2">
        <img className=" w-10 rounded-full " src={userIcon} alt="" />
        <FaSmile />
        <AiOutlineLink />
        <AiOutlineGif />
        <div className="bg-[#dddfe4]  p-2 rounded-3xl flex items-center">
          <input
            className=" bg-transparent w-full  border-none outline-none "
            type="text"
            placeholder="Write a Comment..."
          />
          <FiSend />
        </div>
      </div>
    </div>
  );
};

export default FeelingPost;
