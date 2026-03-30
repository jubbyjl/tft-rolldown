import { useState } from 'react'
import styles from './ChampionBuyButton.module.css'
import type { Champion } from '../champions';

function ChampionBuyButton({champion, buyable, color=false, onBuy}: {champion: Champion, buyable: boolean, color?: boolean, onBuy: () => void}) {
  const [bought, setBought] = useState(false);

  const buyChampion = () => {
    if (!buyable) return;
    setBought(true);
    onBuy();
  }

  let bg: string;
  if (bought) {
    bg = "inherit";
  } else if (champion.cost === 1) {
    bg = "rgb(24, 36, 50)";
  } else if (champion.cost === 2) {
    bg = "rgb(22, 55, 36)";
  } else if (champion.cost === 3) {
    bg = "rgb(22, 42, 88)";
  } else if (champion.cost === 4) {
    bg = "rgb(95, 14, 83)";
  } else {
    bg = "rgb(148, 99, 33)";
  }

  const gray = !color && !buyable ? {"filter": "grayscale(1)"} : undefined;

  return <>
    <button disabled={!buyable} className={styles.buyBtn} onClick={buyChampion} style={{background: bg}}>
      {!bought &&
        <>
          <div className={styles.championImgContainer}>
            <img draggable="false" src={champion.src} className={styles.championImg} style={gray} />
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
