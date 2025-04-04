import React from "react";
import { IoHome } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { TiThLargeOutline } from "react-icons/ti";

const MiniNavbar = () => {
  return (
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
  );
};

export default MiniNavbar;
