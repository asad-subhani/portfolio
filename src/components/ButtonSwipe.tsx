import React, { ReactNode } from "react";

function ButtonSwipe({
  children,
  text,
}: {
  children: ReactNode;
  text: string;
}) {
  return (
    <button className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-52 overflow-hidden border border-[#FFB400] pl-3 text-white shadow-2xl transition-all before:absolute before:bottom-0 before:right-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#FFB400] before:transition-all before:duration-500   hover:before:right-0 hover:before:w-full rounded-full flex justify-between items-center ">
      <span className="relative z-10 font-bold ">{text}</span>
      <span className="self-right bg-[#FFB400] h-[50px] w-[50px] z-10 rounded-full flex items-center justify-center">
        {children}
      </span>
    </button>
  );
}

export default ButtonSwipe;
