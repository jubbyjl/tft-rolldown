import { useEffect, useState } from "react";
import { getSrcList } from "../champions";

const preloadSrc = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = img.onabort = () => reject(src);
    img.src = src;
  })
}

export default function useImgPreloader() {
  const [preloaded, setPreloaded] = useState(false);

  useEffect(() => {
    const preload = async () => {
      const promises: Promise<HTMLImageElement>[] = [];
      getSrcList().forEach(x => {
        promises.push(preloadSrc(x));
      })
      await Promise.all(promises);
      setPreloaded(true);
    }

    preload();
  }, [])

  return preloaded;
}
