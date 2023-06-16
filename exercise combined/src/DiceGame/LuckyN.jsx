import { useState } from "react";
import { getRolls, sum } from "./utils";
import Dice from "./Dice";

export default function LuckyN({ numDice = 2, goal = 7 }) {
  const [dice, setDice] = useState(getRolls(numDice));
  const isWinner = sum(dice) === goal;
  function roll() {
    return setDice(getRolls(numDice));
  }
  return (
    <main className="LuckyN">
      <h1>Lucky{goal}</h1>
      <Dice dice={dice} isWinner={isWinner} />
      <button onClick={roll}>Roll Dice</button>
    </main>
  );
}
