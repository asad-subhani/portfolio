import Heading3 from "@/components/Heading3";
import Image from "next/image";

function Skills() {
  return (
    <section className="w-full py-6">
      <center>
        <Heading3 text="MY SKILLS" />
        <div className=" py-14 sm:py-14">
          <div className="mx-auto px-6 lg:px-8">
            <div className="mx-auto grid grid-cols-4 items-center gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-4">
              <Image
                className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
                src="/SkillsLogos/next.png"
                alt="Reform"
                width="158"
                height="48"
              />
              <Image
                className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
                src="/SkillsLogos/react-js.svg"
                alt="Tuple"
                width="158"
                height="48"
              />
              <Image
                className="col-span-2 max-h-20 w-full object-contain  lg:col-span-1"
                src="/SkillsLogos/python.svg"
                alt="Statamic"
                width="158"
                height="48"
              />
              <Image
                className="col-span-2 max-h-20 w-full object-contain  lg:col-span-1"
                src="/SkillsLogos/fastapi.png"
                alt="Statamic"
                width="158"
                height="48"
              />
              <Image
                className="col-span-2 max-h-20 w-full object-contain  lg:col-span-1"
                src="/SkillsLogos/docker.png"
                alt="Statamic"
                width="158"
                height="48"
              />
              <Image
                className="col-span-2 max-h-20 w-full object-contain  lg:col-span-1"
                src="/SkillsLogos/openai.png"
                alt="Statamic"
                width="158"
                height="48"
              />
              <Image
                className="col-span-2 max-h-20 w-full object-contain  lg:col-span-1"
                src="/SkillsLogos/aws.png"
                alt="Statamic"
                width="158"
                height="48"
              />
              <Image
                className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
                src="/SkillsLogos/htmlCssJs.png"
                alt="Transistor"
                width="358"
                height="48"
              />
              <Image
                className="col-span-2 max-h-20 w-full object-contain  lg:col-span-1"
                src="/SkillsLogos/tailwindcss.svg"
                alt="SavvyCal"
                width="158"
                height="48"
              />
              <Image
                className="col-span-2 max-h-20 w-full object-contain  lg:col-span-1"
                src="/SkillsLogos/bootstrap.svg"
                alt="Statamic"
                width="158"
                height="48"
              />
              <Image
                className="col-span-2 max-h-20 w-full object-contain  lg:col-span-1"
                src="/SkillsLogos/wordpress.svg"
                alt="Statamic"
                width="158"
                height="48"
              />
            </div>
          </div>
        </div>
      </center>
      <hr className="border-1 dark:bg-gray-700 w-[50vw] mt-10 m-auto" />
    </section>
  );
}

export default Skills;
