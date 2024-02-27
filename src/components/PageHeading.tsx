function PageHeading({ backText, main }: { backText: string; main: string }) {
  const maintext: string[] = main.split(" ");
  const lastWord: string | undefined = maintext.pop();
  const restString: string = maintext.join(" ");

  return (
    <center className="w-full h-48 relative flex justify-center items-center">
      <h1 className=" absolute scroll-m-20 text-6xl text-gray-600/50 font-extrabold tracking-wider md:text-8xl">
        {backText}
      </h1>
      <h1 className="scroll-m-20 z-10 text-4xl font-extrabold tracking-tight md:text-5xl">
        <span>{restString}</span>
        <span className="text-[#FFB400]">{` ${lastWord}`}</span>
      </h1>
    </center>
  );
}

export default PageHeading;
