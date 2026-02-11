import { createContext } from 'react';
import type { GameState, GameStateAction } from './GameState';

type GameStateContext = {
  state: GameState,
  dispatch: (action: GameStateAction) => void,
}

export const GameStateContext = createContext<GameStateContext>(null!);
