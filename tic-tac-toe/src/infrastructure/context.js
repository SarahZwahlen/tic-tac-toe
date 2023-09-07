import { createContext, useContext, useState } from "react";

const GameContext = createContext({
  round: 0,
  player1: null,
  player2: null,
  createPlayer: (number, playerData) => {},
  resetPlayers: () => {},
  updatePlayer: (number, playerData) => {},
  incrementRound: () => {},
  resetRound: () => {},
});

const useGameContext = () => useContext(GameContext);

const GameProvider = ({ children }) => {
  const [player1, setPlayer1] = useState({ name: null, combination: [] });
  const [player2, setPlayer2] = useState({ name: null, combination: [] });
  const [round, setRound] = useState(0);

  const createPlayer = (number, playerData) => {
    number === 1 ? setPlayer1(playerData) : setPlayer2(playerData);
  };

  const updatePlayer = (number, playerData) => {
    number === 1 ? setPlayer1(playerData) : setPlayer2(playerData);
  };

  const incrementRound = () => {
    setRound(round + 1);
  };

  const resetRound = () => {
    setRound(0);
  };

  const resetPlayers = () => {
    setPlayer1({ name: null, combination: [] });
    setPlayer2({ name: null, combination: [] });
  };

  const gameContext = {
    player1,
    player2,
    round,
    createPlayer,
    incrementRound,
    updatePlayer,
    resetRound,
    resetPlayers,
  };

  return (
    <GameContext.Provider value={gameContext}>{children}</GameContext.Provider>
  );
};

export { useGameContext, GameProvider };
