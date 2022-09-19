import React, { useState } from "react";
// import ulfred from "../Assests/images/img_2.jpg";
// import ulfredimg from "../Assests/images/img_2.jpg";
// import sakibIcon from "../Assests/images/img_7.jpg";



// import {
//     // AiOutlineDown,
//     // AiOutlineLink,
//     // AiOutlineGif,
//     AiFillHeart,
//   } from "react-icons/ai";
//   import { BiLike } from "react-icons/bi";
import {data} from './Data'
export const DataContext = React.createContext();

export function DataContextProvider({ children }) {
  const [postData, setPostData] = useState(data);

  return (
    <DataContext.Provider value={[postData, setPostData]}>
      {children}
    </DataContext.Provider>
  );
}
