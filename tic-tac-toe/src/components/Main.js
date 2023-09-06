import {useState} from "react";
import BoardGame from "./BoardGame";
import GetUserName from "./GetUserName";


const Main = () =>{
    const [playerName1, setPlayerName1] = useState(null);
    const [playerName2, setPlayerName2] = useState(null);
    return (
        <main>
            <div>
                <h2>{playerName1} VS {playerName2}</h2>
            </div>
            { playerName1 === null ? 
            <GetUserName setPlayerName={setPlayerName1}/>
            : null}
            { playerName2 === null ?
            <GetUserName setPlayerName={setPlayerName2}/>
            : null }
            <BoardGame/>
        </main>
    );
};
export default Main;