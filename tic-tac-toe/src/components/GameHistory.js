import React from "react";

const GameHistory = ({ history }) => {
  return (
    <div className="display1">
      <h2>Historique des Parties</h2>
      <ul>
        {history.map((game, index) => (
          <li key={index}>
            Partie {index + 1}: {game.winner ? `${game.winner} a gagné` : "Match nul"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameHistory;
