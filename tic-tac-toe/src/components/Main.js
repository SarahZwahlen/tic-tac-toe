import { useEffect, useState } from "react";
import BoardGame from "./BoardGame";
import GetUserName from "./GetUserName";

const Main = ({ setIsReset, isReset }) => {
  const [playerName1, setPlayerName1] = useState(null);
  const [playerName2, setPlayerName2] = useState(null);
  useEffect(() => {
    if (isReset === true) {
      setPlayerName1(null);
      setPlayerName2(null);
      setIsReset(false);
    }
  }, [isReset]);

  useEffect(() => {
    const player1Data = JSON.parse(localStorage.getItem("player1"));
    const player2Data = JSON.parse(localStorage.getItem("player2"));

    if (player1Data && player2Data) {
      setPlayerName1(player1Data.player);
      setPlayerName2(player2Data.player);
    }
  }, []);

  return (
    <main>
      <div>
        {playerName1 && playerName2 && (
          <h2 className="title">
            {playerName1} <span className="playerX">VS</span> {playerName2}
          </h2>
        )}
      </div>
      {playerName1 === null ? (
        <GetUserName playerNumber="1" setPlayerName={setPlayerName1} />
      ) : null}
      {playerName2 === null ? (
        <GetUserName playerNumber="2" setPlayerName={setPlayerName2} />
      ) : null}

      {playerName1 && playerName2 && (
        <BoardGame player1={playerName1} player2={playerName2} />
      )}
    </main>
  );
};
export default Main;
