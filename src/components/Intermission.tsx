import useImgPreloader from "../hooks/useImgPreloader";
import Instructions from "./Instructions";

function Intermission() {
  const preloaded = useImgPreloader();

  return <>
    {!preloaded ?
      <div className="center">Loading...</div>
    :
      <Instructions />
    }
  </>
}

export default Intermission
