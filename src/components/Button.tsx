import { ReactNode } from "react";

function Button({
  children,
  text,
  active,
  handleClick,
}: {
  children: ReactNode;
  text: string;
  active: boolean;
  handleClick: (text: string) => void;
}) {
  return (
    <div className="group">
      <button
        className={`flex gap-2 items-center justify-end rounded-full ${
          !active ? "bg-gray-400/50 " : "bg-[#FFB400]"
        } hover:text-white  h-12 w-12 pl-3 overflow-hidden hover:w-auto transition-all ease-out hover:bg-[#FFB400]`}
        onClick={() => {
          handleClick(text);
        }}
      >
        <span className=" text-lg font-bold">{text}</span>
        <span className=" px-[14px] flex justify-center items-center rounded-full">
          {children}
        </span>
      </button>
    </div>
  );
}

export default Button;
