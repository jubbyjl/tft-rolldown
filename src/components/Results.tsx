import { useContext } from "react"
import { GameStateContext } from "../GameStateContext"

function Results() {
  const gameState = useContext(GameStateContext);
  const results = gameState.state.results;

  return <>
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
    <button onClick={() => gameState.dispatch({ type: "returnMenu" })}>Return to menu</button>
  </>
}

export default Results
