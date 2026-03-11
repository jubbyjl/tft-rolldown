import { useContext, useEffect, useState } from "react"
import { GameStateContext } from "../game-state-context"
import styles from "./Timer.module.css"

function Timer() {
  const gameState = useContext(GameStateContext);
  const [timeLeft, setTimeleft] = useState(gameState.state.timer);

  useEffect(() => {
    if (timeLeft <= 0) {
      gameState.dispatch({ type: "end" });
    }

    const timeoutId = setTimeout(() => {
      setTimeleft(prev => prev - 1);
    }, 1000)

    return () => clearTimeout(timeoutId);
  }, [timeLeft])

  return <>
    <div>
      Time left: {timeLeft}s
    </div>
    <div className={styles.timerBarContainer}>
      <div className={styles.timerBar} style={{animationDuration: `${gameState.state.timer}s`}}></div>
    </div>
  </>
}

export default Timer
