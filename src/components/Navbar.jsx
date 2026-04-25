import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";
import img from "../assets/img.png";
import { Button, Input, Popover } from "antd";
import { IoSearch } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdPhone } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="bg-blue-950">
      <div className="bg-blue-950 py-6 px-16 shadow-2x1 flex justify-between">
        <div className="max-w-6x1 flex items-center gap-8 text-white  p-xl">
          <nav>
            <ul className="flex gap-9 font-bold text-sm font-sans-serif px-3">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `${isActive ? "text-[#ffc400] transition-all" : "text-white"}`
                }
              >
                <li>HOME</li>
              </NavLink>
              <NavLink
                to={"/shop"}
                className={({ isActive }) =>
                  `${isActive ? "text-[#ffc400] transition-all" : "text-white"}`
                }
              >
                <li className="flex items-center gap-1">
                  SHOP
                  <IoIosArrowDown className="text-base" />
                </li>
              </NavLink>
              <NavLink
                to={"/specials"}
                className={({ isActive }) =>
                  `${isActive ? "text-[#ffc400] transition-all" : "text-white"}`
                }
              >
                <li>SPECIALS</li>
              </NavLink>
              <NavLink
                to={"/pages"}
                className={({ isActive }) =>
                  `${isActive ? "text-[#ffc400] transition-all" : "text-white"}`
                }
              >
                <li className="flex items-center gap-1">
                  PAGES
                  <IoIosArrowDown className="text-base" />
                </li>
              </NavLink>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  `${isActive ? "text-[#ffc400] transition-all" : "text-white"}`
                }
              >
                <li>ABOUT US</li>
              </NavLink>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  `${isActive ? "text-[#ffc400] transition-all" : "text-white"}`
                }
              >
                <li>CONTACT</li>
              </NavLink>
              <NavLink
                to={"blog"}
                className={({ isActive }) =>
                  `${isActive ? "text-[#ffc400] transition-all" : "text-white"}`
                }
              >
                <li className="flex items-center gap-1">
                  BLOG
                  <IoIosArrowDown className="text-base" />
                </li>
              </NavLink>
            </ul>
          </nav>
        </div>

        <div className="flex items-end font-'Work_Sans' text-white text-sm gap-5">
          <ul className="flex gap-7 text-white">
            <li className="flex items-center gap-1 hover:text-[#ffc400] transition-all cursor-pointer">
              Currency
              <IoIosArrowDown className="text-sm" />
            </li>
            <li className="flex items-center gap-1 hover:text-[#ffc400] transition-all cursor-pointer">
              Language <IoIosArrowDown className="text-sm" />
            </li>
            <li className="flex items-center gap-1 hover:text-[#ffc400] transition-all cursor-pointer ">
              My Account
              <IoIosArrowDown className="text-sm" />
            </li>
          </ul>
        </div>
      </div>
      {/* logo img  */}
      <div className="h-20 py-5 px-18.75 flex items-center gap-16">
        <img
          src={img}
          alt="Car Part Shop Logo"
          className="w-47.25 h-10 object-contain "
        />
        <div className="pb-6 flex flex-row items-center gap-8">
          <div>
            {/* shop by  */}
            <div className="w-65 h-14 bg-[#ffc400] relative px-2 py-1 flex flex-row justify-evenly gap-5 items-center rounded-sm cursor-pointer">
              <IoMdMenu className="h-11 w-11 text-[#333333]" />
              <Popover
                className="w-65"
                arrow={false}
                placement="bottom"
                content={<div>hjgjj</div>}
                title="hover"
                overlayInnerStyle={{ width: "260px" }}
                align={{ offset: [-8, 10] }}
                trigger={"click"}
              >
                <div className="uppercase">
                  <div className="text-[#333333] text-sm font-bold">
                    shop by
                  </div>
                  <div className="text-[#333333] text-base font-bold -mt-1">
                    department
                  </div>
                </div>
              </Popover>
              <IoIosArrowDown className="h-6 w-6 text-[#333333]" />
            </div>
          </div>
          {/* input section */}
          <div className="flex-row h-14 flex items-center">
            <form className="hm-searchbox bg-white h-14 flex flex-row items-center rounded-sm">
              <select className="select-search-category text-[13px] outline-none text-[#999999] w-35 py-2 px-4">
                <option value="0">All Categories</option>
                <option value="1">Memory Card</option>
                <option value="2">Cameras</option>
              </select>
              <span className="pr-3 pl-4  text-[#999999]">|</span>
              <input
                type="text"
                placeholder="Enter your search key ..."
                className="text-[13px] w-81 pr-5 pl-2 h-13.5 focus:outline-none text-sm text-[#999999]  "
              />

              <button
                className="bg-[#ffc400] w-31  text-base px-4 py-4 uppercase font-bold text-[#000000] rounded-r-sm hover:bg-[#e52e06] transition-all ease-in-out duration-400  hover:text-white"
                type="submit"
              >
                <span className="flex flex-row items-center gap-1 ">
                  <IoSearch className="text-2xl" />
                  <span>Search</span>
                </span>

                <i className="ion-ios-search-strong"></i>
              </button>
            </form>
          </div>
          {/* cart  */}
          <div className="h-14 bg-white w-51.25 flex flex-row items-center pl-8 rounded-sm">
            <HiOutlineShoppingBag className="text-2xl" />
            <span className="bg-[#e52e06] rounded-full text-xs py-0.5 px-1.5 mb-3 text-white">
              3
            </span>
            <div className="flex flex-col text-lg pl-4">
              <span>Cart:</span>
              <span className="font-bold">462.4</span>
            </div>
            <IoIosArrowDown className="text-3xl text-gray-600 ml-4" />
          </div>
          {/* contact number */}
          <div className="w-71 bg-[#e52e06] h-14 flex flex-row items-center font-bold pr-4 pl-8 rounded-sm gap-4 relative">
            <MdPhone className="text-white  text-[26px] " />
            <span className="text-white text-2xl">+49 171 32445</span>
            <div className="border-[9px] border-transparent border-t-[#e52e06] border-l-[#e52e06] absolute -bottom-4 h-2 w-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
