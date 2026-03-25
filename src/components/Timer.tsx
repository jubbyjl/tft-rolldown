import { useContext, useEffect, useState } from "react"
import { GameStateContext } from "../game-state-context"
import TimerBar from "./TimerBar";

function Timer() {
  const gameState = useContext(GameStateContext);
  const [timeLeft, setTimeleft] = useState(gameState.state.timer);

  useEffect(() => {
    if (timeLeft <= 0) {
      gameState.dispatch({ type: "end" });
    }

    const timeoutId = setTimeout(() => {
      setTimeleft(prev => prev - 1);
      gameState.dispatch({ type: "incrementTime" });
    }, 1000)

    return () => clearTimeout(timeoutId);
  }, [timeLeft])

  return <>
    <div>
      Time left: {timeLeft}s
    </div>
    <TimerBar duration={gameState.state.timer}/>
  </>
}

export default Timer
