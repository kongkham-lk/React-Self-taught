import ColorBox from "./ColorBox";
import "./ColorBoxGrid.css";

export default function ColorBoxGrid({ colors }) {
  let boxes = [];
  for (let i = 0; i < 25; i++) {
    boxes.push(<ColorBox colors={colors} />);
  }
  // boxes = arr.map(() => {<ColorBox colors={colors} />};
  return <div className="ColorBoxGrid">{boxes}</div>;
}
