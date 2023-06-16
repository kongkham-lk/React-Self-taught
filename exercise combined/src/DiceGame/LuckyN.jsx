import { useState } from "react";
import { getRolls } from "./utils";
import Dice from "./Dice";
import Button from "./Button";

export default function LuckyN({
  title = "Dice Game",
  numDice = 2,
  winnerCheck
}) {
  const [dice, setDice] = useState(getRolls(numDice));
  const isWinner = winnerCheck(dice);
  function roll() {
    return setDice(getRolls(numDice));
  }
  return (
    <main className="LuckyN">
      <h1>{title}</h1>
      <Dice dice={dice} isWinner={isWinner} />
      {/* passing function that update State as props */}
      <Button label="Re-roll Dice" clickFunc={roll} />
      {/* <button onClick={roll}>Re-roll Dice</button> */}
    </main>
  );
}
