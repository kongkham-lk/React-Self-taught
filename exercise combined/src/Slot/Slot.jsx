export default function Slot() {
    let vals = Array(3).fill(null);
    const rand = 3;
    const val1 = Math.floor(Math.random() * rand) + 1;
    const val2 = Math.floor(Math.random() * rand) + 1;
    const val3 = Math.floor(Math.random() * rand) + 1;
    const match = val1 === val2 && val2 === val3;
    const result = match ? "You Win!" : "You Lose!";
    const style = { color: match ? "green" : "red" };
    return (
      <>
        <h1>
          {val1} {val2} {val3}
        </h1>
        <h2 style={style}>{result}</h2>
        {match && <h3>Congrats!!!</h3>}
      </>
    );
  }