const NavBar = ({ handleNewGame }) => {
  return (
    <header className="background">
      <h1 className="title">Super Morpion</h1>
      <img src=""></img>
      <nav>
        <ul className="controls">
          <li>
            <button className="reset" onClick={handleNewGame}>
              Rejouer
            </button>
          </li>
          <li>
            <button
              className="reset"
              onClick={() => {
                localStorage.removeItem("player1");
                localStorage.removeItem("player2");
              }}
            >
              Recommencer la partie
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default NavBar;
