import ButtonSwipe from "@/components/ButtonSwipe";
import Image from "next/image";
import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";

function Main() {
  return (
    <section className="flex lg:flex-row flex-col w-screen h-screen">
      <div className="lg:w-2/5 lg:h-full py-10 lg:bg-gradient-to-tr lg:from-[#FFB400] lg:from-10% lg:via-[#020817] lg:via-50% flex items-center justify-center">
        <div className=" bg-black lg:w-5/6 lg:h-5/6 lg:rounded-2xl rounded-full sm:h-72 sm:w-72 h-52 w-52 flex justify-center overflow-hidden">
          <Image
            src="/portfolio.png"
            width={462}
            height={300}
            alt="Portfolio Image"
            className="size-full"
          />
        </div>
      </div>
      <center className="flex flex-col justify-center px-10 md:px-24 w-full lg:w-4/5 lg:h-full">
        <div className="flex flex-col ">
          <h1 className="scroll-m-20 text-[#FFB400] text-4xl font-extrabold tracking-wide lg:text-5xl">
            I AM ASAD SUBHANI
          </h1>
          <h1 className=" mt-2 scroll-m-20 text-4xl font-extrabold tracking-wide lg:text-5xl">
            SOFTWARE DEVELOPER
          </h1>
        </div>
        <div className="my-10  w-full">
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-center">
          I am a Microsoft Certified Azure AI Fundamentals, equipped with a Bachelor's degree in Software Engineering. I have eight months of internship experience in Frontend Development and hands on practical experience building Cloud Native APIs using Python and Fast API.
          </p>
        </div>
        <Link href="/about">
          <ButtonSwipe text="MORE ABOUT ME">
            <IoArrowForwardOutline size={20} />
          </ButtonSwipe>
        </Link>
      </center>
    </section>
  );
}

export default Main;
