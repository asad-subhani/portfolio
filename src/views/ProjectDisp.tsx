import Image from "next/image";
import Link from "next/link";
import { IoEyeSharp, IoLogoGithub } from "react-icons/io5";

function ProjectDisp({
  imgSrc,
  projectHeading,
  gitRepo,
  projectUrl,
  git,
}: {
  imgSrc: string;
  projectHeading: string;
  gitRepo: string;
  projectUrl: string;
  git: boolean;
}) {
  return (
    <>
      <div className="group relative m-0 flex h-72 w-96 rounded-xl overflow-hidden shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
        <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-40 dark:border-gray-700 dark:opacity-80">
          <Image
            src={imgSrc}
            className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
            alt=""
            width={384}
            height={100}
          />
        </div>
        <div className="absolute w-full bg-gray-900/50 bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
          <h1 className="font-serif text-2xl font-bold text-white shadow-xl">
            {projectHeading}
          </h1>
          <div className="flex gap-10">
            <div className="w-10 h-10 flex justify-center items-center bg-[#FFB400] rounded-full">
              <Link href={projectUrl} target="blank">
                <IoEyeSharp size={25} />
              </Link>
            </div>
            <div
              className={`${
                !git ? "hidden" : ""
              } w-10 h-10 flex justify-center items-center bg-[#FFB400] rounded-full`}
            >
              <Link href={gitRepo} target="blank">
                <IoLogoGithub size={25} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDisp;
