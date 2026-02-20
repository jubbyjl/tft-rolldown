import { useState } from 'react'
import styles from './ChampionBuyButton.module.css'
import type { Champion } from '../champions';

function ChampionBuyButton({champion, buyable, onBuy}: {champion: Champion, buyable: boolean, onBuy: () => void}) {
  const [bought, setBought] = useState(false);

  const buyChampion = () => {
    if (!buyable) return;
    setBought(true);
    onBuy();
  }

  return <>
    <button disabled={!buyable} className={styles.buyBtn} onClick={buyChampion}>
      {!bought &&
        <>
          <div className={styles.championImgContainer}>
            <img src={champion.src} className={styles.championImg} />
          </div>
          <div className={styles.championInfo}>
            <div>
              {champion.name}
            </div>
            <div>
              {champion.cost}
            </div>
          </div>
        </>
      }
    </button>
  </>
}

export default ChampionBuyButton
