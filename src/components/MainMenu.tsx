import { useContext, useLayoutEffect, useRef, useState } from "react"
import { GameStateContext } from "../game-state-context"
import Settings from "./Settings";
import styles from "./MainMenu.module.css"

function MainMenu() {
  const gameState = useContext(GameStateContext);

  const [editingSettings, setEditingSettings] = useState(false);
  const settingsModalRef = useRef<HTMLDialogElement>(null);

  useLayoutEffect(() => {
    if (settingsModalRef.current?.open && !editingSettings) {
      settingsModalRef.current.close();
    } else if (!settingsModalRef.current?.open && editingSettings) {
      settingsModalRef.current?.showModal();
    }
  }, [editingSettings])

  return <>
    <div className="center box p-3">
      <h1 className={"m-2 " + styles.title}>TFT Rolldown</h1>
      <div>
        <button className="btn menu-btn m-1" onClick={() => gameState.dispatch({ type: "play" })}>PLAY</button>
      </div>
      <div>
        <button className="btn menu-btn" onClick={() => setEditingSettings(prev => !prev)}>Settings</button>
      </div>
      <dialog className={"box p-1 " + styles.modal} ref={settingsModalRef} onClose={() => setEditingSettings(false)} closedby="any">
        <div className="text-r">
          <button className="btn close-btn" onClick={() => setEditingSettings(false)}></button>
        </div>
        {editingSettings && <Settings />}
      </dialog>
    </div>
  </>
}

export default MainMenu
