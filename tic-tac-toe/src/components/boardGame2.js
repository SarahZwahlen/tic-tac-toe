import Square from "./Square";
import { useEffect, useMemo, useState } from "react";
import GameHistory from "./GameHistory";

const playerX = "X";
const playerO = "O";

const initialBoard = {
  0: null,
  1: null,
  2: null,
  3: null,
  4: null,
  5: null,
  6: null,
  7: null,
  8: null,
};
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

const BoardGame2 = ({ player1, player2 }) => {
  const players = useMemo(() => {
    return { [playerX]: player1, [playerO]: player2 };
  }, [player1, player2]);
  const [winner, setWinner] = useState(null);
  const [stopGame, setStopGame] = useState(false);
  const [gameHistory, setGameHistory] = useState(
    JSON.parse(localStorage.getItem("gameHistory")) || []
  );
  const [showHistory, setShowHistory] = useState(false);

  const [board, setBoard] = useState(initialBoard);
  const [currentPlayerSymbol, setCurrentPlayerSymbol] = useState(playerX);

  const squareIsClicked = (numero) => {
    // localStorage.setItem("round", roundCounter + 1);
    const updatedBoard = {
      ...board,
      [numero]: currentPlayerSymbol,
    };
    setBoard(updatedBoard);
    isPlayerWinning(updatedBoard, currentPlayerSymbol);
    setCurrentPlayerSymbol(currentPlayerSymbol === playerX ? playerO : playerX);
  };

  const isPlayerWinning = (board, playerSymbol) => {
    function containsCombination(array, combination) {
      return combination.every((value) => array.includes(value));
    }
    const cells = Object.entries(board)
      .filter(([_, symbol]) => symbol === playerSymbol)
      .flatMap(([cellNumber]) => parseInt(cellNumber, 10));

    const containsWinningCombination = winningCombinations.some(
      (combination) => {
        return containsCombination(cells, combination);
      }
    );

    if (containsWinningCombination) {
      setStopGame(true);
      setWinner(players[playerSymbol]);
    }
  };

  useEffect(() => {
    if (Object.values(board).filter((symbol) => symbol !== null).length === 9) {
      setStopGame(true);
    }
  }, [board]);

  //reset players
  useEffect(() => {
    setBoard(initialBoard);
  }, [player1, player2]);

  const clearHistory = () => {
    setGameHistory([]);
    localStorage.removeItem("gameHistory");
  };

  return (
    <>
      {winner && <h2 className="display winner">{winner} a gagné</h2>}
      {stopGame && <h2 className="display">La partie est terminée !</h2>}

      {!stopGame && (
        <>
          <p className="display">
            Au tour de &nbsp;
            <span
              className={
                currentPlayerSymbol === playerX ? "playerX" : "playerO"
              }
            >
              {" "}
              {players[currentPlayerSymbol]}{" "}
            </span>
          </p>
          <div className="container">
            {Object.keys(board).map((number) => (
              <div className="case" key={`case ${number}`}>
                <Square
                  numero={number}
                  value={currentPlayerSymbol}
                  squareIsClicked={squareIsClicked}
                />
              </div>
            ))}
          </div>
        </>
      )}
      <div className="title">
        <button
          className="reset"
          onClick={() => {
            setShowHistory(!showHistory);
          }}
        >
          Historique des Parties
        </button>
        <button className="reset" onClick={clearHistory}>
          Vider l'historique
        </button>
        {}
        {showHistory && <GameHistory history={gameHistory} />}
      </div>
    </>
  );
};

export default BoardGame2;
