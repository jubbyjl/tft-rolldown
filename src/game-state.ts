import { getRandomChampion, getRandomTargetPreset, resetChampionPool, type Champion } from "./champions"

type GameResults = {
  rerolls: number,
  targetsSeen: number,
  targetsBought: number,
  misbuys: number,
  timeLeft: number,
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
  | { type: "incrementTime" }
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
          timeLeft: state.timer,
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

      const bought = new Set(state.shop.bought).add(shopChampion.id);

      // check if game continues
      const fin = isTarget && state.shop.gold - shopChampion.champion.cost < 4;
      const status = fin ? "results" : state.status;

      let cantBuy = 0;
      if (fin) {
        state.shop.champions.forEach(x => {
          if (state.targets.includes(x.champion) && !bought.has(x.id)) {
            cantBuy += 1;
          }
        })
      }

      return {
        ...state,
        status: status,
        shop: {
          ...state.shop,
          bought: bought,
          gold: isTarget ? state.shop.gold - shopChampion.champion.cost : state.shop.gold,
        },
        results: {
          ...state.results,
          targetsBought: state.results.targetsBought + targetsBought,
          misbuys: state.results.misbuys + misbuys,
          targetsSeen: state.results.targetsSeen - cantBuy,
        },
      }
    }

    case "incrementTime": {
      if (state.status !== "ingame") return state;
      return {
        ...state,
        results: {
          ...state.results,
          timeLeft: state.results.timeLeft - 1,
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
