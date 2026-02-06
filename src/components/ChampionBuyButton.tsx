import { useState } from 'react'
import styles from './ChampionBuyButton.module.css'

function ChampionBuyButton({champion, buyable, onBuy}: {champion: string, buyable: boolean, onBuy: () => void}) {
  const [bought, setBought] = useState(false);

  const buyChampion = () => {
    if (!buyable) return;
    setBought(true);
    onBuy();
  }

  return <>
    <div className={styles.buyBtnContainer}>
      {!bought &&
        <button disabled={!buyable} className={styles.buyBtn} onClick={buyChampion}>
          {champion}
        </button>
      }
    </div>
  </>
}

export default ChampionBuyButton
