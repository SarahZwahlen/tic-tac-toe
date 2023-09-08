import Square from "./Square";
import { useEffect, useState } from "react";
import GameHistory from "./GameHistory";
import { useGameContext } from "../infrastructure/context";

const BoardGame = () => {
  const [stopGame, setStopGame] = useState({ win: false, name: null });
  const [gameHistory, setGameHistory] = useState(
    JSON.parse(localStorage.getItem("gameHistory")) || []
  );
  const [showHistory, setShowHistory] = useState(false);

  const { round, player1, player2, resetRound, createPlayer, updateRound } =
    useGameContext();

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
    function containsCombination(array, combination) {
      return combination.every((value) => array.includes(value));
    }

    const containsWinningCombination = winningCombinations.some(
      (combination) => {
        return containsCombination(player.combination, combination);
      }
    );

    if (containsWinningCombination) {
      setStopGame({ win: true, name: player.name });
      resetRound();
      saveGameHistory(player.name);
    }
  };

  const saveGameHistory = (winner) => {
    const updatedHistory = [...gameHistory, { winner: winner }];
    setGameHistory(updatedHistory);
    localStorage.setItem("gameHistory", JSON.stringify(updatedHistory));
  };

  //handle data recuperation in case of refresh
  useEffect(() => {
    const player1LS = JSON.parse(localStorage.getItem(player1));
    const player2LS = JSON.parse(localStorage.getItem(player2));
    const roundLS = localStorage.getItem("round");

    if (
      player1LS &&
      player2LS &&
      player1.combination.length === 0 &&
      player2.combination.length === 0
    ) {
      createPlayer(1, { ...player1LS });
      createPlayer(2, { ...player2LS });
      updateRound(roundLS);
    }
  }, []);

  //handle winning and end game detection
  useEffect(() => {
    if (round % 2 === 0) {
      isPlayerWinning(player2);
    } else {
      isPlayerWinning(player1);
    }

    if (round === boardGameValues.length) {
      setStopGame({ winn: false, name: null });
      resetRound();
      saveGameHistory(null);
    }
  }, [player1, player2]);

  const clearHistory = () => {
    setGameHistory([]);
    localStorage.removeItem("gameHistory");
  };

  return (
    <>
      {stopGame.win && (
        <h2 className="display winner">{stopGame.name} a gagné</h2>
      )}
      {stopGame.win && <h2 className="display">La partie est terminée !</h2>}

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
            <Square squareNumero={number} value={round % 2 === 0 ? "X" : "O"} />
          </div>
        ))}
      </div>

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
