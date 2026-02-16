import { getRandomChampion, type Champion } from "./champions"

type GameResults = {
  rerolls: number,
  targetsSeen: number,
  targetsBought: number,
  misbuys: number,
}

type ShopChampion = {
  id: number,
  champion: Champion,
}

type Shop = {
  gold: number,
  champions: ShopChampion[],
  idIncrement: number,
}

type Settings = {
  reroll: string,
}

export type GameState = {
  status: "menu" | "started" | "results",
  settings: Settings,
  timer: number,
  targets: Champion[],
  shop: Shop,
  results: GameResults,
}

export type GameStateAction =
  | { type: "start" }
  | { type: "end" }
  | { type: "returnMenu" }
  | { type: "reroll" }
  | { type: "buy", championId: number }
  | { type: "editSettings", settings: Settings }

const getShopChampions = (idStart: number): ShopChampion[] => {
  return [
    { id: idStart + 1, champion: getRandomChampion() },
    { id: idStart + 2, champion: getRandomChampion() },
    { id: idStart + 3, champion: getRandomChampion() },
    { id: idStart + 4, champion: getRandomChampion() },
    { id: idStart + 5, champion: getRandomChampion() },
  ];
}

const getTargetsCount = (champions: ShopChampion[], targets: Champion[]) => {
  let targetsSeen = 0;
  champions.forEach(x => {
    if (targets.includes(x.champion)) {
      targetsSeen += 1;
    }
  })
  return targetsSeen;
}

export const gameStateReducer = (state: GameState, action: GameStateAction): GameState => {
  switch (action.type) {
    case "start": {
      if (state.status !== "menu") return state;

      const targets = [getRandomChampion()];
      const idIncrement = 1;
      const champions = getShopChampions(idIncrement);

      return {
        ...state,
        status: "started",
        targets: targets,
        results: {
          rerolls: 0,
          targetsSeen: getTargetsCount(champions, targets),
          targetsBought: 0,
          misbuys: 0,
        },
        shop: {
          gold: 80,
          champions: champions,
          idIncrement: idIncrement + champions.length,
        }
      }
    }

    case "end": {
      if (state.status !== "started") return state;
      return {
        ...state,
        status: "results",
      }
    }

    case "returnMenu": {
      return {
        ...state,
        status: "menu",
      }
    }
    
    case "reroll": {
      if (state.status !== "started" || state.shop.gold < 2) return state;

      // check if game continues
      if (state.shop.gold - 2 < 4) {
        return {
          ...state,
          status: "results",
        }
      }

      const champions = getShopChampions(state.shop.idIncrement);

      return {
        ...state,
        shop: {
          gold: state.shop.gold - 2,
          champions: champions,
          idIncrement: state.shop.idIncrement + champions.length,
        },
        results: {
          ...state.results,
          rerolls: state.results.rerolls + 1,
          targetsSeen: state.results.targetsSeen + getTargetsCount(champions, state.targets),
          // TODO: account for seen but not enough gold
        }
      }
    }

    case "buy": {
      if (state.status !== "started" || state.shop.gold < 4) return state;

      const champion = state.shop.champions.find(x => x.id === action.championId)?.champion;
      if (champion === undefined) return state;

      const isTarget = state.targets.includes(champion);
      const targetsBought = isTarget ? 1 : 0;
      const misbuys = targetsBought ^ 1;

      // check if game continues
      const status = state.shop.gold - 4 < 4 ? "results" : "started";

      return {
        ...state,
        status: status,
        shop: {
          ...state.shop,
          gold: state.shop.gold - 4,
        },
        results: {
          ...state.results,
          targetsBought: state.results.targetsBought + targetsBought,
          misbuys: state.results.misbuys + misbuys,
        },
      }
    }

    case "editSettings": {
      return {
        ...state,
        settings: action.settings,
      }
    }
      
    default: {
      throw new Error();
    }
  }
}
