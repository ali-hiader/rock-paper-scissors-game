import React from "react";
import MainGeneralIcon from "./Icons/main-icons";

interface Props {
  userSelected: string | null;
  winner: string | null;
}

function UserSelectedPage({ userSelected, winner }: Props) {
  return (
    <div className="grid grid-rows-[1fr_4fr] gap-4">
      <h2 className="flex items-end md:text-xl tracking-widest justify-center font-semibold uppercase">
        You Picked
      </h2>
      {userSelected === "rock" && (
        <MainGeneralIcon
          buttonCss={`${winner === "win" ? "shadow-bigShadow" : null}`}
          iconName="rock"
          selected
        />
      )}

      {userSelected === "paper" && (
        <MainGeneralIcon
          buttonCss={`${winner === "win" ? "shadow-bigShadow" : null}`}
          iconName="paper"
          selected
        />
      )}

      {userSelected === "scissors" && (
        <MainGeneralIcon
          buttonCss={`${winner === "win" ? "shadow-bigShadow" : null}`}
          iconName="scissors"
          selected
        />
      )}
    </div>
  );
}

export default UserSelectedPage;
