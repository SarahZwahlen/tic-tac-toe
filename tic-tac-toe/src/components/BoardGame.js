import Square from "./Square";
import { useEffect, useState } from "react";
import GameHistory from "./GameHistory";
import { useGameContext } from "../infrastructure/context";

const BoardGame = () => {
  const [isWinning, setIsWinning] = useState({ win: false, name: null });
  const [stopGame, setStopGame] = useState(false);
  const [gameHistory, setGameHistory] = useState(
    JSON.parse(localStorage.getItem("gameHistory")) || []
  );
  const [showHistory, setShowHistory] = useState(false);

  const { round, player1, player2 } = useGameContext();

  const boardGameValues = [0, 1, 2, 3, 4, 5, 6, 7, 8];

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

  const isPlayerWinning = (player) => {
    console.log("name + comb", player.name, player.combination);
    function containsCombination(array, combination) {
      return combination.every((value) => array.includes(value));
    }

    const containsWinningCombination = winningCombinations.some(
      (combination) => {
        return containsCombination(player.combination, combination);
      }
    );

    if (containsWinningCombination) {
      setStopGame(true);
      setIsWinning({ win: true, name: player.name });
    }
  };

  useEffect(() => {
    if (round % 2 === 0) {
      isPlayerWinning(player2);
    } else {
      isPlayerWinning(player1);
    }

    if (round === 9) {
      setStopGame(true);
    }
  }, [player1, player2]);

  useEffect(() => {
    if (isWinning.win || round === 9) {
      const updatedHistory = [
        ...gameHistory,
        { winner: isWinning.name || null },
      ];
      setGameHistory(updatedHistory);
      localStorage.setItem("gameHistory", JSON.stringify(updatedHistory));
    }
  }, [isWinning, stopGame]);

  const clearHistory = () => {
    setGameHistory([]);
    localStorage.removeItem("gameHistory");
  };
  return (
    <>
      {isWinning.win && (
        <h2 className="display winner">{isWinning.name} a gagné</h2>
      )}
      {stopGame && <h2 className="display">La partie est terminée !</h2>}

      {!stopGame && (
        <>
          {round % 2 === 0 ? (
            <p className="display">
              Au tour de <span className="playerX"> {player1.name} </span>
            </p>
          ) : (
            <p className="display">
              Au tour de <span className="playerO"> {player2.name} </span>
            </p>
          )}
          <div className="container">
            {boardGameValues.map((number) => (
              <div className="case" key={`case ${number}`}>
                <Square
                  squareNumero={number}
                  value={round % 2 === 0 ? "X" : "O"}
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

export default BoardGame;
