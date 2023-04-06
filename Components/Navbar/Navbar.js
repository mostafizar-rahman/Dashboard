import React from "react";
import { FaBars, FaSearch } from "react-icons/fa";
const Navbar = ({handleSidebarToggle}) => {
  return (
    <nav className="flex justify-between items-center pt-2">
      <div>
        <FaBars className="text-2xl" onClick={handleSidebarToggle}/>
      </div>
      <div className="relative h-8">
        <input
          placeholder="Search"
          className="border border-gray-500 outline-none rounded-3xl px-7 py-1  w-full h-full "
        />
        <FaSearch className="absolute left-2 top-1/2 -translate-y-1/2"/>
      </div>
      <div className="w-10 h-10 rounded-full bg-gray-400">
        <img
          src="http://www.goodmorningimagesdownload.com/wp-content/uploads/2021/12/Beautiful-Images-for-DP.jpg"
          alt=""
          className="w-full h-full rounded-full border"
        />
      </div>
    </nav>
  );
};

export default Navbar;
