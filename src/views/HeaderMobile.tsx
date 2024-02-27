"use client";
import Link from "next/link";
import React, { useState } from "react";

import {
  IoChatbubblesSharp,
  IoFolderOpenSharp,
  IoHome,
  IoMailOpen,
  IoPersonSharp,
  IoClose,
  IoMenuSharp,
} from "react-icons/io5";

type activeType = {
  home: boolean;
  about: boolean;
  portfolio: boolean;
  contact: boolean;
  blog: boolean;
};

const HeaderMobile = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [activeState, setActiveState] = useState<activeType>({
    home: true,
    about: false,
    portfolio: false,
    contact: false,
    blog: false,
  });
  function handleClick(text: string): void {
    if (text == "portfolio") {
      setActiveState({
        home: false,
        about: false,
        portfolio: true,
        contact: false,
        blog: false,
      });
      setOpen(!open);
    } else if (text == "about") {
      setActiveState({
        home: false,
        about: true,
        portfolio: false,
        contact: false,
        blog: false,
      });
      setOpen(!open);
    } else if (text == "contact") {
      setActiveState({
        home: false,
        about: false,
        portfolio: false,
        contact: true,
        blog: false,
      });
      setOpen(!open);
    } else if (text == "blog") {
      setActiveState({
        home: false,
        about: false,
        portfolio: false,
        contact: false,
        blog: true,
      });
      setOpen(!open);
    } else if (text == "home") {
      setActiveState({
        home: true,
        about: false,
        portfolio: false,
        contact: false,
        blog: false,
      });
      setOpen(!open);
    } else {
      setOpen(!open);
    }
  }

  return (
    <nav className="sm:hidden relative">
      <div
        className=" z-10 flex items-center justify-center absolute rounded-md top-10 w-10 h-10 right-10 bg-slate-200/50 text-[#FFB400]"
        onClick={() => {
          handleClick("");
        }}
      >
        {!open ? <IoMenuSharp size={25} /> : <IoClose size={25} />}
      </div>
      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div
        className={` bg-gray-800 absolute ${
          !open ? "-translate-x-full" : ""
        } transition-all ease-in-out duration-500"
         `}
      >
        <div className=" px-2 pb-3 pt-16 text-white w-screen h-screen">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <Link
            href="/"
            className={`flex items-center gap-4 ${
              activeState.home ? "text-[#FFB400]" : ""
            }  rounded-md px-3 py-2 text-base font-medium`}
            aria-current="page"
            onClick={() => {
              handleClick("home");
            }}
          >
            <IoHome size={18} />
            <span className="text-lg ">HOME</span>
          </Link>
          <Link
            href="/about"
            className={`flex items-center gap-4 ${
              activeState.about ? "text-[#FFB400]" : ""
            }  rounded-md px-3 py-2 text-base font-medium`}
            aria-current="page"
            onClick={() => {
              handleClick("about");
            }}
          >
            <IoPersonSharp size={18} />
            <span className="text-lg">ABOUT</span>
          </Link>
          <Link
            href="/portfolio"
            className={`flex items-center gap-4 ${
              activeState.portfolio ? "text-[#FFB400]" : ""
            }  rounded-md px-3 py-2 text-base font-medium`}
            aria-current="page"
            onClick={() => {
              handleClick("portfolio");
            }}
          >
            <IoFolderOpenSharp size={18} />
            <span className="text-lg">PORTFOLIO</span>
          </Link>
          <Link
            href="/contact"
            className={`flex items-center gap-4 ${
              activeState.contact ? "text-[#FFB400]" : ""
            }  rounded-md px-3 py-2 text-base font-medium`}
            aria-current="page"
            onClick={() => {
              handleClick("contact");
            }}
          >
            <IoMailOpen size={18} />
            <span className="text-lg">CONTACT</span>
          </Link>
          <Link
            href="/blogs"
            className={`flex items-center gap-4 ${
              activeState.blog ? "text-[#FFB400]" : ""
            }  rounded-md px-3 py-2 text-base font-medium`}
            aria-current="page"
            onClick={() => {
              handleClick("blog");
            }}
          >
            <IoChatbubblesSharp size={18} />
            <span className="text-lg">BLOGS</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default HeaderMobile;
