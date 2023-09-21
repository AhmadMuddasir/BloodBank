import React, { useState } from "react";
import { logo, close, menu } from "../assets";

const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "transaction",
    title: "Transactions",
  },
  {
    id: "clients",
    title: "Clients",
  },
];

const Navbar = ({ account }) => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className=" w-full flex  justify-center items-center ">
        <div className="m-1 p-1 flex items-center justify-center ">
          <img src={logo} alt="logo" className="sm:w-[70px] w-[50px]" />
          <h2 className="m-2 text-lg font-thin">D Blood Bank</h2>
        </div>

        <ul className=" hidden list-none sm:flex mr-8 justify-end items-start flex-1">
          {navLinks.map((nav, index) => (
            
              <li
                key={nav.id}
                className={`cursor-pointer text-[20px] 
            ${active === nav.title ? "text-white" : "text-gray-400"}
            ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                onClick={() => {
                  setActive(nav.title);
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            
          ))}

        </ul>


        <div className="sm:hidden flex flex-1 justify-end items-start">
          <img
            src={toggle ? menu : close}
            alt="menu"
            className="w-[24px] m-3  h-[24px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${toggle ? "hidden" : "flex"}
        p-6 bg-slate-500 absolute top-20 right-0 mx-4 my-2 min-w-[140x] rounded-lg sidebar
        transition-all duration-75`}
          >
            <ul className="flex flex-col list-none   justify-end items-start flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`cursor-pointer font-blod my-2 text-[19px]
            ${active === nav.title ? "text-white" : "text-gray-400"}
            ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                  onClick={() => {
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
