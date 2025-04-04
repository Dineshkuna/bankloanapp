import React from "react";
import hsbcLogo from "../../assests/hsbc-logo.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-200 px-8 py-4 shadow-md">
      {/* Left Section */}
      <div className="flex items-center gap-6">
        <img src={hsbcLogo} alt="hsbcLogo" className="w-32 cursor-pointer" />
        <p className="text-lg font-semibold text-gray-700">| Digital Credit Portal</p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        <p className="text-xl cursor-pointer">❓</p>
        <p className="cursor-pointer">English</p>
        <select
          name="userNames"
          id="userNames"
          className=" px-2 py-1 text-sm"
        >
          <option value="UserName">Users</option>
          <option value="userName1">userName1</option>
          <option value="userName2">userName2</option>
        </select>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm">
          Login | Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
