import Square from "./Square";
import { useEffect, useState } from "react";

const BoardGame = ({ player1, player2 }) => {
  const [player1Combination, setPlayer1Combination] = useState([]);
  const [player2Combination, setPlayer2Combination] = useState([]);
  const [rowCounter, setRowCounter] = useState(0);
  const [clickedSquare, setClickeSquare] = useState(null);
  const [winner, setWinner] = useState(null);

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

  const isWinning = (combination) => {
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

  useEffect(() => {
    if (clickedSquare && !winner) {
      const currentPlayerCombination =
        rowCounter % 2 === 0 ? player1Combination : player2Combination;
      const updatedCombination = [...currentPlayerCombination, clickedSquare];
      if (isWinning(updatedCombination)) {
        setWinner(rowCounter % 2 === 0 ? player1 : player2);
      } else {
        if (rowCounter === 8) {
          // All squares are filled, it's a draw
          setWinner("Draw");
        } else {
          // Switch to the next player's turn
          setRowCounter(rowCounter + 1);
        }
      }
    }
  }, [clickedSquare, rowCounter, player1, player2, player1Combination, player2Combination, winner]);

  const incrementRow = () => {
    setRowCounter(rowCounter + 1);
  };

  return (
    <>
      <p className="display playerO">Tour n°{rowCounter + 1}:</p>
      {winner ? (
        winner === "Draw" ? (
          <p className="display">Match null !</p>
        ) : (
          <p className="display">{winner} a gagné !</p>
        )
      ) : (
        rowCounter % 2 === 0 ? (
          <p className="display">Au tour de <span className="playerX"> {player1} </span></p>
        ) : (
          <p className="display">Au tour de <span className="playerO"> {player2} </span></p>
        )
      )}
      <div className="container">
        <div className="case">
          <Square
            value={rowCounter % 2 === 0 ? "X" : "O"}
            numero="0"
            setSquareValue={setClickeSquare}
            incrementRow={incrementRow}
          />
          </div>
          <div className="case">
          <Square
            value={rowCounter % 2 === 0 ? "X" : "O"}
            numero="1"
            setSquareValue={setClickeSquare}
            incrementRow={incrementRow}
          />
          </div>
          <div className="case">
          <Square
            value={rowCounter % 2 === 0 ? "X" : "O"}
            numero="2"
            setSquareValue={setClickeSquare}
            incrementRow={incrementRow}
          />
        </div>
        <div className="case">
          <Square
            value={rowCounter % 2 === 0 ? "X" : "O"}
            numero="3"
            setSquareValue={setClickeSquare}
            incrementRow={incrementRow}
          />
          </div>
          <div className="case">
          <Square
            value={rowCounter % 2 === 0 ? "X" : "O"}
            numero="4"
            setSquareValue={setClickeSquare}
            incrementRow={incrementRow}
          />
          </div>
          <div className="case">
          <Square
            value={rowCounter % 2 === 0 ? "X" : "O"}
            numero="5"
            setSquareValue={setClickeSquare}
            incrementRow={incrementRow}
          />
        </div>
        <div className="case">
          <Square
            value={rowCounter % 2 === 0 ? "X" : "O"}
            numero="6"
            setSquareValue={setClickeSquare}
            incrementRow={incrementRow}
          />
          </div>
          <div className="case">
          <Square
            value={rowCounter % 2 === 0 ? "X" : "O"}
            numero="7"
            setSquareValue={setClickeSquare}
            incrementRow={incrementRow}
          />
          </div>
          <div className="case">
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

