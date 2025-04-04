import React from "react";
import hsbcLogo from "../../assests/hsbc-logo.svg";

const Navbar = () => {
  return (
    <div className="inline-flex align-around gap-20 bg-gray-400 pb-5 pl-20 pr-20 ">
      <>
        <div>
          <img src={hsbcLogo} alt="hsbcLogo" className="w-40 pointer" />
        </div>
        <div className="mr-90">
          <p className="cursor-pointer"> | Digital Credit Portal</p>
        </div>
      </>

      <>
        <div>
          <p>❓</p>
        </div>
        <div>
          <p>English</p>
        </div>
        <div>
          <select name="userNames" id="userNames">
            <option value="UserName">Users</option>
            <option value="userName1">userName1</option>
            <option value="userName2">userName2</option>
          </select>
        </div>
        <div>
          <button>Login | Register</button>
        </div> 
      </>
    </div>
  );
};

export default Navbar;
