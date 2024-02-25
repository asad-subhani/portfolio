import { ReactNode } from "react";

function Button({ children, text }: { children: ReactNode; text: string }) {
  return (
    <div className="group">
      <button className=" flex gap-2 items-center justify-end rounded-full bg-gray-400 text-black hover:text-white hover:bg-[#5B02AD] h-12 w-12 pl-3 overflow-hidden hover:w-auto ">
        <span className=" text-lg font-bold">{text}</span>
        <span className=" px-[14px] flex justify-center items-center rounded-full">
          {children}
        </span>
      </button>
    </div>
  );
}

export default Button;
