import { useState } from "react";

const Square = ({ value, squareIsClicked, numero }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [symbol, setSymbol] = useState(null);
  const [isX, setisX] = useState(null);

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
