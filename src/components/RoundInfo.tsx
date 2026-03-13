import { useContext } from "react"
import { GameStateContext } from "../game-state-context"
import styles from "./RoundInfo.module.css"

function RoundInfo() {
  const gameState = useContext(GameStateContext);

  return <>
    <div className={styles.info}>
      <div>
        Targets: {gameState.state.targets.map(x => x.name)}
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
    </div>
  </>
}

export default RoundInfo
