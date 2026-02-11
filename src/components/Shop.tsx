import { useContext } from "react"
import ChampionBuyButton from "./ChampionBuyButton"
import RerollButton from "./RerollButton"
import styles from "./Shop.module.css"
import { GameStateContext } from "../GameStateContext"

function Shop() {
  const gameState = useContext(GameStateContext);
  const shop = gameState.state.shop;

  return <>
    <div>
      <div>
        <button onClick={() => gameState.dispatch({ type: "end" })}>Stop</button>
      </div>
      <div>Targets: {gameState.state.targets}</div>
    </div>
    <div className={styles.shop}>
      <div>{shop.gold}</div>
      <RerollButton reroll={() => gameState.dispatch({ type: "reroll" })}/>
      {shop.champions.map(c => 
        <ChampionBuyButton
          key={c.id}  
          champion={c.champion.toString()}
          buyable={shop.gold >= 4}
          onBuy={() => gameState.dispatch({ type: "buy", championId: c.id })}
        />)
      }
    </div>
  </>
}

export default Shop
