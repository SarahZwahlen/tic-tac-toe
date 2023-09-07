import { useState } from "react";

const Square = ({
  value,
  setSquareValue,
  numero,
  incrementRow,
  setPlayerCombination,
  playerCombination,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [symbol, setSymbol] = useState(null);

  const handleClick = () => {
    setIsClicked(true);
    setSquareValue(parseInt(numero));
    incrementRow();
    setSymbol(value);
    setPlayerCombination([...playerCombination, parseInt(numero)]);
  };

  return (
    <button disabled={isClicked} className="case" onClick={handleClick}>
      {isClicked && <span>{symbol}</span>}
    </button>
  );
};

export default Square;
