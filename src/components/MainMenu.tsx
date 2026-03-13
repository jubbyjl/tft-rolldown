import { useContext, useLayoutEffect, useRef, useState } from "react"
import { GameStateContext } from "../game-state-context"
import Settings from "./Settings";

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
    <div className="center">
      <h1>TFT Rolldown</h1>
      <div>
        <button onClick={() => setEditingSettings(prev => !prev)}>Edit settings</button>
      </div>
      <dialog ref={settingsModalRef} onClose={() => setEditingSettings(false)} closedby="any">
        <div>
          <button onClick={() => setEditingSettings(false)}>Close</button>
        </div>
        {editingSettings && <Settings />}
      </dialog>
      <div>
        <button onClick={() => gameState.dispatch({ type: "play" })}>Play game</button>
      </div>
    </div>
  </>
}

export default MainMenu
