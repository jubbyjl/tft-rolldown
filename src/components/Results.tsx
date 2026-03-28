import { useContext } from "react"
import { GameStateContext } from "../game-state-context"

function Results() {
  const gameState = useContext(GameStateContext);
  const results = gameState.state.results;

  return <>
    <div className="center box p-3">
      <h1 className="mb-2">Results</h1>
      <div className="mb-1 space-between">
        Time left: <span>{results.timeLeft}s</span>
      </div>
      <div className="mb-1 space-between">
        Gold left: <span>{gameState.state.shop.gold}</span>
      </div>
      <div className="mb-1 space-between">
        Rerolls: <span>{results.rerolls}</span>
      </div>
      <div className="mb-1 space-between">
        Targets seen: <span>{results.targetsSeen}</span>
      </div>
      <div className="mb-1 space-between">
        Targets bought: <span>{results.targetsBought}</span>
      </div>
      <div className="mb-2 space-between">
        Misbuys: <span>{results.misbuys}</span>
      </div>
      <button className="btn" onClick={() => gameState.dispatch({ type: "returnToMenu" })}>Return to menu</button>
    </div>
  </>
}

export default Results
