import { useReducer, useState } from "react"
import Shop from "./Shop"
import { GameStateContext } from "../GameStateContext"
import StartMenu from "./StartMenu";
import Results from "./Results";
import { gameStateReducer } from "../GameState";
import Timer from "./Timer";
import Settings from "./Settings";

function Game() {
  const [gameState, gameStateDispatch] = useReducer(gameStateReducer, {
    status: "menu",
    settings: {
      reroll: "d",
    },
    timer: 30,
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
    },
  })

  const [editingSettings, setEditingSettings] = useState(false);

  return <>
    <GameStateContext value={{
      state: gameState,
      dispatch: (action) => gameStateDispatch(action),
    }}>
      <div>
        <button onClick={() => setEditingSettings(prev => !prev)}>Edit settings</button>
        {editingSettings && <Settings />}
      </div>
      <div>
        {
          gameState.status === "menu" ?
            <StartMenu />
          : gameState.status === "started" ?
            <>
              <Timer />
              <Shop />
            </>
          :
            <Results />
        }
      </div>
    </GameStateContext>
  </>
}

export default Game
