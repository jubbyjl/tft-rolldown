import { useContext } from "react"
import { GameStateContext } from "../game-state-context"

function EndButton() {
  const gameState = useContext(GameStateContext);

  return <>
    <button className="btn close-btn m-1" onClick={() => gameState.dispatch({ type: "end" })}></button>
  </>
}

export default EndButton
