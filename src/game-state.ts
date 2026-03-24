import { getRandomChampion, getRandomTargetPreset, resetChampionPool, type Champion } from "./champions"

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
  bought: Set<number>,
  idIncrement: number,
}

type Settings = {
  reroll: string,
}

export type GameState = {
  status: "mainMenu" | "intermission" | "ingame" | "results",
  settings: Settings,
  timer: number,
  targets: Champion[],
  shop: Shop,
  results: GameResults,
}

export type GameStateAction =
  | { type: "play" }
  | { type: "startRound" }
  | { type: "end" }
  | { type: "returnToMenu" }
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
    case "play": {
      if (state.status !== "mainMenu") return state;

      resetChampionPool();
      const targets = getRandomTargetPreset();
      return {
        ...state,
        status: "intermission",
        targets: targets,
        results: {
          rerolls: 0,
          targetsSeen: 0,
          targetsBought: 0,
          misbuys: 0,
        },
        shop: {
          gold: 80,
          champions: [],
          bought: new Set(),
          idIncrement: 1,
        }
      }
    }

    case "startRound": {
      if (state.status !== "intermission") return state;
      
      const champions = getShopChampions(state.shop.idIncrement);

      return {
        ...state,
        status: "ingame",
        results: {
          ...state.results,
          targetsSeen: getTargetsCount(champions, state.targets),
        },
        shop: {
          ...state.shop,
          champions: champions,
          idIncrement: state.shop.idIncrement + champions.length,
        }
      }
    }

    case "end": {
      if (state.status !== "intermission" && state.status !== "ingame") return state;
      return {
        ...state,
        status: "results",
      }
    }

    case "returnToMenu": {
      return {
        ...state,
        status: "mainMenu",
      }
    }
    
    case "reroll": {
      if (state.status !== "ingame" || state.shop.gold < 2) return state;

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
          bought: new Set(),
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
      if (state.status !== "ingame") return state;

      const shopChampion = state.shop.champions.find(x => x.id === action.championId);
      if (shopChampion === undefined ||
          state.shop.bought.has(shopChampion.id) ||
          state.shop.gold < shopChampion.champion.cost) {
        return state;
      }

      const isTarget = state.targets.includes(shopChampion.champion);
      const targetsBought = isTarget ? 1 : 0;
      const misbuys = targetsBought ^ 1;

      // check if game continues
      const status = state.shop.gold - shopChampion.champion.cost < 4 ? "results" : state.status;

      return {
        ...state,
        status: status,
        shop: {
          ...state.shop,
          bought: new Set(state.shop.bought).add(shopChampion.id),
          gold: state.shop.gold - shopChampion.champion.cost,
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
