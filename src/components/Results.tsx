import { useContext } from "react"
import { GameStateContext } from "../game-state-context"

function Results() {
  const gameState = useContext(GameStateContext);
  const results = gameState.state.results;

  return <>
    <div className="center">
      <h1>Results</h1>
      <div>
        Time left: {results.timeLeft}
      </div>
      <div>
        Gold left: {gameState.state.shop.gold}
      </div>
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
