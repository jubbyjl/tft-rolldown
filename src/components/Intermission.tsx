import useImgPreloader from "../hooks/useImgPreloader";
import Instructions from "./Instructions";

function Intermission() {
  const preloaded = useImgPreloader();

  return <>
    {!preloaded ?
      <>Loading</>
    :
      <Instructions />
    }
  </>
}

export default Intermission
