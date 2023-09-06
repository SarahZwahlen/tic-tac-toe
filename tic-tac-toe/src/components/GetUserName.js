import { useState } from "react";

const GetUserName = ({ setPlayerName, playerNumber }) => {
  const [name, setName] = useState("");

  function handleUserName(e) {
    e.preventDefault();
    if (name.trim() === "") {
      setPlayerName(null);
    } else {
      setPlayerName(name);
    }
  }
  return (
    <form>
      <label>Rentrez le nom du joueur {playerNumber} :</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button disabled={name ? false : true} onClick={handleUserName}>
        Valider
      </button>
    </form>
  );
};

export default GetUserName;
