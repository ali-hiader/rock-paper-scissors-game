interface Props {
  winner: string;
  reset: () => void;
}
function WinnerPage({ winner: result, reset }: Props) {
  return (
    <hgroup className="place-self-center flex justify-center flex-col gap-1 animate__animated animate__flash ">
      <h2 className="text-3xl font-semibold uppercase text-center tracking-wider">
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
        } bg-white px-8 text-sm py-2 font-semibold rounded-md uppercase`}
      >
        {result === "lose" ? `try again` : "play again"}
      </button>
    </hgroup>
  );
}

export default WinnerPage;
