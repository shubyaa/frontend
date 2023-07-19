import React from "react";
import { home, library, logo, search } from "../assets/index";
import { Link } from "react-router-dom";
const SideNav = () => {
  return (
    <div>
      <div className="bg-black flex flex-col items-start w-[230px] h-screen overflow-hidden sticky top-0 bottom-0 left-0">
        <img src={logo} className=" w-[130px] relative p-4" alt="" />
        <div className=" px-3 py-3 w-full">
          <ul className=" text-white text-[14px] font-bold leading-none w-full">
            <Link to={"/"}>
              <li className="transition-colors duration-300 ease-in-out rounded-[10px] hover:bg-zinc-600 p-4 flex flow-row items-center align-middle justify-start">
                <img
                  src={home}
                  alt="Home Icon"
                  className=" w-[24px] h-[24px] object-contain mr-5"
                />
                <h2>Home</h2>
              </li>
            </Link>

            <li className="transition-colors duration-300 ease-in-out rounded-[10px] hover:bg-zinc-600 p-4 flex flow-row items-center  justify-start">
              <img
                src={search}
                alt="Search Icon"
                className=" w-[24px] h-[24px] object-contain mr-5"
              />
              <h2>Search</h2>
            </li>
            <li className="transition-colors duration-300 ease-in-out rounded-[10px] hover:bg-zinc-600 p-4 flex flow-row items-center justify-start">
              <img
                src={library}
                alt="Library Icon"
                className=" w-[24px] h-[24px] object-contain mr-5"
              />
              <h2>Your Library</h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
