import React from 'react'
import { BiSearch } from 'react-icons/bi';
import { AiFillHome,AiFillMessage,AiOutlineDown } from 'react-icons/ai';
import { FaUsers } from 'react-icons/fa';
import { IoNotifications } from 'react-icons/io5';
import userIcon from "../Assests/images/user (2).png"
const Header = () => {
  return (
    <div className='  bg-slate-600 py-3 sticky top-0 z-50'>
        <div className=' flex items-center justify-around relative'>
            <h1 className=' text-white text-lg'>Logo</h1>
            <div className=' mr-20 flex items-center  gap-2 bg-white rounded-3xl p-2 w-[25%] '>
                <BiSearch className='text-[#5C5C5C] text-lg' />
                <input className=' bg-transparent border-none outline-none ' type="text" placeholder='Search' />
            </div>
            <ul className=' flex items-end gap-12 text-xl absolute top-[18px] right-[25%]  text-[#e6e4e4]' >
                <li  className='pb-3   border-b-2 border-white px-2'> <a href="/"> <AiFillHome /></a></li>
                <li className=' pb-3  border-b-2 border-white px-2'> <a href="/"> <FaUsers /></a></li>
                <li className=' pb-3  border-b-2 border-white px-2'> <a href="/"> <IoNotifications/></a></li>
                <li className=' pb-3  border-b-2 border-white px-2'> <a href="/"> <AiFillMessage/></a></li>
                
            </ul>
            <div className=' flex items-center gap-2 text-white'>
                <img className=' w-8 rounded-full 's src={userIcon} alt="" />
                <p className=' '> Adnan Chowdhury</p>
                <AiOutlineDown />
            </div>
        </div>
    </div>
  )
}

export default Header