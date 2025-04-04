import React from "react";
import { IoHome } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { TiThLargeOutline } from "react-icons/ti";
import { HiOutlineDotsVertical } from "react-icons/hi";

const MiniNavbar = () => {
  return (
    <div>
      <div className="flex gap-10 items-center bg-gray-200 px-12 py-3 shadow-sm text-sm text-gray-800">
        {/* Nav Item */}
        <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition">
          <IoHome className="text-lg" />
          <span>Home</span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition">
          <FaSearch className="text-lg" />
          <span>Search</span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition">
          <TiThLargeOutline className="text-lg" />
          <span>In Tray Administration</span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition">
          <TiThLargeOutline className="text-lg" />
          <span>User</span>
        </div>
      </div>
      <div className="flex gap-2 bg-gray-200 items-center px-12 py-3 ">
        <div  className="border-hidden rounded px-5 py-4 bg-gray-400 cursor-pointer hover:bg-gray-100 active:bg-gray-100 outline-1  outline-gray-500 items-center">
          <p>Dashboard</p>
        </div>
        <div className="border-hidden rounded px-5 py-3 bg-gray-400 cursor-pointer hover:bg-gray-100 active:bg-gray-100 outline-1  outline-gray-500 items-center"><span className="flex">
            <p className="text-lg"><HiOutlineDotsVertical /></p> 
          <p>Proposed System Decision</p>
          </span>
        </div>
        <div className="border-hidden rounded px-5 py-3 bg-gray-400 cursor-pointer hover:bg-gray-100 active:bg-gray-100 outline-1  outline-gray-500 items-center">
            <span className="flex">
            <p className="text-lg"><HiOutlineDotsVertical /></p>
            <p>Pervious Proposals</p>
            </span>
          
        </div>
      </div>
    </div>
  );
};

export default MiniNavbar;
