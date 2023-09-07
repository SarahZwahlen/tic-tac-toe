import BoardGame from "./BoardGame";
import GetUserName from "./GetUserName";
import { useGameContext } from "../infrastructure/context";

const Main = () => {
  const { player1, player2 } = useGameContext();

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
