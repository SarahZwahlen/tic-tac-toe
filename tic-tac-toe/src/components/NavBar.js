

const NavBar = ({handleNewGame}) =>{
 
    return (
        <header className="background">
        <h1 className="title">
            Super Morpion
        </h1>
        <img src=""></img>
        <nav>
            <ul className="controls">
                <li>
                    <button className="reset" onClick={handleNewGame}>
                        Rejouer
                    </button>
                </li>
                <li>
                    <button className="reset">
                        Historique des Parties
                    </button>
                </li>
            </ul>
        </nav>
        </header>
    );
};
export default NavBar;