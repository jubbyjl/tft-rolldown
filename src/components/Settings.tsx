import { useContext, useEffect, useState } from "react"
import { GameStateContext } from "../game-state-context"

function Settings() {
  const gameState = useContext(GameStateContext);
  const [editingReroll, setEditingReroll] = useState(false);

  useEffect(() => {
    if (!editingReroll) return;

    const editReroll = (e: KeyboardEvent) => {
      e.stopPropagation();
      if (e.key !== "Escape") {
        gameState.dispatch({ type: "editSettings", settings: { reroll: e.key.toLowerCase() }})
      }
      setEditingReroll(false);
    }

    document.body.addEventListener('keydown', editReroll, true);
    return () => {
      document.body.removeEventListener('keydown', editReroll, true);
    }
  }, [editingReroll])

  return <>
    <div>
      <h1>Settings</h1>
      <div>
        Reroll:
        <button onClick={() => setEditingReroll(prev => !prev)}>
          {!editingReroll ? gameState.state.settings.reroll : "..."}
        </button>
      </div>
    </div>
  </>
}

export default Settings
