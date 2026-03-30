import { useContext } from "react"
import { GameStateContext } from "../game-state-context"
import styles from "./RoundInfo.module.css"

function RoundInfo() {
  const gameState = useContext(GameStateContext);

  return <>
    <details className={styles.info}>
      <summary>Details</summary>
      <div className={styles.targets}>
        Targets:
        <div>{gameState.state.targets.map(x => x.name).join(", ")}</div>
      </div>
      <div>
        Time left: {gameState.state.results.timeLeft}s
      </div>
      <div>
        Rerolls: {gameState.state.results.rerolls}
      </div>
      <div>
        Targets seen: {gameState.state.results.targetsSeen}
      </div>
      <div>
        Targets bought: {gameState.state.results.targetsBought}
      </div>
      <div>
        Misbuys: {gameState.state.results.misbuys}
      </div>
    </details>
  </>
}

export default RoundInfo
