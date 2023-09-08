import { useEffect, useState, useContext } from "react";
import { GameContext } from "../context/GameContext";

const Square = ({ isPlayer1, squareIsClicked, numero }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [symbol, setSymbol] = useState(null);
  const [isX, setisX] = useState(null);

  const {updatePlayerCombination} = useContext(GameContext)

  useEffect(() => {
    const p1Data = JSON.parse(localStorage.getItem("player1")).combination;
    const p2Data = JSON.parse(localStorage.getItem("player2")).combination;

    if (p1Data.includes(numero)) {
      setIsClicked(true);
      setisX("playerX");
      setSymbol("X");
    }

    if (p2Data.includes(numero)) {
      setIsClicked(true);
      setisX("playerO");
      setSymbol("O");
    }
  }, []);

  const handleClick = () => {
    updatePlayerCombination(isPlayer1, numero)
    setIsClicked(true);
    setSymbol(isPlayer1);
    squareIsClicked();
    isPlayer1 === "X" ? setisX("playerX") : setisX("playerO");
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
