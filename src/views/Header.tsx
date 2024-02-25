import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import {
  IoChatbubblesSharp,
  IoFolderOpenSharp,
  IoHome,
  IoMailOpen,
  IoPersonSharp,
} from "react-icons/io5";

function Header() {
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
          <Link href="/">
            <li>
              <Button text="Home">
                <IoHome size={20} />
              </Button>
            </li>
          </Link>
          <Link href="/">
            <li>
              <Button text="About">
                <IoPersonSharp size={20} />
              </Button>
            </li>
          </Link>
          <Link href="/">
            <li>
              <Button text="Portfolio">
                <IoFolderOpenSharp size={20} />
              </Button>
            </li>
          </Link>
          <Link href="/">
            <li>
              <Button text="Contact">
                <IoMailOpen size={20} />
              </Button>
            </li>
          </Link>
          <Link href="/">
            <li>
              <Button text="Blogs">
                <IoChatbubblesSharp size={20} />
              </Button>
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
