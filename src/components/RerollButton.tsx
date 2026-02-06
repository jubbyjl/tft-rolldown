import { useEffect } from 'react'
import styles from './RerollButton.module.css'

function RerollButton({reroll}: {reroll: () => void}) {

  const keydownReroll = (e: KeyboardEvent) => {
    if (e.key === 'd') {
      reroll();
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', keydownReroll);
    return () => {
      document.body.removeEventListener('keydown', keydownReroll);
    }
  }, [])

  return <>
    <div>
      <button className={styles.rerollBtn} onClick={reroll}>Reroll</button>
    </div>
  </>
}

export default RerollButton
