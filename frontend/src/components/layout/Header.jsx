import React, { useState } from "react";
import StoreLogo from "../../images/store.png";
import UserAvatar from "../../images/user.png";
import CartIcon from "../../images/cart.png";
import MetaData from "./MetaData";

const Header = () => {
  //ecommerce store nav bar with just logo, search bar, cart, and user avatar using tailwind css and responsive
  return (
    <div className="flex justify-between items-center bg-gray-900 p-4">
      <MetaData title={"Buy only the best"} />
      <div className="flex items-center">
        <img src={StoreLogo} alt="store logo" className="w-10 h-10" />
        <span className="font-bold text-xl text-white ml-2">HamroKinmel</span>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <button className="bg-yellow-500 text-white p-2 rounded-lg ml-2">
          Search
        </button>
      </div>
      <div className="flex items-center">
        <div className="flex items-center ml-4">
          <img src={CartIcon} alt="cart icon" className="w-6 h-6" />
          <span className="font-bold text-white ml-2">0</span>
        </div>

        <div className="flex items-center ml-4">
          <img src={UserAvatar} alt="user avatar" className="w-6 h-6" />
          <span className="font-bold ml-2">User</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
