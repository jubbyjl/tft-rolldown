import { useContext, useEffect } from 'react'
import styles from './RerollButton.module.css'
import { GameStateContext } from '../game-state-context';

function RerollButton({reroll}: {reroll: () => void}) {
  const gameState = useContext(GameStateContext);

  useEffect(() => {
    const keydownReroll = (e: KeyboardEvent) => {
      if (e.key === gameState.state.settings.reroll) {
        reroll();
      }
    }

    document.body.addEventListener('keydown', keydownReroll);
    return () => {
      document.body.removeEventListener('keydown', keydownReroll);
    }
  }, [gameState.state.settings.reroll, reroll])

  return <>
    <button className={styles.rerollBtn} onClick={reroll}>Reroll</button>
  </>
}

export default RerollButton
