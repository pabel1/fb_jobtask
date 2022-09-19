import React from "react";
import userIcon from '../../Assests/images/user (2).png'
import { IoAdd } from "react-icons/io5";
import storyImg from "../../Assests/images/img_4.jpg";
const Story = () => {
  return (
    <div className="w-[100%] flex gap-2 rounded-lg ">
      <div className="story basis-[23%]  text-white rounded-lg">
        <div className=" bg-slate-600 pt-8 border-1 rounded-xl">
          <IoAdd
            className=" text-3xl bg-blue-700 rounded-full absolute
           bottom-8 left-[35%] border-[3px] border-slate-600 "
          />
          <p className=" text-center text-sm">Your Story</p>
        </div>
      </div>
      <div className="story_two basis-[23%]  text-white rounded-lg relative">
      <img className=" w-full h-[100%] object-cover rounded-md -z-10  " src={storyImg} alt="" />
        <div className=" ">
          {/* <IoAdd
            className=" text-3xl bg-blue-700 rounded-full absolute
           bottom-10 left-[35%] border-[3px] border-gray-800 "
          /> */}
         
          <img className=" absolute top-2 right-2 w-10 h-10 rounded-full " src={userIcon} alt="" />
          
          <p className=" absolute bottom-1  text-center text-sm">Adnan Chowdhury</p>
        </div>
      </div>
    </div>
  );
};

export default Story;
