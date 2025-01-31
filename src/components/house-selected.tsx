import React from "react";
import MainGeneralIcon from "./Icons/main-icons";

interface Props {
  houseSelected: string | null;
  winner: string | null;
}

function HouseSelectedPage({ houseSelected, winner }: Props) {
  return (
    <>
      <div className="grid grid-rows-[1fr_4fr] gap-4">
        <h2 className="flex items-end tracking-widest justify-center text-base md:text-xl font-semibold uppercase">
          The House Picked
        </h2>
        {!houseSelected && (
          <div className="place-self-center size-44 shadow-shadow felx-1 flex items-center justify-center rounded-full bg-[#3b4363]"></div>
        )}
        {houseSelected === "rock" && (
          <MainGeneralIcon
            buttonCss={`${winner === "lose" ? "shadow-bigShadow" : null}`}
            iconName="rock"
            selected
          />
        )}
        {houseSelected === "paper" && (
          <MainGeneralIcon
            buttonCss={`${winner === "lose" ? "shadow-bigShadow" : null}`}
            iconName="paper"
            selected
          />
        )}
        {houseSelected === "scissors" && (
          <MainGeneralIcon
            buttonCss={`${winner === "lose" ? "shadow-bigShadow" : null}`}
            iconName="scissors"
            selected
          />
        )}
      </div>
    </>
  );
}

export default HouseSelectedPage;
