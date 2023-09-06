import Square from "./Square";
import { useEffect, useState } from "react";

const BoardGame = ({ player1, player2 }) => {
  const [player1Combination, setPlayer1Combination] = useState([]);
  const [player2Combination, setPlayer2Combination] = useState([]);
  const [rowCounter, setRowConter] = useState(0);
  const [clikedSquare, setClickeSquare] = useState(null);
  const [isWinning, setIsWinning] = useState({ win: false, name: null });

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

  const isPlayerWinning = (playerCombination, playerName) => {
    console.log(playerName, playerCombination);

    // Fonction pour vérifier si une combinaison est contenue dans le tableau
    function containsCombination(array, combination) {
      return combination.every((value) => array.includes(value));
    }

    // Vérifier si l'une des combinaisons gagnantes est contenue dans arrayToCheck
    const containsWinningCombination = winningCombinations.some(
      (combination) => {
        return containsCombination(playerCombination, combination);
      }
    );
    if (containsWinningCombination) {
      console.log("Le tableau contient une combinaison gagnante.");
    } else {
      console.log("Le tableau ne contient pas de combinaison gagnante.");
    }
  };

  //Handle player turn
  useEffect(() => {
    if (rowCounter === 9) {
      console.log("partie terminée");
    }
  }, [rowCounter]);

  const incrementRow = () => {
    setRowConter(rowCounter + 1);
  };

  return (
    <>
      {isWinning.win && <h2>{isWinning.name} a gagné</h2>}

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
            setPlayerCombination={
              rowCounter % 2 === 0
                ? setPlayer1Combination
                : setPlayer2Combination
            }
            playerCombination={
              rowCounter % 2 === 0 ? player1Combination : player2Combination
            }
            numero="0"
            setSquareValue={setClickeSquare}
            incrementRow={incrementRow}
          />
          <Square
            value={rowCounter % 2 === 0 ? "X" : "O"}
            setPlayerCombination={
              rowCounter % 2 === 0
                ? setPlayer1Combination
                : setPlayer2Combination
            }
            playerCombination={
              rowCounter % 2 === 0 ? player1Combination : player2Combination
            }
            numero="1"
            setSquareValue={setClickeSquare}
            incrementRow={incrementRow}
          />
          <Square
            value={rowCounter % 2 === 0 ? "X" : "O"}
            setPlayerCombination={
              rowCounter % 2 === 0
                ? setPlayer1Combination
                : setPlayer2Combination
            }
            playerCombination={
              rowCounter % 2 === 0 ? player1Combination : player2Combination
            }
            numero="2"
            setSquareValue={setClickeSquare}
            incrementRow={incrementRow}
          />
        </div>
        <div className="board-row">
          <Square
            value={rowCounter % 2 === 0 ? "X" : "O"}
            setPlayerCombination={
              rowCounter % 2 === 0
                ? setPlayer1Combination
                : setPlayer2Combination
            }
            playerCombination={
              rowCounter % 2 === 0 ? player1Combination : player2Combination
            }
            numero="3"
            setSquareValue={setClickeSquare}
            incrementRow={incrementRow}
          />
          <Square
            value={rowCounter % 2 === 0 ? "X" : "O"}
            setPlayerCombination={
              rowCounter % 2 === 0
                ? setPlayer1Combination
                : setPlayer2Combination
            }
            playerCombination={
              rowCounter % 2 === 0 ? player1Combination : player2Combination
            }
            numero="4"
            setSquareValue={setClickeSquare}
            incrementRow={incrementRow}
          />
          <Square
            value={rowCounter % 2 === 0 ? "X" : "O"}
            setPlayerCombination={
              rowCounter % 2 === 0
                ? setPlayer1Combination
                : setPlayer2Combination
            }
            playerCombination={
              rowCounter % 2 === 0 ? player1Combination : player2Combination
            }
            numero="5"
            setSquareValue={setClickeSquare}
            incrementRow={incrementRow}
          />
        </div>
        <div className="board-row">
          <Square
            value={rowCounter % 2 === 0 ? "X" : "O"}
            setPlayerCombination={
              rowCounter % 2 === 0
                ? setPlayer1Combination
                : setPlayer2Combination
            }
            playerCombination={
              rowCounter % 2 === 0 ? player1Combination : player2Combination
            }
            numero="6"
            setSquareValue={setClickeSquare}
            incrementRow={incrementRow}
          />
          <Square
            value={rowCounter % 2 === 0 ? "X" : "O"}
            setPlayerCombination={
              rowCounter % 2 === 0
                ? setPlayer1Combination
                : setPlayer2Combination
            }
            playerCombination={
              rowCounter % 2 === 0 ? player1Combination : player2Combination
            }
            numero="7"
            setSquareValue={setClickeSquare}
            incrementRow={incrementRow}
          />
          <Square
            value={rowCounter % 2 === 0 ? "X" : "O"}
            setPlayerCombination={
              rowCounter % 2 === 0
                ? setPlayer1Combination
                : setPlayer2Combination
            }
            playerCombination={
              rowCounter % 2 === 0 ? player1Combination : player2Combination
            }
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
