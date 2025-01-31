import React from "react";
import MainGeneralIcon from "./Icons/main-icons";
import Triangle from "./Icons/bg-triangle";

interface Props {
  gameHandler: (userS: string) => void;
}

function MainGame({ gameHandler }: Props) {
  return (
    <section className="w-[50vw] mx-auto relative grid grid-cols-2 items-center justify-center">
      <MainGeneralIcon
        handleSelection={() => gameHandler("rock")}
        iconName="rock"
      />
      <MainGeneralIcon
        handleSelection={() => gameHandler("paper")}
        iconName="paper"
      />

      <MainGeneralIcon
        handleSelection={() => gameHandler("scissors")}
        buttonCss="col-span-2"
        iconName="scissors"
      />
      <Triangle />
    </section>
  );
}

export default MainGame;
