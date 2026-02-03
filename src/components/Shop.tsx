import { useState } from "react"
import ChampionBuyButton from "./ChampionBuyButton"
import RerollButton from "./RerollButton"
import styles from "./Shop.module.css"

function Shop() {
  const [champions, setChampions] = useState([
    {id: crypto.randomUUID(), champion: 1},
    {id: crypto.randomUUID(), champion: 2},
    {id: crypto.randomUUID(), champion: 3},
    {id: crypto.randomUUID(), champion: 1},
  ])
  
  const reroll = () => {
    setChampions(prev => prev.map(x => {
      return {id: crypto.randomUUID(), champion: x.champion + 1}
    }));
  }

  return <>
    <div className={styles.shop}>
      <RerollButton reroll={reroll}/>
      {champions.map(c => 
        <ChampionBuyButton champion={c.champion.toString()} key={c.id} />)
      }
    </div>
  </>
}

export default Shop
