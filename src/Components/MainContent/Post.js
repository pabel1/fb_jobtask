import React from "react";
import userIcon from "../../Assests/images/user (2).png";
import memeImg from "../../Assests/images/meme.jpeg";
import { RiEarthFill } from "react-icons/ri";
import { AiOutlineDown, AiOutlineLink, AiOutlineGif } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { FaRegCommentAlt, FaShare, FaSmile } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { ImCross } from "react-icons/im";
const Post = () => {
  return (
    <div className=" bg-white mt-5 p-2 rounded-lg">
      <div className=" flex items-center gap-5 p-4 relative">
        <img className=" w-10 rounded-full " src={userIcon} alt="" />
        <div>
          <h2 className=" font-semibold text-zinc-700">Adnan Chowdhury</h2>
          <p className=" flex items-center gap-3 text-sm text-[#5C5C5C] mt-2">
            1 hours ago <RiEarthFill />
          </p>
        </div>
        <AiOutlineDown className=" absolute right-4 top-4 text-lg text-gray-700" />
      </div>
      <p className=" p-3">your favorite game</p>
      {/* post */}
      <div className="text-[#5C5C5C] mb-14 ">
        <div className="p-3 ">
          <div className=" flex items-center gap-4 ">
            <input className=" p-2" type="checkbox" />
            <span className=" w-[70%] p-3 bg-[#dddfe4a9]">
              <p> Added by you </p>
              <p> Football </p>
            </span>
            <span className=" ml-5">
              <img className=" w-8 rounded-full " src={userIcon} alt="" />
              <p className=" text-xs">1 Vote</p>
            </span>
            <ImCross className=" text-[#5C5C5C] text-sm ml-4" />
          </div>
        </div>
        <div className="p-3">
          <div className=" flex items-center gap-4">
            <input className=" p-2" type="checkbox" />
            <span className=" w-[70%] p-4 bg-[#dddfe4a9]">
              <p> Added by you </p>
              <p> Football </p>
            </span>
            <span className=" ml-5">
              <img className=" w-8 rounded-full " src={userIcon} alt="" />
              <p className=" text-xs">1 Vote</p>
            </span>
            <ImCross className=" text-[#5C5C5C] text-sm ml-4" />
          </div>
        </div>
        <div className="p-3 ">
          <div className=" flex items-center gap-4">
            <input className=" p-2" type="checkbox" />
            <span className=" w-[70%] p-4 bg-[#dddfe4a9]">
              <p> Added by you </p>
              <p> Football </p>
            </span>
            <span className=" ml-5">
              <img className=" w-8 rounded-full " src={userIcon} alt="" />
              <p className=" text-xs">1 Vote</p>
            </span>
            <ImCross className=" text-[#5C5C5C] text-sm ml-4" />
          </div>
        </div>
      </div>

      <ul className=" flex items-center justify-around text-[#5C5C5C] w-[90%] p-3 bg-[#dddfe443] mx-auto">
        <li className=" flex items-center gap-3">
          <BiLike /> Like
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

      <div className=" flex items-center mt-4 gap-5 text-[#5C5C5C] p-2 ">
        <img className=" self-start w-10 rounded-full " src={userIcon} alt="" />
        <div className=" ">
          <h2 className=" font-semibold text-zinc-700">Adnan Chowdhury</h2>
          <div className=" flex items-center gap-4 mt-3 rounded-lg ">
            <img className=" w-[150px]" src={memeImg} alt="" />
            <BsThreeDots className=" text-base" />
          </div>
          <div className=" flex items-center gap-4 mt-4">
            <a href="/">Like</a>
            <a href="/">Reply</a>
            <p>54 minutes ago</p>
          </div>
        </div>
      </div>
      <div className=" flex items-center mt-4 gap-5 text-[#5C5C5C] p-2 ml-3 ">
        <img className=" self-start w-10 rounded-full " src={userIcon} alt="" />
        <div className=" ">
          <h2 className=" font-semibold text-zinc-700">Adnan Chowdhury</h2>
          <div className=" flex items-center gap-4 mt-3 rounded-lg justify-start">
            <p className="bg-[#dddfe443] p-5 px-20 rounded-lg text-left">
              Hello
            </p>
            <BsThreeDots className=" text-base" />
          </div>
          <div className=" flex items-center gap-4 mt-4">
            <a href="/">Like</a>
            <p>54 minutes ago</p>
          </div>
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
      </div>
    </div>
  );
};

export default Post;
