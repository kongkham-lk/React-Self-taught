import "./Dice.css";
import Die from "./Die";

export default function Dice({ dice, color, isWinner }) {
  return (
    <section className="Dice">
      {dice.map((v, i) => (
        <Die key={i} val={v} color={color} />
      ))}
      {isWinner && (
        <span style={{ color: "green", fontWeight: 700, fontSize: "larger" }}>
          WINNER!
        </span>
      )}
    </section>
  );
}
