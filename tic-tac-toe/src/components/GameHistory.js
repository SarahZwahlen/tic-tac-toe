import React from "react";

const GameHistory = ({ history }) => {
  return (
    <div className="display1">
      <h2>Historique des Parties</h2>
      <ul>
        {history.map((game, index) => (
          <li className= {game.winner ? "display2 winner":"display2"} key={index}>
            Partie {index + 1}: {game.winner ? `${game.winner} a gagné` : "Match nul"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameHistory;
