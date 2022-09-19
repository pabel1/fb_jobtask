import React from "react";
import userIcon from "../../Assests/images/user (2).png";
import {BsCircleHalf} from 'react-icons/bs'
import {FaCameraRetro,FaRegSmile} from 'react-icons/fa'
const CreatePost = () => {
  return (
    <div className=" bg-white w-full rounded-md mt-5 ">
      <div className=" p-4  flex items-center gap-2 border-b pb-3 ">
        <img className=" w-10 rounded-full " src={userIcon} alt="" />
        <input
          className=" bg-[#dddfe4] p-2 w-full rounded-3xl border-none outline-none "
          type="text"
          placeholder="Create a new post..."
        />
      </div>
      <ul className=" flex items-center justify-around py-6 text-[#5C5C5C]">
        <li> <a className=" flex items-center gap-2" href="/"><BsCircleHalf />Background</a></li>
        <li> <a className=" flex items-center gap-2" href="/"><FaCameraRetro />Photo/Video</a></li>
        <li> <a className=" flex items-center gap-2" href="/"><FaRegSmile />Feeling/Activity</a></li>
      </ul>
    </div>
  );
};

export default CreatePost;
