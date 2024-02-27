"use client";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  IoChatbubblesSharp,
  IoFolderOpenSharp,
  IoHome,
  IoMailOpen,
  IoPersonSharp,
} from "react-icons/io5";

type activeType = {
  home: boolean;
  about: boolean;
  portfolio: boolean;
  contact: boolean;
  blog: boolean;
};

function Header() {
  const [activeState, setActiveState] = useState<activeType>({
    home: true,
    about: false,
    portfolio: false,
    contact: false,
    blog: false,
  });
  function handleClick(text: string) {
    if (text == "Portfolio") {
      setActiveState({
        home: false,
        about: false,
        portfolio: true,
        contact: false,
        blog: false,
      });
    } else if (text == "About") {
      setActiveState({
        home: false,
        about: true,
        portfolio: false,
        contact: false,
        blog: false,
      });
    } else if (text == "Contact") {
      setActiveState({
        home: false,
        about: false,
        portfolio: false,
        contact: true,
        blog: false,
      });
    } else if (text == "Blogs") {
      setActiveState({
        home: false,
        about: false,
        portfolio: false,
        contact: false,
        blog: true,
      });
    } else {
      setActiveState({
        home: true,
        about: false,
        portfolio: false,
        contact: false,
        blog: false,
      });
    }
  }

  return (
    <header className=" hidden sm:block w-40  h-screen py-10 pr-3">
      <div className="mb-24">
        <Image
          src="/logo.png"
          width={150}
          height={150}
          alt="Asad Subhani"
        ></Image>
      </div>
      <div>
        <ul className="w-full flex flex-col items-end gap-4">
          <li>
            <Link href="/">
              <Button
                text="Home"
                active={activeState.home}
                handleClick={handleClick}
              >
                <IoHome size={20} />
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <Button
                text="About"
                active={activeState.about}
                handleClick={handleClick}
              >
                <IoPersonSharp size={20} />
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <Button
                text="Portfolio"
                active={activeState.portfolio}
                handleClick={handleClick}
              >
                <IoFolderOpenSharp size={20} />
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <Button
                text="Contact"
                active={activeState.contact}
                handleClick={handleClick}
              >
                <IoMailOpen size={20} />
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/blogs">
              <Button
                text="Blogs"
                active={activeState.blog}
                handleClick={handleClick}
              >
                <IoChatbubblesSharp size={20} />
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
