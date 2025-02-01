import React from "react";
import MainGeneralIcon from "./Icons/main-icons";
import Triangle from "./Icons/bg-triangle";

interface Props {
  gameHandler: (userS: string) => void;
}

function MainGame({ gameHandler }: Props) {
  return (
    <section className="w-[50%] lg:w-[45%] place-self-center h-96 mx-auto relative grid grid-cols-2 gap-x-32 sm:gap-x-0 items-center justify-center">
      <MainGeneralIcon
        handleSelection={() => gameHandler("paper")}
        iconName="paper"
      />

      <MainGeneralIcon
        handleSelection={() => gameHandler("scissors")}
        iconName="scissors"
      />
      <MainGeneralIcon
        handleSelection={() => gameHandler("rock")}
        buttonCss="col-span-2"
        iconName="rock"
      />
      <Triangle />
    </section>
  );
}

export default MainGame;
