import React from "react";
// import storybg from '../../Assests/images/user (2).png'
import { IoAdd } from "react-icons/io5";
// import userImg from "../../Assests/images/Ellipse 1.png";
const Story = () => {
  return (
    <div className="w-[100%] flex gap-2 rounded-lg ">
      <div className="story basis-[23%]  text-white rounded-lg">
        <div className=" bg-gray-800 pt-8 border-1 rounded-t-2xl">
          <IoAdd
            className=" text-3xl bg-blue-700 rounded-full absolute
           bottom-10 left-[35%] border-[3px] border-gray-800 "
          />
          <p className=" text-center text-sm">Your Story</p>
        </div>
      </div>
      <div className="story basis-[23%]  text-white rounded-lg">
        <div className=" ">
          <IoAdd
            className=" text-3xl bg-blue-700 rounded-full absolute
           bottom-10 left-[35%] border-[3px] border-gray-800 "
          />
          
          <p className=" text-center text-sm">Your Story</p>
        </div>
      </div>
    </div>
  );
};

export default Story;
