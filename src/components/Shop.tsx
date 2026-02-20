import { useContext } from "react"
import ChampionBuyButton from "./ChampionBuyButton"
import RerollButton from "./RerollButton"
import styles from "./Shop.module.css"
import { GameStateContext } from "../game-state-context"

function Shop() {
  const gameState = useContext(GameStateContext);
  const shop = gameState.state.shop;

  return <>
    <div className={styles.shopContainer}>
      <div className={styles.shopInfo}>
        <button onClick={() => gameState.dispatch({ type: "end" })}>Stop</button>
        <div className={styles.shopInfoGold}>{shop.gold}</div>
        <div>Targets: {gameState.state.targets.map(x => x.name)}</div>
      </div>
      <div className={styles.shopMain}>
        <div className={styles.shopControls}>
          <div className={styles.shopControlsBtnContainer}></div>
          <div className={styles.shopControlsBtnContainer}>
            <RerollButton reroll={() => gameState.dispatch({ type: "reroll" })}/>
          </div>
        </div>
        <div className={styles.shopChampions}>
          {shop.champions.map(c => 
            <div className={styles.shopChampionContainer}>
              <ChampionBuyButton
                key={c.id}  
                champion={c.champion}
                buyable={shop.gold >= 4}
                onBuy={() => gameState.dispatch({ type: "buy", championId: c.id })}
              />
            </div>)
          }
        </div>
      </div>
    </div>
  </>
}

export default Shop
