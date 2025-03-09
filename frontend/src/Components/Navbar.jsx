import React, { useContext } from "react";

import threeDots from "../assets/Utilities/threeDots.svg";
import signIn from "../assets/Utilities/signIn.svg";
import shoppingBag from "../assets/Utilities/shoppingBag.svg";
import favorite from "../assets/Utilities/favorite.svg";


function Navbar() {
  

  return (
    <div className="flex justify-between w-full">
      <div className="flex item-center gap-3">
        <div className=" flex item-center gap-3 font-family: HM Sans Regular text-sm">
          <button className=""> Sustainbility </button>
          <button className=" "> Customer Service </button>
          <button className=" "> Students get 20 % off </button>
        </div>
        <div>
          <img className=" h-6 w-8 mt-2" src={threeDots} alt="threeDots" />
        </div>
      </div>
      <div>
        <img
          className="h-10 w-12"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1064px-H%26M-Logo.svg.png"
          alt="h & m"
        />
      </div>
      <div className="flex items-center gap-3 font-family: HM Sans Regular text-sm">
        <img className="h-6 w-6" src={signIn} alt="signIn logo" />
        <button className="">Sign In</button>
        <img className="h-6 w-6" src={favorite} alt="Favorite Icon" />
        <button className="">Favorites</button>
        <img className="h-6 w-6" src={shoppingBag} alt="Shopping bag" />
        
        <button className=" ">Shopping Bag (0)</button>
      </div>
    </div>
  );
}

export default Navbar;
