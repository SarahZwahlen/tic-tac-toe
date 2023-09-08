import { useEffect, useState, useContext } from "react";
import BoardGame from "./BoardGame";
import GetUserName from "./GetUserName";
import { GameContext } from "../context/GameContext";

const Main = () => {
  
  const {player1,player2, resetPlayers, getBackPlayer} = useContext(GameContext)

 

  useEffect(() => {
    const player1Data = JSON.parse(localStorage.getItem("player1"));
    const player2Data = JSON.parse(localStorage.getItem("player2"));

    if (player1Data && player2Data) {
      getBackPlayer(player1Data);
      getBackPlayer(player2Data);
    }
  }, []);

  return (
    <main>
      <div>
        {player1.name && player2.name && (
          <h2 className="title">
            {player1.name} <span className="playerX">VS</span> {player2.name}
          </h2>
        )}
      </div>
      {!player1.name && (
        <GetUserName playerNumber={1} />
      )}
      {!player2.name && (
        <GetUserName playerNumber={2}  />
      )}

      {player1.name && player2.name && (
        <BoardGame />
      )}
    </main>
  );
};
export default Main;
