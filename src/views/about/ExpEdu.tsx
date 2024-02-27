import Heading3 from "@/components/Heading3";
import { Badge } from "@/components/ui/badge";
import { IoBriefcaseSharp } from "react-icons/io5";

function ExpEdu() {
  return (
    <section className="px-5">
      <center className="my-10">
        <Heading3 text="EXPERIENCE & EDUCATION" />
      </center>
      <div className="w-full flex flex-col md:flex-row">
        <div className="exp md:w-1/2">
          <div>
            <div className="flex gap-10 ">
              <div className="w-10 flex items-center justify-center h-10 rounded-full -translate-x-5 bg-[#FFB400]">
                <IoBriefcaseSharp size={20} />
              </div>
              <Badge variant="outline">Coming Soon (Insha ALlah)</Badge>
            </div>
            <div className="pt-5 mb-10 px-10 border-l-[1px] border-gray-300">
              <h4 className="scroll-m-20 text-lg font-semibold tracking-wide">
                AI MICRO SERVICES DEVELOPER --{" "}
                <span className="text-gray-600">REPUTABLE COMPANY</span>
              </h4>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                I will be working with modern web technologies like Next Js,
                TypeScript, Python, Fast API, PostgreSQL, Docker, Serverless
                Containers, CDK for Terraform, GenAI API Stack and Custom GPT
                Stack{" "}
                <span className="font-bold tracking-wider">INSHA ALLAH</span>
              </p>
            </div>
          </div>
          <div>
            <div className="flex gap-10 ">
              <div className="w-10 flex items-center justify-center h-10 rounded-full -translate-x-5 bg-[#FFB400]">
                <IoBriefcaseSharp size={20} />
              </div>
              <Badge variant="outline">Feb, 2023 - Sep, 2023</Badge>
            </div>
            <div className="pt-5 mb-10 px-10 border-l-[1px] border-gray-300">
              <h4 className="scroll-m-20 text-lg font-semibold tracking-wide">
                WEB DEVELOPER (intern) --{" "}
                <span className="text-gray-600">SALAAR TECHNOLOGIES</span>
              </h4>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                Modern web technologies ( React, Next Js, TypeScript, Bootstrap,
                and Tailwind CSS ) have been my constant attention, and I have
                created dynamic interfaces to guarantee cutting-edge digital
                experiences.
              </p>
            </div>
          </div>
        </div>
        {/* Education Section started .... */}
        <div className="edu md:w-1/2">
          <div>
            <div className="flex gap-10 ">
              <div className="w-10 flex items-center justify-center h-10 rounded-full -translate-x-5 bg-[#FFB400]">
                <IoBriefcaseSharp size={20} />
              </div>
              <Badge variant="outline">Jun, 2023 - Present</Badge>
            </div>
            <div className="pt-5 mb-10 px-10 border-l-[1px] border-gray-300">
              <h4 className="scroll-m-20 text-lg font-semibold tracking-wide">
                CIRTIFIED CLOUD APPLIED GENERATIVE AI ENGINEER --{" "}
                <span className="text-gray-600">PIAIC</span>
              </h4>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                Training includes modern web technologies like Next Js,
                TypeScript, Python, Fast API, PostgreSQL, Docker, Serverless
                Containers, CDK for Terraform, GenAI API Stack and Custom GPT
                Stack.
              </p>
            </div>
          </div>
          <div>
            <div className="flex gap-10 ">
              <div className="w-10 flex items-center justify-center h-10 rounded-full -translate-x-5 bg-[#FFB400]">
                <IoBriefcaseSharp size={20} />
              </div>
              <Badge variant="outline">Jully, 2022</Badge>
            </div>
            <div className="pt-5 mb-10 px-10 border-l-[1px] border-gray-300">
              <h4 className="scroll-m-20 text-lg font-semibold tracking-wide">
                BS SOFTWARE ENGINEERING --{" "}
                <span className="text-gray-600">IIUI</span>
              </h4>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                Learned all the bace concepts like Programming Fundamentals,
                Object Oriented Programming, Database, DBMS, Web Development and
                Mobile Application Development etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExpEdu;
