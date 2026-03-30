import { useContext, useEffect } from "react"
import { GameStateContext } from "../game-state-context"
import TimerBar from "./TimerBar";
import styles from "./Instructions.module.css"
import ChampionBuyButton from "./ChampionBuyButton";

function Instructions() {
  const gameState = useContext(GameStateContext);
  const duration = 5;

  useEffect(() => {
    const id = setTimeout(() => {
      gameState.dispatch({ type: "startRound" });
    }, duration * 1000)

    return () => clearTimeout(id);
  }, [])

  return <>
    <div className="center">
      <div className="mb-1">
        Targets:
      </div>
      <div className={styles.targets}>
        {gameState.state.targets.map(x =>
          <ChampionBuyButton key={x.name} champion={x} buyable={false} color={true} onBuy={() => {}}/>
        )}
      </div>
    </div>
    <TimerBar duration={duration} />
  </>
}

export default Instructions
