import Square from "./Square";
import { useEffect, useState } from "react";

const BoardGame = ({ player1, player2 }) => {
  const [player1Combination, setPlayer1Combination] = useState([]);
  const [player2Combination, setPlayer2Combination] = useState([]);
  const [roundCounter, setRoundCounter] = useState(0);
  const [isWinning, setIsWinning] = useState({ win: false, name: null });

  const [stopGame, setStopGame] = useState(false);

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
  const squareIsClicked = (numero) => {
    setRoundCounter(roundCounter + 1);
    if (roundCounter % 2 === 0) {
      setPlayer1Combination([...player1Combination, parseInt(numero)]);
      isPlayerWinning(player1Combination, player1);
    } else {
      setPlayer2Combination([...player2Combination, parseInt(numero)]);
    }
  };

  const isPlayerWinning = (playerCombination, playerName) => {
    function containsCombination(array, combination) {
      return combination.every((value) => array.includes(value));
    }

    const containsWinningCombination = winningCombinations.some(
      (combination) => {
        return containsCombination(playerCombination, combination);
      }
    );
    if (containsWinningCombination) {
      setStopGame(true);
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
      setStopGame(true);
      console.log("stop", stopGame);
    }
  }, [roundCounter]);

  useEffect(() => {
    setPlayer1Combination([]);
    setPlayer2Combination([]);
  }, [player1, player2]);

  return (
    <>
      {isWinning.win && <h2 className="display">{isWinning.name} a gagné</h2>}
      {stopGame && <h2 className="display">La partie est terminée !</h2>}

      {!stopGame && (
        <>
          {roundCounter % 2 === 0 ? (
            <p className="display">
              Au tour de <span className="playerX"> {player1} </span>
            </p>
          ) : (
            <p className="display">
              Au tour de <span className="playerO"> {player2} </span>
            </p>
          )}
          <div className="container">
            <div className="case">
              <Square
                numero="0"
                value={roundCounter % 2 === 0 ? "X" : "O"}
                squareIsClicked={squareIsClicked}
              />
            </div>
            <div className="case">
              <Square
                numero="1"
                value={roundCounter % 2 === 0 ? "X" : "O"}
                squareIsClicked={squareIsClicked}
              />
            </div>
            <div className="case">
              <Square
                numero="2"
                value={roundCounter % 2 === 0 ? "X" : "O"}
                squareIsClicked={squareIsClicked}
              />
            </div>
            <div className="case">
              <Square
                numero="3"
                value={roundCounter % 2 === 0 ? "X" : "O"}
                squareIsClicked={squareIsClicked}
              />
            </div>
            <div className="case">
              <Square
                numero="4"
                value={roundCounter % 2 === 0 ? "X" : "O"}
                squareIsClicked={squareIsClicked}
              />
            </div>
            <div className="case">
              <Square
                numero="5"
                value={roundCounter % 2 === 0 ? "X" : "O"}
                squareIsClicked={squareIsClicked}
              />
            </div>
            <div className="case">
              <Square
                numero="6"
                value={roundCounter % 2 === 0 ? "X" : "O"}
                squareIsClicked={squareIsClicked}
              />
            </div>
            <div className="case">
              <Square
                numero="7"
                value={roundCounter % 2 === 0 ? "X" : "O"}
                squareIsClicked={squareIsClicked}
              />
            </div>
            <div className="case">
              <Square
                numero="8"
                value={roundCounter % 2 === 0 ? "X" : "O"}
                squareIsClicked={squareIsClicked}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BoardGame;
