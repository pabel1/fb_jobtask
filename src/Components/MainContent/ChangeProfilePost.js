import React, { useContext } from "react";
// import userIcon from "../../Assests/images/Ellipse 1.png";
// import postImg from "../../Assests/images/sadek.jpeg";

import { RiEarthFill } from "react-icons/ri";
import {
  AiOutlineDown,
  AiOutlineLink,
  AiOutlineGif,
  //   AiFillHeart,
} from "react-icons/ai";

import { FaRegCommentAlt, FaShare, FaSmile } from "react-icons/fa";

import { FiSend } from "react-icons/fi";
import { DataContext } from "../useContext";
const SamePost = () => {
  const [data] = useContext(DataContext);
  console.log(data);

  return (
    <>
      {data.map((item, i) => {
        return (
          <div className=" bg-white mt-5 p-2 rounded-lg" key={i}>
            <div className=" flex items-center gap-5 p-4 relative">
              <img className=" w-10 h-10 rounded-full " src={item.userIcon} alt="" />
              <div className="">
                <h2 className=" font-semibold text-zinc-700 flex items-center gap-4">
                  {item.name}{" "}
                  <span className=" text-xs text-[#5c5c5c] ">
                    {item.activity}
                  </span>
                </h2>

                <p className=" flex items-center gap-3 text-sm text-[#5C5C5C] mt-2">
                  {item.updatedTime} <RiEarthFill />
                </p>
              </div>
              <AiOutlineDown className=" absolute right-4 top-4 text-lg text-gray-700" />
            </div>
            <p className=" p-3">{item.postDesc}</p>
            {/* post */}
            <div className="text-[#5C5C5C] mb-14 ">
              <img className=" " src={item.postImg} alt="" />
            </div>
            <div className=" flex items-center justify-between px-2 pb-2">
              <span className=" flex items-center gap-3">
                {
                  <item.reactIcon className="text-2xl p-1 bg-red-600 text-white rounded-full" />
                }
                {item.reactCount}
              </span>

              <p>{item.countComment}</p>
            </div>

            <ul className=" flex items-center justify-around text-[#5C5C5C] w-[90%] p-3 bg-[#dddfe443] mx-auto">
              <li className=" flex items-center gap-3 text-red-600">
                {
                  <item.reactIcon className="text-2xl p-1 bg-red-600 text-white rounded-full" />
                }{" "}
                {item.react}
              </li>
              <li className=" flex items-center gap-3">
                <FaRegCommentAlt /> Comment{" "}
              </li>
              <li className=" flex items-center gap-3">
                <FaShare /> Share
              </li>
            </ul>
            <div className=" flex items-center gap-3 mt-4 p-2">
              <img className=" w-10 h-10 rounded-full " src={item.userIcon} alt="" />
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
      })}
    </>
  );
};

export default SamePost;
