import React from "react";
import {
  AiOutlineHome,
  AiOutlineUsergroupAdd,
  AiOutlineMessage,
  AiOutlineSetting,
  AiOutlineQuestion,
} from "react-icons/ai";
import { VscLock } from "react-icons/vsc";
import { FiLogIn } from "react-icons/fi";
import Style from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className="bg-blue-700 min-h-screen h-full pl-4 py-4 overflow-hidden ">
      <h1 className="text-white font-bold text-lg">Your Brind</h1>
      <ul className={`flex flex-col gap-5 mt-5 ${Style.sidebar_list}`}>
        <li className={`text-white flex items-center gap-3 px-2 h-12 ${Style.avtive}  `}>
          <AiOutlineHome className="text-3xl" />
          <span className="text-sm">Dahsboard</span>
        </li>
        <li className="text-white flex items-center gap-3 px-2 h-12 ">
          <AiOutlineUsergroupAdd className="text-3xl" />
          <span className="text-sm">Customers</span>
        </li>

        <li className="text-white flex items-center gap-3 px-2 h-12 ">
          <AiOutlineMessage className="text-3xl" />
          <span className="text-sm">Message</span>
        </li>
        <li className="text-white flex items-center gap-3 px-2 h-12 ">
          <AiOutlineQuestion className="text-3xl" />
          <span className="text-sm">Help</span>
        </li>
        <li className="text-white flex items-center gap-3 px-2 h-12 ">
          <AiOutlineSetting className="text-3xl" />
          <span className="text-sm">Settings</span>
        </li>
        <li className="text-white flex items-center gap-3 px-2 h-12 ">
          <VscLock className="text-3xl" />
          <span className="text-sm">Passwoard</span>
        </li>
        <li className="text-white flex items-center gap-3 px-2 h-12 ">
          <FiLogIn className="text-3xl" />
          <span className="text-sm">Sing Out</span>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
