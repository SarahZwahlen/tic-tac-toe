import Square from "./Square";
import { useEffect, useState } from "react";

const BoardGame = ({ player1, player2 }) => {
  const [player1Combination, setPlayer1Combination] = useState([]);
  const [player2Combination, setPlayer2Combination] = useState([]);
  const [roundCounter, setRoundCounter] = useState(0);
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
      setIsWinning({ win: true, name: playerName });
    }
  };

  useEffect(() => {
    if (roundCounter % 2 === 0) {
      isPlayerWinning(player1Combination, player1);
    } else {
      isPlayerWinning(player2Combination, player2);
    }

    if (roundCounter === 9) {
      console.log("partie terminée");
    }
  }, [roundCounter]);

  const incrementRow = () => {
    setRoundCounter(roundCounter + 1);
  };

  return (
    <>
      {isWinning.win && <h2>{isWinning.name} a gagné</h2>}

      <p>Tour n°{roundCounter}: </p>
      {roundCounter % 2 === 0 ? (
        <p>Au tour de {player1}</p>
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
            value={roundCounter % 2 === 0 ? "X" : "O"}
            setPlayerCombination={
              roundCounter % 2 === 0
                ? setPlayer1Combination
                : setPlayer2Combination
            }
            playerCombination={
              roundCounter % 2 === 0 ? player1Combination : player2Combination
            }
            numero="0"
            setSquareValue={setClickeSquare}
            incrementRow={incrementRow}
          />
          </div>
          <div className="case">
          <Square
            value={roundCounter % 2 === 0 ? "X" : "O"}
            setPlayerCombination={
              roundCounter % 2 === 0
                ? setPlayer1Combination
                : setPlayer2Combination
            }
            playerCombination={
              roundCounter % 2 === 0 ? player1Combination : player2Combination
            }
            numero="1"
            setSquareValue={setClickeSquare}
            incrementRow={incrementRow}
          />
          </div>
          <div className="case">
          <Square
            value={roundCounter % 2 === 0 ? "X" : "O"}
            setPlayerCombination={
              roundCounter % 2 === 0
                ? setPlayer1Combination
                : setPlayer2Combination
            }
            playerCombination={
              roundCounter % 2 === 0 ? player1Combination : player2Combination
            }
            numero="2"
            setSquareValue={setClickeSquare}
            incrementRow={incrementRow}
          />
        </div>
        <div className="case">
          <Square
            value={roundCounter % 2 === 0 ? "X" : "O"}
            setPlayerCombination={
              roundCounter % 2 === 0
                ? setPlayer1Combination
                : setPlayer2Combination
            }
            playerCombination={
              roundCounter % 2 === 0 ? player1Combination : player2Combination
            }
            numero="3"
            setSquareValue={setClickeSquare}
            incrementRow={incrementRow}
          />
          </div>
          <div className="case">
          <Square
            value={roundCounter % 2 === 0 ? "X" : "O"}
            setPlayerCombination={
              roundCounter % 2 === 0
                ? setPlayer1Combination
                : setPlayer2Combination
            }
            playerCombination={
              roundCounter % 2 === 0 ? player1Combination : player2Combination
            }
            numero="4"
            setSquareValue={setClickeSquare}
            incrementRow={incrementRow}
          />
          </div>
          <div className="case">
          <Square
            value={roundCounter % 2 === 0 ? "X" : "O"}
            setPlayerCombination={
              roundCounter % 2 === 0
                ? setPlayer1Combination
                : setPlayer2Combination
            }
            playerCombination={
              roundCounter % 2 === 0 ? player1Combination : player2Combination
            }
            numero="5"
            setSquareValue={setClickeSquare}
            incrementRow={incrementRow}
          />
        </div>
        <div className="case">
          <Square
            value={roundCounter % 2 === 0 ? "X" : "O"}
            setPlayerCombination={
              roundCounter % 2 === 0
                ? setPlayer1Combination
                : setPlayer2Combination
            }
            playerCombination={
              roundCounter % 2 === 0 ? player1Combination : player2Combination
            }
            numero="6"
            setSquareValue={setClickeSquare}
            incrementRow={incrementRow}
          />
          </div>
          <div className="case">
          <Square
            value={roundCounter % 2 === 0 ? "X" : "O"}
            setPlayerCombination={
              roundCounter % 2 === 0
                ? setPlayer1Combination
                : setPlayer2Combination
            }
            playerCombination={
              roundCounter % 2 === 0 ? player1Combination : player2Combination
            }
            numero="7"
            setSquareValue={setClickeSquare}
            incrementRow={incrementRow}
          />
          </div>
          <div className="case">
          <Square
            value={roundCounter % 2 === 0 ? "X" : "O"}
            setPlayerCombination={
              roundCounter % 2 === 0
                ? setPlayer1Combination
                : setPlayer2Combination
            }
            playerCombination={
              roundCounter % 2 === 0 ? player1Combination : player2Combination
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

