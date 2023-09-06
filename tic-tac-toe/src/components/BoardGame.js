import Square from "./Square";
import { useEffect, useState } from "react";

const BoardGame = ({ player1, player2 }) => {
  const [player1Combination, setPlayer1Combination] = useState([]);
  const [player2Combination, setPlayer2Combination] = useState([]);
  const [rowCounter, setRowConter] = useState(0);
  const [clikedSquare, setClickeSquare] = useState(null);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const isWinning = (combination, playerName) => {
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (
        combination[a] &&
        combination[a] === combination[b] &&
        combination[a] === combination[c]
      ) {
        return combination[a];
      }
    }

    return null;
  };

  //Handle player turn
  useEffect(() => {
    if (clikedSquare) {
      if (rowCounter % 2 === 0) {
        setPlayer1Combination([...player1Combination, clikedSquare]);
        const result = isWinning(player1Combination, "Player 1");
        console.log("result", result);
      } else {
        setPlayer2Combination([...player2Combination, clikedSquare]);
        const result = isWinning(player2Combination, "Player 2");
        console.log("result", result);
      }
    }

    if (rowCounter === 9) {
      console.log("partie terminée");
    }
  }, [rowCounter]);

  //Stock wich square has been clicked

  const incrementRow = () => {
    setRowConter(rowCounter + 1);
  };

  return (
    <>
      <p>Tour n°{rowCounter}: </p>
      {rowCounter % 2 === 0 ? (
        <p>Au tour de {player1}</p>
      ) : (
        <p>Au tour de {player2}</p>
      )}
      <div className="board-game">
        <div className="board-row">
          <Square
            value={rowCounter % 2 === 0 ? "X" : "O"}
            numero="0"
            setSquareValue={setClickeSquare}
            incrementRow={incrementRow}
          />
          <Square
            value={rowCounter % 2 === 0 ? "X" : "O"}
            numero="1"
            setSquareValue={setClickeSquare}
            incrementRow={incrementRow}
          />
          <Square
            value={rowCounter % 2 === 0 ? "X" : "O"}
            numero="2"
            setSquareValue={setClickeSquare}
            incrementRow={incrementRow}
          />
        </div>
        <div className="board-row">
          <Square
            value={rowCounter % 2 === 0 ? "X" : "O"}
            numero="3"
            setSquareValue={setClickeSquare}
            incrementRow={incrementRow}
          />
          <Square
            value={rowCounter % 2 === 0 ? "X" : "O"}
            numero="4"
            setSquareValue={setClickeSquare}
            incrementRow={incrementRow}
          />
          <Square
            value={rowCounter % 2 === 0 ? "X" : "O"}
            numero="5"
            setSquareValue={setClickeSquare}
            incrementRow={incrementRow}
          />
        </div>
        <div className="board-row">
          <Square
            value={rowCounter % 2 === 0 ? "X" : "O"}
            numero="6"
            setSquareValue={setClickeSquare}
            incrementRow={incrementRow}
          />
          <Square
            value={rowCounter % 2 === 0 ? "X" : "O"}
            numero="7"
            setSquareValue={setClickeSquare}
            incrementRow={incrementRow}
          />
          <Square
            value={rowCounter % 2 === 0 ? "X" : "O"}
            numero="8"
            setSquareValue={setClickeSquare}
            incrementRow={incrementRow}
          />
        </div>
      </div>
    </>
  );
};
export default BoardGame;
