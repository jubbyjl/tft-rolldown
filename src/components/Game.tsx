import { useReducer } from "react"
import Shop from "./Shop"
import { GameStateContext } from "../GameStateContext"
import StartMenu from "./StartMenu";
import Results from "./Results";
import { gameStateReducer } from "../GameState";

function Game() {
  const [gameState, gameStateDispatch] = useReducer(gameStateReducer, {
    status: "menu",
    targets: [],
    shop: {
      gold: 0,
      champions: [],
      idIncrement: 1,
    },
    results: {
      rerolls: 0,
      targetsSeen: 0,
      targetsBought: 0,
      misbuys: 0,
    }
  })

  return <>
    <GameStateContext value={{
      state: gameState,
      dispatch: (action) => gameStateDispatch(action),
    }}>
      {
        gameState.status === "menu" ?
          <StartMenu />
        : gameState.status === "started" ?
          <Shop />
        :
          <Results />
      }
    </GameStateContext>
  </>
}

export default Game
