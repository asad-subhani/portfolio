import PageHeading from "@/components/PageHeading";
import HeaderMobile from "@/views/HeaderMobile";
import Skills from "@/views/about/Skills";
import PersonalInfo from "@/views/about/PersonalInfo";

import React from "react";
import ExpEdu from "@/views/about/ExpEdu";

function About() {
  return (
    <>
      <HeaderMobile />
      <section className="max-w-[1200px] md:px-20 p-5 m-auto">
        <PageHeading backText="RESUME" main="ABOUT ME" />
        <PersonalInfo />
        <Skills />
        <ExpEdu />
      </section>
    </>
  );
}

export default About;
