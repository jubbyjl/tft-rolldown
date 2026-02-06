import { useState } from "react"
import Shop from "./Shop"

function HomeMenu() {
  const [started, setStarted] = useState(false)

  return <>
    {
      !started ?
        <button onClick={() => setStarted(true)}>Start game</button>
      :
        <Shop />
    }
  </>
}

export default HomeMenu
