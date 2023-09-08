import { createContext } from "react";
import { useState } from "react";


const GameContext = createContext();


const ContextComponent = ({children}) => {

    const [player1, setPlayer1] = useState({name : "", combination : []})
    const [player2, setPlayer2] = useState({name : "", combination : []})

    const createPlayer = (number, name) => {
        if(number === 1){
            setPlayer1({combination : [], name : name})
            console.log("player created", number, player1)
        } else {
            setPlayer2({combination : [], name : name})
                        console.log("player created", number, player2)

        }

    }

    const getBackPlayer = (number, data) => {
        if(number === 1) {
            setPlayer1({...data})
        } else {
            setPlayer2({...data})
        }
    }

    const resetPlayers = () => {
        localStorage.removeItem("player1");
        localStorage.removeItem("player2");
        localStorage.removeItem("round");
        setPlayer1({name : "" , combination: []})
        setPlayer2({name : "" , combination: []})
    }

    const updatePlayerCombination = (isPlayer1, clickedValue) => {
        if(isPlayer1){
            conso
            setPlayer1({...player1, combination: [...player1.combination, clickedValue]})

            localStorage.setItem("player1", JSON.stringify({
                name: player1.name,
                combination: [...player1.combination, clickedValue],
        })) } else {
            setPlayer2 ({...player2, combination: [...player2.combination, clickedValue]})

            localStorage.setItem("player2", JSON.stringify({
            name: player2.name,
            combination: [...player2.combination, clickedValue],
            })
        );
        }
    }

    const gameContext = {
        player1 : player1,
        player2 : player2,
        createPlayer : createPlayer,
        getBackPlayer,
        resetPlayers,
        updatePlayerCombination
    }



    return (
    <GameContext.Provider value={gameContext}>
            {children}
    </GameContext.Provider>
        )
}


export {ContextComponent, GameContext};