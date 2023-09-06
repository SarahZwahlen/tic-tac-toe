

const NavBar = ({handleNewGame}) =>{

  
    
    return (
        <header>
        <h1>
            Super Morpion
        </h1>
        <img src=""></img>
        <nav>
            <ul>
                <li>
                    <button onClick={handleNewGame}>
                        Jouer
                    </button>
                </li>
                <li>
                    <button>
                        Historique des Parties
                    </button>
                </li>
            </ul>
        </nav>
        </header>
    );
};
export default NavBar;