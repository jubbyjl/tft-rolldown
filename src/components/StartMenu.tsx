import { useContext } from "react"
import { GameStateContext } from "../GameStateContext"

function StartMenu() {
  const gameState = useContext(GameStateContext);

  return <>
    <button onClick={() => gameState.dispatch({ type: "start" })}>Start game</button>
  </>
}

export default StartMenu
