import Square from "./Square";
import { useEffect, useState } from "react";

const BoardGame = () => {
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

  const isWinning = () => {
    throw new Error("isWinning not implemented");
  };

  //Handle player turn
  useEffect(() => {
    if (clikedSquare) {
      if (rowCounter % 2 === 0) {
        setPlayer1Combination([...player1Combination, clikedSquare]);
      } else {
        setPlayer2Combination([...player2Combination, clikedSquare]);
      }
    }
    // isWinning();
  }, [rowCounter]);

  //Stock wich square has been clicked
  useEffect(() => {
    console.log("player2 comb", player2Combination);
    console.log("player 1 comb", player1Combination);
  }, [player1Combination, player2Combination]);

  
  const setPlayerComb = (value) => {
    setPlayer1Combination([...player1Combination, value]);
  };

  const incrementRow = () => {
    setRowConter(rowCounter + 1);
  };

  return (
    <>
      <p>Tour : </p>
      {rowCounter % 2 === 0 ? (
        <p>Au tour de joueur 1</p>
      ) : (
        <p>Au tour de joueur 2</p>
      )}
      <div className="board-game">
        <div className="board-row">
          <Square
            numero="0"
            setSquareValue={setClickeSquare}
            incrementRow={incrementRow}
          />
          <Square
            numero="1"
            setSquareValue={setClickeSquare}
            incrementRow={incrementRow}
          />
          <Square
            numero="2"
            setSquareValue={setClickeSquare}
            incrementRow={incrementRow}
          />
        </div>
        <div className="board-row">
          <Square
            numero="3"
            setSquareValue={setClickeSquare}
            incrementRow={incrementRow}
          />
          <Square
            numero="4"
            setSquareValue={setClickeSquare}
            incrementRow={incrementRow}
          />
          <Square
            numero="5"
            setSquareValue={setClickeSquare}
            incrementRow={incrementRow}
          />
        </div>
        <div className="board-row">
          <Square
            numero="6"
            setSquareValue={setClickeSquare}
            incrementRow={incrementRow}
          />
          <Square
            numero="7"
            setSquareValue={setClickeSquare}
            incrementRow={incrementRow}
          />
          <Square
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
