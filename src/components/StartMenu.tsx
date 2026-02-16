import { useContext } from "react"
import { GameStateContext } from "../game-state-context"

function StartMenu() {
  const gameState = useContext(GameStateContext);

  return <>
    <button onClick={() => gameState.dispatch({ type: "start" })}>Start game</button>
  </>
}

export default StartMenu
