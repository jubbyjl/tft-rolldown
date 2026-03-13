import { useContext } from "react"
import { GameStateContext } from "../game-state-context"

function Results() {
  const gameState = useContext(GameStateContext);
  const results = gameState.state.results;

  // TODO: gold left, time left
  return <>
    <div className="center">
      <h1>Results</h1>
      <div>
        Rerolls: {results.rerolls}
      </div>
      <div>
        Targets seen: {results.targetsSeen}
      </div>
      <div>
        Targets bought: {results.targetsBought}
      </div>
      <div>
        Misbuys: {results.misbuys}
      </div>
      <button onClick={() => gameState.dispatch({ type: "returnToMenu" })}>Return to menu</button>
    </div>
  </>
}

export default Results
