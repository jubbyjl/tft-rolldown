import styles from "./TimerBar.module.css"

function TimerBar({ duration }: { duration: number }) {

return <>
    <div className={styles.timerBarContainer}>
      <div className={styles.timerBar} style={{animationDuration: `${duration}s`}}></div>
    </div>
  </>
}

export default TimerBar
