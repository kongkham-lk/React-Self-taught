import { useState } from "react";

export default function ScoreKeeper({ numPlayers = 3, target = 5 }) {
    const [scores, setScores] = useState(new Array(numPlayers).fill(0));
    const [foundWinner, setFoundWinner] = useState(false);
    const incrementScore = (index) => {
        setScores((prevScore) => {
            // const copy = [...prevScore];
            // copy[index] += 1;
            // return copy;
            return prevScore.map((score, idx) => {
                if (index === idx && foundWinner !== true) {
                    if (score === target - 1) {
                        setFoundWinner((winner) => (winner = true));
                    }
                    return (score += 1);
                }
                return score;
            });
        });
    };
    const reset = () => {
        setFoundWinner((resetWinner) => (resetWinner = false));
        setScores(new Array(numPlayers).fill(0));
    };
    return (
        <div>
            <h1>Score Keeper</h1>
            <ul>
                {scores.map((pScore, index) => {
                    return (
                        <li key={index} style={{ listStyle: "none" }}>
                            Player {index + 1}: {pScore}
                            <button
                                style={{ margin: "10px" }}
                                onClick={() => incrementScore(index)}
                            >
                                +1
                            </button>
                            {pScore >= target && <span style={{
                                color: "green",
                                fontWeight: 500
                            }}>WINNER!</span>}
                        </li>
                    );
                })}
            </ul>
            <button onClick={reset}>Reset</button>
        </div>
    );
}
