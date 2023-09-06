import { useState } from "react";

const GetUserName = ({setPlayerName}) => {
    const [name, setName] = useState("");

function handleUserName(e) {
    e.preventDefault()
    setPlayerName(name)
};    

return (
    <form>
        <label>
            Rentrez le Nom du joueur :
        </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
        <button onClick={handleUserName}>Valider</button>
    </form>
);
};

export default GetUserName;