const { useState } = require("react");

function Square({ value, onSquareClick }) {
  return (
    // when click, button WILL HAS onSquareClick from onClick
    // => THEN onSquareClick WILL BE SENT TO Square under parent component
    // => THEN Square will SET VALUE AND ACTIVATE handleClick() FUNCTION
    // => the board will then re-render the board (including nextplayer and winner)
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  // set the first click as "X" turn
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    // create a copy of square array as nextSquares
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    // // the update function will re-render the components that use squares state (Board) and its child component
    // setSquares(nextSquares);
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        {/* onSquareClick == onclick => initially come from button under Square component */}
        {/* when click, it will be activate and run handleClick() */}
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function Game() {
  // create array with 9 element and set each to null => square is array
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  // // always render the last move
  // const currentSquares = history[history.length - 1];
  // render the currently selected move
  const currentSquares = history[currentMove];
  // link xIsNext with currentMove
  const xIsNext = currentMove % 2 === 0;

  function handlePlay(nextSquares) {
    // pushing nextsquare to history array
    // if click on the previous move => effect currentMove's value => reset history
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    // reset the currentMove when go back history
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  // history.map((element, index)
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        {/* the board will check next player, the symboal, and trigger handlePlay() (set history function) */}
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    // a,b,c are numbers => check if the index element is not null and all index element are equivalent then return that symbol ("X" or "O")
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
