import { useState } from "react";

const Square = ({ value, squareIsClicked, numero }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [symbol, setSymbol] = useState(null);

  const handleClick = () => {
    setIsClicked(true);
    setSymbol(value);
    squareIsClicked(numero);
  };

  return (
    <button disabled={isClicked} className="case" onClick={handleClick}>
      {isClicked && <span>{symbol}</span>}
    </button>
  );
};

export default Square;
