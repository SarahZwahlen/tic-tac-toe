import BoardGame from "./BoardGame";
import GetUserName from "./GetUserName";
import { useGameContext } from "../infrastructure/context";
import { useEffect } from "react";

const Main = () => {
  const { player1, player2, createPlayer } = useGameContext();

  useEffect(() => {
    const player1SL = JSON.parse(localStorage.getItem("player1"));
    const player2SL = JSON.parse(localStorage.getItem("player2"));

    if ((player1SL, player2SL)) {
      createPlayer(1, player1SL);
      createPlayer(2, player2SL);
    }
  }, []);

  return (
    <main>
      <div>
        <h2 className="title">
          {player1.name} <span className="playerX">VS</span> {player2.name}
        </h2>
      </div>
      {!player1.name && <GetUserName playerNumber={1} />}
      {!player2.name && <GetUserName playerNumber={2} />}

      {player1.name && player2.name && <BoardGame />}
    </main>
  );
};
export default Main;
