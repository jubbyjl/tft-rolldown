import { useState } from "react"
import ChampionBuyButton from "./ChampionBuyButton"
import RerollButton from "./RerollButton"
import styles from "./Shop.module.css"

function Shop() {
  const [shop, setShop] = useState({
    gold: 50,
    champions: [
      {id: 1, champion: 1},
      {id: 2, champion: 2},
      {id: 3, champion: 3},
      {id: 4, champion: 1},
      {id: 5, champion: 4},
    ],
    championIdIncrement: 6,
  })
  
  const reroll = () => {
    setShop(prev => {
      if (prev.gold < 2) return prev;
      return {
        gold: prev.gold - 2,
        champions: prev.champions.map((x, i) => {
          return { id: prev.championIdIncrement + i, champion: x.champion + 1 }
        }),
        championIdIncrement: prev.championIdIncrement + 5,
      }
    })
  }

  return <>
    <div className={styles.shop}>
      <div>{shop.gold}</div>
      <RerollButton reroll={reroll}/>
      {shop.champions.map(c => 
        <ChampionBuyButton
          key={c.id}  
          champion={c.champion.toString()}
          buyable={shop.gold >= 4}
          onBuy={() => setShop(prev => { return { ...prev, gold: prev.gold - 4 } })}
        />)
      }
    </div>
  </>
}

export default Shop
