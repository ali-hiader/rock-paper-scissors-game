interface Props {
  score: string[];
}
function MainHeader({ score }: Props) {
  return (
    <header className="lg:w-1/2 md:w-[60vw] w-[80vw] mx-auto outline outline-[#606e85] min-h-32 rounded-xl py-4 pr-5 pl-6 flex justify-between">
      <h2 className="lg:text-4xl text-[32px] flex items-center lg:leading-8 leading-7 uppercase font-semibold lg:max-w-44 max-w-36">
        rock paper scissors
      </h2>
      <hgroup className="flex flex-col justify-center items-center bg-white px-10 rounded-xl">
        <h3 className="uppercase sm:text-base text-sm tracking-widest font-bold text-[#2a46c0]">
          score
        </h3>
        <h2 className="text-5xl text-[#3b4363] font-bold">{score.length}</h2>
      </hgroup>
    </header>
  );
}

export default MainHeader;
