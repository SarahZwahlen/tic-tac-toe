import { useEffect, useState } from "react";

const Square = ({ value, squareIsClicked, numero }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [symbol, setSymbol] = useState(null);
  const [isX, setisX] = useState(null);

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
    setIsClicked(true);
    setSymbol(value);
    squareIsClicked(numero);
    value === "X" ? setisX("playerX") : setisX("playerO");
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
