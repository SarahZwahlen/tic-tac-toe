import { useState } from "react";

const Square = ({ player, setSquareValue, numero, incrementRow }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setSquareValue(parseInt(numero));
    incrementRow();
  };

  return (
    <button disabled={isClicked} className="square" onClick={handleClick}>
      {isClicked && <span>X</span>}
    </button>
  );
};

export default Square;
