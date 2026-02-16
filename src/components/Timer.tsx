import { useContext, useEffect, useState } from "react"
import { GameStateContext } from "../game-state-context"

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
  </>
}

export default Timer
