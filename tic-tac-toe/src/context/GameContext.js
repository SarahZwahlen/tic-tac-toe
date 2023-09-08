import { createContext } from "react";
import { useState } from "react";

const GameContext = createContext();


const ContextComponent = ({children}) => {
    
    const [coucou, setCoucou] = useState("coucou")
    
    const gameContext = {
        coucou : coucou,
        changeCoucou : setCoucou
    }


    return (
    <GameContext.Provider value={gameContext}>
            {children}
    </GameContext.Provider>
        )
}


export {ContextComponent, GameContext};

