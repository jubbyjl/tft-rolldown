import Aatrox from "./assets/set16/aatrox.jpg"
import Ahri from "./assets/set16/ahri.jpg"
import Ambessa from "./assets/set16/ambessa.jpg"
import Anivia from "./assets/set16/anivia.jpg"
import Annie from "./assets/set16/annie.jpg"
import Aphelios from "./assets/set16/aphelios.jpg"
import Ashe from "./assets/set16/ashe.jpg"
import AurelionSol from "./assets/set16/aurelionsol.jpg"
import Azir from "./assets/set16/azir.jpg"
import Bard from "./assets/set16/bard.jpg"
import BaronNashor from "./assets/set16/baronnashor.jpg"
import BelVeth from "./assets/set16/belveth.jpg"
import Blitzcrank from "./assets/set16/blitzcrank.jpg"
import Braum from "./assets/set16/braum.jpg"
import Briar from "./assets/set16/briar.jpg"
import Brock from "./assets/set16/brock.jpg"
import Caitlyn from "./assets/set16/caitlyn.jpg"
import Chogath from "./assets/set16/chogath.jpg"
import Darius from "./assets/set16/darius.jpg"
import Diana from "./assets/set16/diana.jpg"
import Draven from "./assets/set16/draven.jpg"
import DrMundo from "./assets/set16/drmundo.jpg"
import Ekko from "./assets/set16/ekko.jpg"
import Fiddlesticks from "./assets/set16/fiddlesticks.jpg"
import Fizz from "./assets/set16/fizz.jpg"
import Galio from "./assets/set16/galio.jpg"
import Gangplank from "./assets/set16/gangplank.jpg"
import Garen from "./assets/set16/garen.jpg"
import Graves from "./assets/set16/graves.jpg"
import Gwen from "./assets/set16/gwen.jpg"
import Illaoi from "./assets/set16/illaoi.jpg"
import JarvanIv from "./assets/set16/jarvaniv.jpg"
import Jhin from "./assets/set16/jhin.jpg"
import Jinx from "./assets/set16/jinx.jpg"
import Kaisa from "./assets/set16/kaisa.jpg"
import Kalista from "./assets/set16/kalista.jpg"
import Kennen from "./assets/set16/kennen.jpg"
import Kindred from "./assets/set16/kindred.jpg"
import KobukoYuumi from "./assets/set16/kobukoyuumi.jpg"
import KogMaw from "./assets/set16/kogmaw.jpg"
import LeBlanc from "./assets/set16/leblanc.jpg"
import Leona from "./assets/set16/leona.jpg"
import Lissandra from "./assets/set16/lissandra.jpg"
import Loris from "./assets/set16/loris.jpg"
import LucianSenna from "./assets/set16/luciansenna.jpg"
import Lulu from "./assets/set16/lulu.jpg"
import Lux from "./assets/set16/lux.jpg"
import Malzahar from "./assets/set16/malzahar.jpg"
import Mel from "./assets/set16/mel.jpg"
import Milio from "./assets/set16/milio.jpg"
import MissFortune from "./assets/set16/missfortune.jpg"
import Nasus from "./assets/set16/nasus.jpg"
import Nautilus from "./assets/set16/nautilus.jpg"
import Neeko from "./assets/set16/neeko.jpg"
import Nidalee from "./assets/set16/nidalee.jpg"
import Orianna from "./assets/set16/orianna.jpg"
import Ornn from "./assets/set16/ornn.jpg"
import Poppy from "./assets/set16/poppy.jpg"
import Qiyana from "./assets/set16/qiyana.jpg"
import RekSai from "./assets/set16/reksai.jpg"
import Renekton from "./assets/set16/renekton.jpg"
import RiftHerald from "./assets/set16/riftherald.jpg"
import Rumble from "./assets/set16/rumble.jpg"
import Ryze from "./assets/set16/ryze.jpg"
import Sejuani from "./assets/set16/sejuani.jpg"
import Seraphine from "./assets/set16/seraphine.jpg"
import Sett from "./assets/set16/sett.jpg"
import Shen from "./assets/set16/shen.jpg"
import Shyvana from "./assets/set16/shyvana.jpg"
import Singed from "./assets/set16/singed.jpg"
import Sion from "./assets/set16/sion.jpg"
import Skarner from "./assets/set16/skarner.jpg"
import Sona from "./assets/set16/sona.jpg"
import Swain from "./assets/set16/swain.jpg"
import Sylas from "./assets/set16/sylas.jpg"
import TahmKench from "./assets/set16/tahmkench.jpg"
import Taric from "./assets/set16/taric.jpg"
import Teemo from "./assets/set16/teemo.jpg"
import THex from "./assets/set16/thex.jpg"
import Thresh from "./assets/set16/thresh.jpg"
import Tristana from "./assets/set16/tristana.jpg"
import Tryndamere from "./assets/set16/tryndamere.jpg"
import TwistedFate from "./assets/set16/twistedfate.jpg"
import Vayne from "./assets/set16/vayne.jpg"
import Veigar from "./assets/set16/veigar.jpg"
import Vi from "./assets/set16/vi.jpg"
import Viego from "./assets/set16/viego.jpg"
import Volibear from "./assets/set16/volibear.jpg"
import Warwick from "./assets/set16/warwick.jpg"
import Wukong from "./assets/set16/wukong.jpg"
import Xerath from "./assets/set16/xerath.jpg"
import XinZhao from "./assets/set16/xinzhao.jpg"
import Yasuo from "./assets/set16/yasuo.jpg"
import Yone from "./assets/set16/yone.jpg"
import Yorick from "./assets/set16/yorick.jpg"
import Yunara from "./assets/set16/yunara.jpg"
import Zaahen from "./assets/set16/zaahen.jpg"
import Ziggs from "./assets/set16/ziggs.jpg"
import Zilean from "./assets/set16/zilean.jpg"
import Zoe from "./assets/set16/zoe.jpg"

/*
  ls assets/set16/* |
  sed -E 's/(assets\/set16\/(.*)\.jpg)/import \2 from ".\/\1"/'
*/

// export type Champion = number
export type Champion = {
  name: string,
  src: string,
  cost: number,
}

/*
  sed -E 's/import ([^ ]+) .+/  { name: "\1", src: \1, cost:   },/'
*/

const champions: Champion[] = [
  { name: "Aatrox", src: Aatrox, cost: 5 },
  { name: "Ahri", src: Ahri, cost: 3 },
  { name: "Ambessa", src: Ambessa, cost: 4 },
  { name: "Anivia", src: Anivia, cost: 1 },
  { name: "Annie", src: Annie, cost: 5 },
  { name: "Aphelios", src: Aphelios, cost: 2 },
  { name: "Ashe", src: Ashe, cost: 2 },
  { name: "Aurelion Sol", src: AurelionSol, cost: 7 },
  { name: "Azir", src: Azir, cost: 5 },
  { name: "Bard", src: Bard, cost: 2 },
  { name: "Baron Nashor", src: BaronNashor, cost: 7 },
  { name: "Bel'Veth", src: BelVeth, cost: 4 },
  { name: "Blitzcrank", src: Blitzcrank, cost: 1 },
  { name: "Braum", src: Braum, cost: 4 },
  { name: "Briar", src: Briar, cost: 1 },
  { name: "Brock", src: Brock, cost: 7 },
  { name: "Caitlyn", src: Caitlyn, cost: 1 },
  { name: "Chogath", src: Chogath, cost: 2 },
  { name: "Darius", src: Darius, cost: 3 },
  { name: "Diana", src: Diana, cost: 4 },
  { name: "Draven", src: Draven, cost: 3 },
  { name: "Dr. Mundo", src: DrMundo, cost: 3 },
  { name: "Ekko", src: Ekko, cost: 2 },
  { name: "Fiddlesticks", src: Fiddlesticks, cost: 5 },
  { name: "Fizz", src: Fizz, cost: 4 },
  { name: "Galio", src: Galio, cost: 5 },
  { name: "Gangplank", src: Gangplank, cost: 3 },
  { name: "Garen", src: Garen, cost: 4 },
  { name: "Graves", src: Graves, cost: 2 },
  { name: "Gwen", src: Gwen, cost: 3 },
  { name: "Illaoi", src: Illaoi, cost: 1 },
  { name: "Jarvan IV", src: JarvanIv, cost: 1 },
  { name: "Jhin", src: Jhin, cost: 1 },
  { name: "Jinx", src: Jinx, cost: 3 },
  { name: "Kaisa", src: Kaisa, cost: 4 },
  { name: "Kalista", src: Kalista, cost: 4 },
  { name: "Kennen", src: Kennen, cost: 3 },
  { name: "Kindred", src: Kindred, cost: 5 },
  { name: "Kobuko & Yuumi", src: KobukoYuumi, cost: 3 },
  { name: "Kog'Maw", src: KogMaw, cost: 1 },
  { name: "LeBlanc", src: LeBlanc, cost: 3 },
  { name: "Leona", src: Leona, cost: 3 },
  { name: "Lissandra", src: Lissandra, cost: 4 },
  { name: "Loris", src: Loris, cost: 3 },
  { name: "Lucian & Senna", src: LucianSenna, cost: 5 },
  { name: "Lulu", src: Lulu, cost: 1 },
  { name: "Lux", src: Lux, cost: 4 },
  { name: "Malzahar", src: Malzahar, cost: 3 },
  { name: "Mel", src: Mel, cost: 5 },
  { name: "Milio", src: Milio, cost: 3 },
  { name: "Miss Fortune", src: MissFortune, cost: 4 },
  { name: "Nasus", src: Nasus, cost: 4 },
  { name: "Nautilus", src: Nautilus, cost: 3 },
  { name: "Neeko", src: Neeko, cost: 2 },
  { name: "Nidalee", src: Nidalee, cost: 4 },
  { name: "Orianna", src: Orianna, cost: 2 },
  { name: "Ornn", src: Ornn, cost: 5 },
  { name: "Poppy", src: Poppy, cost: 2 },
  { name: "Qiyana", src: Qiyana, cost: 1 },
  { name: "Rek'Sai", src: RekSai, cost: 2 },
  { name: "Renekton", src: Renekton, cost: 4 },
  { name: "Rift Herald", src: RiftHerald, cost: 4 },
  { name: "Rumble", src: Rumble, cost: 1 },
  { name: "Ryze", src: Ryze, cost: 7 },
  { name: "Sejuani", src: Sejuani, cost: 3 },
  { name: "Seraphine", src: Seraphine, cost: 4 },
  { name: "Sett", src: Sett, cost: 5 },
  { name: "Shen", src: Shen, cost: 1 },
  { name: "Shyvana", src: Shyvana, cost: 5 },
  { name: "Singed", src: Singed, cost: 4 },
  { name: "Sion", src: Sion, cost: 2 },
  { name: "Skarner", src: Skarner, cost: 4 },
  { name: "Sona", src: Sona, cost: 1 },
  { name: "Swain", src: Swain, cost: 4 },
  { name: "Sylas", src: Sylas, cost: 7 },
  { name: "Tahm Kench", src: TahmKench, cost: 5 },
  { name: "Taric", src: Taric, cost: 4 },
  { name: "Teemo", src: Teemo, cost: 2 },
  { name: "T-Hex", src: THex, cost: 5 },
  { name: "Thresh", src: Thresh, cost: 5 },
  { name: "Tristana", src: Tristana, cost: 2 },
  { name: "Tryndamere", src: Tryndamere, cost: 2 },
  { name: "Twisted Fate", src: TwistedFate, cost: 2 },
  { name: "Vayne", src: Vayne, cost: 3 },
  { name: "Veigar", src: Veigar, cost: 4 },
  { name: "Vi", src: Vi, cost: 2 },
  { name: "Viego", src: Viego, cost: 1 },
  { name: "Volibear", src: Volibear, cost: 5 },
  { name: "Warwick", src: Warwick, cost: 4 },
  { name: "Wukong", src: Wukong, cost: 4 },
  { name: "Xerath", src: Xerath, cost: 5 },
  { name: "Xin Zhao", src: XinZhao, cost: 2 },
  { name: "Yasuo", src: Yasuo, cost: 2 },
  { name: "Yone", src: Yone, cost: 4 },
  { name: "Yorick", src: Yorick, cost: 2 },
  { name: "Yunara", src: Yunara, cost: 4 },
  { name: "Zaahen", src: Zaahen, cost: 7 },
  { name: "Ziggs", src: Ziggs, cost: 5 },
  { name: "Zilean", src: Zilean, cost: 5 },
  { name: "Zoe", src: Zoe, cost: 3 },
]

export const getRandomChampion = (): Champion => {
  const rand = Math.floor(Math.random() * champions.length);
  return champions[rand];
}
