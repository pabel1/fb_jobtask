import React from "react";
import Header from "./Header";
import LeftSidebar from "./LeftSidebar";
import MainContent from "./MainContent";
import RightSideBar from "./RightSideBar";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className=" w-[86%] mx-auto flex items-start justify-center gap-6 my-3">
        <LeftSidebar />
        <MainContent />
        <RightSideBar />
      </div>

      {/* <div className="content__div">
        <div className="left__sidebar">

        </div>
        <div className="main__content">

        </div>
        <div className="right__sidebar">

        </div>
      </div> */}
    </div>
  );
};

export default Layout;
