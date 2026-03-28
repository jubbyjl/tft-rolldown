import { useReducer } from "react"
import Shop from "./Shop"
import { GameStateContext } from "../game-state-context"
import MainMenu from "./MainMenu";
import Results from "./Results";
import { gameStateReducer } from "../game-state";
import Timer from "./Timer";
import styles from "./Game.module.css"
import RoundInfo from "./RoundInfo";
import Intermission from "./Intermission";
import EndButton from "./EndButton";

function Game() {
  const [gameState, gameStateDispatch] = useReducer(gameStateReducer, {
    status: "mainMenu",
    settings: {
      reroll: "d",
    },
    timer: 30,
    targets: [],
    shop: {
      gold: 0,
      champions: [],
      bought: new Set<number>(),
      idIncrement: 1,
    },
    results: {
      rerolls: 0,
      targetsSeen: 0,
      targetsBought: 0,
      misbuys: 0,
      timeLeft: 30,
    },
  })

  return <>
    <GameStateContext value={{
      state: gameState,
      dispatch: (action) => gameStateDispatch(action),
    }}>
      <div className={styles.gameContainer}>
        {
          gameState.status === "mainMenu" ?
            <MainMenu />
          : gameState.status === "intermission" ?
            <>
              <EndButton />
              <Intermission />
              <Shop />
            </>
          : gameState.status === "ingame" ?
            <>
              <EndButton />
              <Timer />
              <RoundInfo />
              <Shop />
            </>
          :
            <Results />
        }
      </div>
    </GameStateContext>
  </>
}

export default Game
