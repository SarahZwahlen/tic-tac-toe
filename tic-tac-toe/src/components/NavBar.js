const NavBar = ({ handleNewGame }) => {
  return (
    
    <header className="background">
      <div className="waves-rotate">
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
          <div className="wave wave4"></div>
      </div>
      <h1 className="title1">Super Morpion</h1>
      <nav>
        <ul className="controls">
          <li>
            <button
              className="reset"
              onClick={() => {
                localStorage.removeItem("player1");
                localStorage.removeItem("player2");
                localStorage.removeItem("round");
                handleNewGame();
              }}
            >
              Rejouer
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default NavBar;
