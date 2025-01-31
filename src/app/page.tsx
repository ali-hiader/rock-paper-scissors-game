"use client";

import { useState } from "react";

import MainHeader from "@/components/main-header";
import HouseSelectedPage from "@/components/house-selected";
import UserSelectedPage from "@/components/user-selected";
import MainGame from "@/components/main-game";
import WinnerPage from "@/components/winner";
import RulesPage from "@/components/dialog";

const gameRoles = ["rock", "paper", "scissors"];

const winCombinations = [
  ["rock", "scissors"],
  ["scissors", "paper"],
  ["paper", "rock"],
];

const loseCombinations = [
  ["paper", "scissors"],
  ["rock", "paper"],
  ["scissors", "rock"],
];

function HomePage() {
  const [userSelected, setUserSelected] = useState<string | null>(null);
  const [houseSelected, setHouseSelected] = useState<string | null>(null);
  const [winner, setWinner] = useState<string | null>(null);
  const [score, setScore] = useState<string[]>([]);
  // console.log(score);
  function handleHouseSelecting() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const randomTdx = Math.floor(Math.random() * 3);
        resolve(gameRoles[randomTdx]);
      }, 500);
    });
  }

  async function gameHandler(userS: string) {
    setUserSelected(userS);
    const houseS = await handleHouseSelecting();
    setHouseSelected(houseS as string);

    if (userS === houseS) {
      return setWinner("draw");
    }

    const selectedCombo = [userS, houseS];

    const isWinner = winCombinations.find(
      (i) => i[0] === selectedCombo[0] && i[1] === selectedCombo[1]
    );
    const isLoser = loseCombinations.find(
      (i) => i[0] === selectedCombo[0] && i[1] === selectedCombo[1]
    );

    if (isWinner) {
      setWinner("win");
      setScore((p) => [...p, "win"]);
    }
    if (isLoser) {
      setWinner("lose");
      setScore((p) => {
        console.log(p);
        p.pop();
        console.log(p);
        return p;
      });
    }
  }

  function resetGame() {
    setUserSelected(null);
    setHouseSelected(null);
    setWinner(null);
  }

  return (
    <main className="w-full relative max-h-[1200px] max-w-[1400px] grid grid-rows-[auto_1fr] py-7 px-7">
      <MainHeader score={score} />

      {userSelected ? (
        <section
          className={`${
            winner
              ? "md:grid-cols-3 max-w-lg grid-cols-2 md:grid-rows-1 grid-rows-[auto_1fr]"
              : "grid-cols-2"
          } md:min-w-[700px] max-h-96 mx-auto relative grid md:gap-0 gap-10 py-6`}
        >
          <UserSelectedPage winner={winner} userSelected={userSelected} />
          {winner ? <WinnerPage winner={winner} reset={resetGame} /> : null}
          <HouseSelectedPage winner={winner} houseSelected={houseSelected} />
        </section>
      ) : (
        <MainGame gameHandler={gameHandler} />
      )}

      <RulesPage />
    </main>
  );
}

export default HomePage;

// Score
// Rules

// You Picked
// The House Picked

// You Win
// You Lose

// Play Again
