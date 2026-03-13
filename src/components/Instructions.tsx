import { useContext, useEffect } from "react"
import { GameStateContext } from "../game-state-context"
import TimerBar from "./TimerBar";

function Instructions() {
  const gameState = useContext(GameStateContext);
  const duration = 4;

  useEffect(() => {
    const id = setTimeout(() => {
      gameState.dispatch({ type: "startRound" });
    }, duration * 1000)

    return () => clearTimeout(id);
  }, [])

  return <>
    <div className="center">
      Targets:
      <div>
        {gameState.state.targets.map(x =>
          <div key={x.name}>
            <div>
              {x.name}
            </div>
            <img src={x.src} style={{height: "10vh"}} />
          </div>
        )}
      </div>
    </div>
    <TimerBar duration={duration} />
  </>
}

export default Instructions
