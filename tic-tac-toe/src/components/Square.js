import { useEffect, useState } from "react";
import { useGameContext } from "../infrastructure/context";

const Square = ({ value, squareNumero }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [symbol, setSymbol] = useState(null);
  const [isX, setisX] = useState(null);

  const { round, updatePlayerCombination, incrementRound } = useGameContext();

  useEffect(() => {
    const p1Data = JSON.parse(localStorage.getItem("player1")).combination;
    const p2Data = JSON.parse(localStorage.getItem("player2")).combination;

    if (p1Data.includes(squareNumero)) {
      setIsClicked(true);
      setisX("playerX");
      setSymbol("X");
    }

    if (p2Data.includes(squareNumero)) {
      setIsClicked(true);
      setisX("playerO");
      setSymbol("O");
    }
  }, []);

  const handleClick = () => {
    setIsClicked(true);
    setSymbol(value);
    value === "X" ? setisX("playerX") : setisX("playerO");
    incrementRound();
    updatePlayerCombination(squareNumero);
  };

  return (
    <button
      disabled={isClicked}
      className={`case ${isX}`}
      onClick={handleClick}
    >
      {isClicked && <span>{symbol}</span>}
    </button>
  );
};

export default Square;
