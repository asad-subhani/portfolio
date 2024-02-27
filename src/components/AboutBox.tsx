function AboutBox({ text, number }: { text: string; number: number }) {
  return (
    <div className="rounded-2xl border-gray-400 border-[1px] p-6 shadow-lg ">
      <h1 className="text-5xl font-bold text-[#FFB400]">{`${number}+`}</h1>

      <p className="mt-6 flex items-center gap-x-4 font-semibold">{text}</p>
    </div>
  );
}

export default AboutBox;
