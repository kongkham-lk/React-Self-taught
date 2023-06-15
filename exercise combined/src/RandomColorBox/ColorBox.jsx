import { useState } from "react";
import "./ColorBox.css";

function randomColor(colors) {
  const rand = Math.floor(Math.random() * colors.length);
  return colors[rand];
}

export default function ColorBox({ colors }) {
  const [color, setColor] = useState(randomColor(colors));
  const handleClick = () => {
    setColor(randomColor(colors));
  };
  return (
    <div
      className="ColorBox"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    ></div>
  );
}
