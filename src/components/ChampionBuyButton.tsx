import { useState } from 'react'
import styles from './ChampionBuyButton.module.css'

function ChampionBuyButton({champion}: {champion: string}) {
  const [bought, setBought] = useState(false);

  return <>
    <div className={styles.buyBtnContainer}>
      {!bought &&
        <button className={styles.buyBtn} onClick={() => setBought(true)}>
          {champion}
        </button>
      }
    </div>
  </>
}

export default ChampionBuyButton
