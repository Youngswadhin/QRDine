import React from "react";
import { GoLocation, GoSearch } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { BiCartAlt } from "react-icons/bi";
import { AiOutlineCaretDown } from "react-icons/ai";
import ImageOptimized from "../common/Image";
import logo from "../../public/logo.png";
import user from "../../public/user.png";

export default function Header() {
  return (
    <div className="flex h-16 w-full items-center mb-3 max-width">
      <ImageOptimized
        className={"mr-6 h-14 w-14"}
        imgSrc={logo}
        imgAlt={"website-logo"}
      />

      {/* header right */}
      <div className="flex flex-1 justify-between items-center h-16">
        {/* search container */}
        <SearchContainer />
        {/* profile container*/}
        <div className="flex justify-between gap-8 w-[17%] items-center">
          <div className="profile gap-1 flex">
            <CgProfile className="text-xl" />
            <span className="text-base">Sign In</span>
          </div>
          <div className="cart gap-1 flex">
            <BiCartAlt className="text-xl" />
            <span className="text-base">Cart</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const SearchContainer = () => {
  return (
    <div
      className={`items-center rounded-lg h-14 w-9/12 border border-solid  border-zomato-border box-shadow hidden sm:flex`}
    >
      {/* location */}
      <div className="flex flex-1 justify-between py-0 px-3">
        <div className="flex text-zomato-whiteGray">
          <GoLocation className="mr-2 text-xl text-zomato-primary" />
          <div>Bangalore</div>
        </div>
        <AiOutlineCaretDown />
      </div>
      <div className="h-5 border border-zomato-whiteGray border-solid"></div>
      {/* search */}
      <div className="flex flex-[2]">
        <GoSearch className="text-xl text-zomato-gray mx-3" />
        <input
          className="border-none outline-none w-3/5"
          placeholder="Search for restaurant, cuisine or a dish"
        />
      </div>
    </div>
  );
};
