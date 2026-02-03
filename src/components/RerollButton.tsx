import { useEffect } from 'react'
import styles from './RerollButton.module.css'

function RerollButton({reroll}: {reroll: () => void}) {

  useEffect(() => {
    document.body.addEventListener('keydown', reroll);
    return () => {
      document.body.removeEventListener('keydown', reroll);
    }
  }, [])

  return <>
    <div>
      <button className={styles.rerollBtn} onClick={reroll}>Reroll</button>
    </div>
  </>
}

export default RerollButton
