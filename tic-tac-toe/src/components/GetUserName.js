import { useState } from "react";
import { useGameContext } from "../infrastructure/context";

const GetUserName = ({ playerNumber }) => {
  const [name, setName] = useState("");

  const { createPlayer } = useGameContext();

  function handleUserName(e) {
    e.preventDefault();
    createPlayer(playerNumber, {
      name,
      combination: [],
    });
    localStorage.setItem(
      `player${playerNumber}`,
      JSON.stringify({ name: name, combination: [] })
    );
  }
  return (
    <form className="display">
      <label>Rentrez le nom du joueur {playerNumber} :</label>
      <input
        className="playerName"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button
        className="reset"
        disabled={name ? false : true}
        onClick={handleUserName}
      >
        Valider
      </button>
    </form>
  );
};

export default GetUserName;
