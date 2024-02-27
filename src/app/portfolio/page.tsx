import PageHeading from "@/components/PageHeading";
import HeaderMobile from "@/views/HeaderMobile";
import ProjectDisp from "@/views/ProjectDisp";
import React from "react";

function Porfolio() {
  return (
    <>
      <HeaderMobile />
      <section className="max-w-[1200px] md:px-20 p-5 m-auto">
        <PageHeading backText="WORKS" main="MY PORTFOLIO" />
        <div className=" relative flex flex-wrap gap-4 justify-center overflow-hidden">
          <ProjectDisp
            projectUrl="https://ecommerce-template-snowy-eta.vercel.app/"
            imgSrc="/portfolio/show-case.png"
            projectHeading="E-COMMERCE TEMPLATE"
            gitRepo="https://github.com/AS007R/ecommerce-template"
            git={true}
          />
          <ProjectDisp
            projectUrl="https://bestratedcorners.com/"
            imgSrc="/portfolio/bestRatedCorners.png"
            projectHeading="BEST RATED CORNERS"
            gitRepo=""
            git={false}
          />
          <ProjectDisp
            projectUrl="https://theonepeble.com/"
            imgSrc="/portfolio/theOnePebble.png"
            projectHeading="THE ONE PEBBLE STORE"
            gitRepo=""
            git={false}
          />
          <ProjectDisp
            projectUrl="https://lifelinewelfare.com/"
            imgSrc="/portfolio/lifeline.png"
            projectHeading="LIFELINE WELFARE FOUNDATION"
            gitRepo=""
            git={false}
          />
        </div>
      </section>
    </>
  );
}

export default Porfolio;
