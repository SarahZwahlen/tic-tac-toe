import { createContext, useContext, useState } from "react";

const GameContext = createContext({
  round: 0,
  player1: null,
  player2: null,
  createPlayer: (number, playerData) => {},
  resetPlayers: () => {},
  updatePlayerCombination: (number, playerData) => {},
  incrementRound: () => {},
  resetRound: () => {},
  updateRound: (value) => {},
});

const useGameContext = () => useContext(GameContext);

const GameProvider = ({ children }) => {
  const [player1, setPlayer1] = useState({
    name: null,
    combination: [],
    isCurrentPlayer: true,
  });
  const [player2, setPlayer2] = useState({
    name: null,
    combination: [],
    isCurrentPlayer: false,
  });

  const [round, setRound] = useState(0);

  const createPlayer = (number, playerData) => {
    number === 1
      ? setPlayer1({ ...playerData, isCurrentPlayer: true })
      : setPlayer2({ ...playerData, isCurrentPlayer: false });
  };

  const updatePlayerCombination = (newValue) => {
    round % 2 === 0
      ? localStorage.setItem(
          "player1",
          JSON.stringify({
            ...player1,
            combination: [...player1.combination, newValue],
          })
        )
      : localStorage.setItem(
          "player2",
          JSON.stringify({
            ...player2,
            combination: [...player2.combination, newValue],
          })
        );

    round % 2 === 0
      ? setPlayer1({
          ...player1,
          combination: [...player1.combination, newValue],
        })
      : setPlayer2({
          ...player2,
          combination: [...player2.combination, newValue],
        });
  };

  const incrementRound = () => {
    localStorage.setItem("round", round + 1);
    setRound(round + 1);
  };

  const resetRound = () => {
    localStorage.removeItem("round");
    setRound(0);
  };

  const resetPlayers = () => {
    setPlayer1({ name: null, combination: [], isCurrentPlayer: true });
    setPlayer2({ name: null, combination: [], isCurrentPlayer: false });
  };

  const updateRound = (value) => {
    setRound(value);
  };

  const gameContext = {
    player1,
    player2,
    round,
    createPlayer,
    incrementRound,
    resetRound,
    resetPlayers,
    updateRound,
    updatePlayerCombination,
  };

  return (
    <GameContext.Provider value={gameContext}>{children}</GameContext.Provider>
  );
};

export { useGameContext, GameProvider };
