import { useEffect, useState } from "react";
import GetUserName from "./GetUserName";
import BoardGame2 from "./boardGame2";

const Main = ({ onReset, isReset }) => {
  const [playerName1, setPlayerName1] = useState("");
  const [playerName2, setPlayerName2] = useState("");
  useEffect(() => {
    if (isReset) {
      setPlayerName1("");
      setPlayerName2("");
      onReset(false);
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
      {!playerName1 && (
        <GetUserName playerNumber="1" setPlayerName={setPlayerName1} />
      )}
      {!playerName2 && (
        <GetUserName playerNumber="2" setPlayerName={setPlayerName2} />
      )}

      {playerName1 && playerName2 && (
        <BoardGame2 player1={playerName1} player2={playerName2} />
      )}
    </main>
  );
};
export default Main;
