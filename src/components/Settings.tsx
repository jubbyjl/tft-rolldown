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
      <h1 className="mb-2">Settings</h1>
      <div className="space-between items-center p-2">
        Reroll:
        <button className="btn" onClick={() => setEditingReroll(prev => !prev)}>
          {!editingReroll ? gameState.state.settings.reroll : "..."}
        </button>
      </div>
    </div>
  </>
}

export default Settings
