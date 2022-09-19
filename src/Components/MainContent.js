import React from 'react'
import SamePost from './MainContent/ChangeProfilePost'
import CreatePost from './MainContent/CreatePost'
import FeelingPost from './MainContent/FeelligPost'
import Post from './MainContent/Post'
import PublicPost from './MainContent/PublicPost'
import Story from './MainContent/Story'
// import userIcon from "../../Assests/images/Ellipse 1.png";

const MainContent = () => {
  
  return (
    <div  className='w-[42%] '>
      <Story />
      <CreatePost />
      <PublicPost />
      <Post />
      <FeelingPost/>
      <SamePost  />
    </div>
  )
}

export default MainContent