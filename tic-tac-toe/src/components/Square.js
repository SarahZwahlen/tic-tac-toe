import { useState } from "react";

const Square = ({ value, setSquareValue, numero, incrementRow }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [symbol, setSymbol] = useState(null);

  const handleClick = () => {
    setIsClicked(true);
    setSquareValue(parseInt(numero));
    incrementRow();
    setSymbol(value);
  };

  return (
    <button disabled={isClicked} className="square" onClick={handleClick}>
      {isClicked && <span>{symbol}</span>}
    </button>
  );
};

export default Square;
