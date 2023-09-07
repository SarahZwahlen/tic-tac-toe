import { useState } from "react";

const GetUserName = ({ setPlayerName, playerNumber }) => {
  const [name, setName] = useState("");

  function handleUserName(e) {
    e.preventDefault();
    if (name.trim() === "") {
      setPlayerName(null);
      localStorage.setItem(
        `player${playerNumber}`,
        JSON.stringify({ player: null, combination: [] })
      );
    } else {
      setPlayerName(name);
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
