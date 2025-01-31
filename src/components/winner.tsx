interface Props {
  winner: string;
  reset: () => void;
}
function WinnerPage({ winner: result, reset }: Props) {
  return (
    <hgroup className="place-self-center col-span-2 md:col-span-1 order-last md:order-none flex justify-center items-center flex-col gap-1 animate__animated animate__flash ">
      <h2 className="md:text-3xl text-5xl font-semibold uppercase text-center tracking-wider">
        {result === "draw" && "draw"}
        {result === "win" && "you win"}
        {result === "lose" && "you lose"}
      </h2>
      <button
        onClick={reset}
        className={` ${
          result === "lose"
            ? `text-rose-600`
            : result === "draw"
            ? `text-amber-500`
            : "text-emerald-600"
        } bg-white md:px-8 px-10 w-fit  md:text-sm text-lg py-2  font-semibold rounded-md uppercase`}
      >
        {result === "lose" ? `try again` : "play again"}
      </button>
    </hgroup>
  );
}

export default WinnerPage;
