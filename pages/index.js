import MainBody from "@/Components/MainBody/MainBody";
import Sidebar from "@/Components/Sidebar/Sidebar";
import React, { useState } from "react";

const Home = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const handleSidebarToggle = () => {
    setSidebarToggle(!sidebarToggle);
  };
  console.log(sidebarToggle);
  return (
    <div className={` relative  px-3 md:px-0`}>
      <div
        className={`${
          sidebarToggle ? "left-0 w-[80%]" : "-left-full md:left-0"
        }  absolute md:w-[20%] `}
      >
        <Sidebar />
      </div>
      <div
        className={`absolute w-full ${
          sidebarToggle
            ? "-right-[80%] md:-right-0 md:w-[80%]"
            : "right-0 md:w-[80%]"
        }`}
      >
        <MainBody handleSidebarToggle={handleSidebarToggle} />
      </div>
    </div>
  );
};

export default Home;
