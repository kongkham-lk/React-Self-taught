import Box from "./Box";
import { useState } from "react";

export default function Boxgrid() {
  const [boxes, setBoxes] = useState(new Array(9).fill(false));

  const toggleBox = (index) => {
    // update specific state with an array
    setBoxes((oldBoxes) => {
      // .map() => can extract value and index within an array
      return oldBoxes.map((value, i) => {
        if (i === index) return !value;
        return value;
      });
    });
  };

  const reset = () => {
    setBoxes(new Array(9).fill(false));
  };
  return (
    <>
      {boxes.map((b, idx) => (
        <Box key={idx} isActive={b} toggle={() => toggleBox(idx)} />
      ))}
      <button onClick={reset}>Reset</button>
    </>
  );
}
