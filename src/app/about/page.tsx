import PageHeading from "@/components/PageHeading";
import HeaderMobile from "@/views/HeaderMobile";
import PersonalInfo from "@/views/about/personalInfo";
import React from "react";

function About() {
  return (
    <>
      <HeaderMobile />
      <section className="max-w-[1200px] md:px-20 p-5 m-auto">
        <PageHeading backText="RESUME" main="ABOUT ME" />
        <PersonalInfo />
      </section>
    </>
  );
}

export default About;
