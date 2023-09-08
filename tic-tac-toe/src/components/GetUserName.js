import { useState, useContext } from "react";
import { GameContext } from "../context/GameContext";

const GetUserName = ({ playerNumber }) => {
  const [name, setName] = useState("");

  const {createPlayer} = useContext(GameContext)

  function handleUserName(e) {
    e.preventDefault();
    if (name.trim() === "") {
      createPlayer(playerNumber,null);
      
      localStorage.setItem(
        `player${playerNumber}`,
        JSON.stringify({ player: null, combination: [] })
      );
    } else {

      createPlayer(playerNumber,name);
      localStorage.setItem(
        `player${playerNumber}`,
        JSON.stringify({ player: name, combination: [] })
      );
    }
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
